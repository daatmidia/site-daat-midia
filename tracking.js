(function () {
  "use strict";

  var cfg = window.DAAT_TRACKING || {};
  var GA4 = (cfg.ga4 || "").trim();
  var PIXEL = String(cfg.metaPixel || "").trim();
  var ATTR_KEY = "daat_attr";

  function utmFromUrl() {
    var p = new URLSearchParams(window.location.search);
    var keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
    var out = {};
    var found = false;
    keys.forEach(function (k) {
      var v = p.get(k);
      if (v) {
        out[k] = v;
        found = true;
      }
    });
    var gclid = p.get("gclid");
    var fbclid = p.get("fbclid");
    if (gclid) {
      out.gclid = gclid;
      found = true;
    }
    if (fbclid) {
      out.fbclid = fbclid;
      found = true;
    }
    return found ? out : null;
  }

  function saveAttr(data) {
    try {
      localStorage.setItem(
        ATTR_KEY,
        JSON.stringify({
          utm_source: data.utm_source || "",
          utm_medium: data.utm_medium || "",
          utm_campaign: data.utm_campaign || "",
          utm_content: data.utm_content || "",
          utm_term: data.utm_term || "",
          gclid: data.gclid || "",
          fbclid: data.fbclid || "",
          referrer: document.referrer || "",
          landing: window.location.pathname + window.location.search,
          ts: Date.now(),
        })
      );
    } catch (_) {}
  }

  function getAttr() {
    var fromUrl = utmFromUrl();
    if (fromUrl) saveAttr(fromUrl);
    try {
      var raw = localStorage.getItem(ATTR_KEY);
      if (raw) return JSON.parse(raw);
    } catch (_) {}
    return {
      utm_source: fromUrl && fromUrl.utm_source ? fromUrl.utm_source : "",
      utm_medium: fromUrl && fromUrl.utm_medium ? fromUrl.utm_medium : "",
      utm_campaign: fromUrl && fromUrl.utm_campaign ? fromUrl.utm_campaign : "",
      referrer: document.referrer || "",
    };
  }

  function fillFormAttribution() {
    var attr = getAttr();
    var form = document.getElementById("leadForm");
    if (!form) return;
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "referrer"].forEach(function (name) {
      var input = form.querySelector('input[name="' + name + '"]');
      if (!input) {
        input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        form.appendChild(input);
      }
      input.value = attr[name] || "";
    });
  }

  function eventParams(extra) {
    var attr = getAttr();
    var params = {
      page_location: window.location.href,
      page_title: document.title,
      traffic_source: attr.utm_source || "(direct)",
      traffic_medium: attr.utm_medium || (document.referrer ? "referral" : "(none)"),
      traffic_campaign: attr.utm_campaign || "",
      referrer: attr.referrer || document.referrer || "",
    };
    if (extra) {
      Object.keys(extra).forEach(function (k) {
        if (extra[k] != null && extra[k] !== "") params[k] = extra[k];
      });
    }
    return params;
  }

  function loadGa4() {
    if (!GA4 || GA4.indexOf("G-") !== 0) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function () {
        window.dataLayer.push(arguments);
      };
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA4);
    document.head.appendChild(s);
    window.gtag("js", new Date());
    window.gtag("config", GA4, {
      anonymize_ip: true,
      send_page_view: true,
    });
  }

  function loadMeta() {
    if (!PIXEL || !/^\d+$/.test(PIXEL)) return;
    if (window.fbq) return;
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", PIXEL);
    window.fbq("track", "PageView");
    var ns = document.getElementById("metaPixelNoscript");
    if (ns) {
      ns.innerHTML =
        '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=' +
        encodeURIComponent(PIXEL) +
        '&ev=PageView&noscript=1" alt="">';
    }
  }

  function trackGa(name, extra) {
    if (typeof window.gtag === "function" && GA4) {
      window.gtag("event", name, eventParams(extra));
    }
  }

  function trackMeta(name, extra) {
    if (typeof window.fbq === "function" && PIXEL) {
      window.fbq("track", name, extra || {});
    }
  }

  window.DAAT_TRACK = {
    lead: function (extra) {
      var params = eventParams(Object.assign({ event_category: "conversion" }, extra || {}));
      trackGa("generate_lead", params);
      trackMeta("Lead", {
        content_name: (extra && extra.service) || "formulario",
        content_category: "lead",
      });
    },
    contact: function (extra) {
      var params = eventParams(Object.assign({ event_category: "engagement" }, extra || {}));
      trackGa("contact", params);
      trackMeta("Contact", {
        content_name: (extra && extra.channel) || "whatsapp",
      });
    },
    selectPlan: function (plan) {
      trackGa("select_content", eventParams({ content_type: "plan", item_id: plan || "" }));
      trackMeta("ViewContent", { content_name: plan || "plano", content_type: "product" });
    },
    getAttr: getAttr,
  };

  loadGa4();
  loadMeta();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fillFormAttribution);
  } else {
    fillFormAttribution();
  }

  document.addEventListener(
    "click",
    function (e) {
      var a = e.target.closest("a");
      if (!a) return;
      if (a.classList.contains("whatsapp-float-wrap") || a.classList.contains("btn-wa") || a.getAttribute("data-wa-service")) {
        window.DAAT_TRACK.contact({
          channel: "whatsapp",
          service: a.getAttribute("data-wa-service") || "default",
        });
      }
      if (a.getAttribute("data-i18n") === "planos_cta") {
        var card = a.closest(".plano-card");
        var name = card && card.querySelector(".plano-name") ? card.querySelector(".plano-name").textContent.trim() : "plano";
        window.DAAT_TRACK.selectPlan(name);
      }
    },
    true
  );
})();
