/**
 * DAAT site — Português (Brasil) / English (US)
 */
(function () {
  "use strict";

  var STORAGE_KEY = "daat-lang";
  var WA_PHONE = "5549998200000";

  var WA_SERVICES = [
    "default",
    "landing",
    "web",
    "branding",
    "design",
    "estrategia",
    "trafego",
    "social",
    "suporte",
  ];

  var STRINGS = {
    "pt-BR": {
      meta_title: "DAAT Mídia Digital | Landing Pages, Tráfego Pago e Social Media",
      meta_description:
        "A DAAT cria landing pages que vendem, escala tráfego pago e gerencia mídias sociais para gerar leads e vendas todos os dias.",
      nav_lang_aria: "Selecionar idioma do site",
      nav_brand_aria: "Ir para o topo da página",
      nav_logo_alt: "Logo DAAT Mídia Digital",
      nav_diferenciais: "Diferenciais",
      nav_sobre: "Sobre nós",
      nav_servicos: "Serviços",
      nav_servicos_aria: "Abrir menu de serviços",
      nav_sub_branding: "Branding",
      nav_sub_web: "Desenvolvimento Web",
      nav_sub_design: "Design",
      nav_sub_estrategia: "Estratégia Digital",
      nav_sub_trafego: "Tráfego Pago",
      nav_sub_social: "Social Media",
      nav_sub_suporte: "Suporte e Gestão",
      servicos_linhas_aria: "Linhas de serviço",
      nav_metodologia: "Metodologia",
      nav_resultados: "Resultados",
      nav_cta: "Quero crescer",
      nav_burger_open: "Abrir menu de navegação",
      nav_burger_close: "Fechar menu de navegação",
      a11y_toggle_open: "Abrir acessibilidade",
      a11y_toggle_close: "Fechar acessibilidade",
      a11y_title: "Acessibilidade",
      a11y_font_label: "Fonte",
      a11y_font_minus: "Fonte menor",
      a11y_font_plus: "Fonte maior",
      a11y_font_reset: "Fonte padrão",
      a11y_high_contrast: "Alto contraste",
      a11y_grayscale: "Escala de cinza",
      a11y_reduce_motion: "Reduzir movimento",
      a11y_on: "Ativado",
      a11y_off: "Desativado",
      lang_pt_label: "Português (Brasil)",
      lang_en_label: "English (United States)",
      audio_title: "אודי דמארי — ניגון תפילה · Toque para ouvir",
      audio_play: "Reproduzir música",
      audio_pause: "Pausar música",
      hero_h1_l1: "SOLUÇÕES",
      hero_h1_l2: "DIGITAIS PARA",
      hero_slide_aria: "Serviços em destaque",
      hero_w1: "REDES SOCIAIS",
      hero_w2: "WEBSITE",
      hero_w3: "MARKETING",
      hero_w4: "TRÁFEGO PAGO",
      hero_w5: "SOCIAL MEDIA",
      hero_w6: "LANDING PAGES",
      hero_lead:
        "Se o seu negócio não está vendendo na internet, você está deixando dinheiro na mesa todos os dias. Transformamos presença digital em clientes, faturamento e crescimento previsível.",
      hero_cta: "Quero transformar meu negócio",
      hero_logo_alt: "DAAT — identidade visual em alta definição",
      hero_stats_aria: "Números da DAAT",
      hero_stat_clients: "Clientes atendidos",
      hero_stat_years: "Anos de mercado",
      diff_title: "Por que escolher a DAAT Mídia Digital?",
      diff_li1:
        "<strong>Agência completa</strong> que centraliza toda a operação digital em um só lugar.",
      diff_li2: "Seu posicionamento <strong>nítido e valorizado</strong>.",
      diff_li3: "<strong>Comunicação estratégica</strong> elaborada para o seu público alto.",
      diff_li4:
        "Sites desenvolvidos exclusivamente para o seu negócio, com UX e estrutura pensadas para <strong>alavancar resultados</strong>.",
      diff_li5: "<strong>Marca que gera confiança e credibilidade</strong>.",
      diff_li6:
        "<strong>Execução de alta performance</strong>: posts, criativos e vídeos com foco no crescimento do seu negócio e fortalecimento da identidade.",
      funil_badge: "Funil de conversão",
      funil_h2_full:
        "Estrutura de funil <span class=\"funnel-callout\">(você NÃO tem isso ainda)</span>",
      funil_p: "Seu site precisa seguir essa ordem:",
      funil_ol1: "<strong>Dor</strong> (problema)",
      funil_ol2: "<strong>Identificação</strong>",
      funil_ol3: "<strong>Quebra de crença</strong>",
      funil_ol4: "<strong>Solução</strong>",
      funil_ol5: "<strong>Prova</strong>",
      funil_ol6: "<strong>Oferta</strong>",
      funil_ol7: "<strong>CTA</strong>",
      serv_badge: "O que entregamos",
      serv_h2:
        "Soluções completas para quem quer <span class=\"gradient\">vender de verdade</span>",
      serv_lead:
        "Você não precisa contratar vários fornecedores. Na DAAT você concentra estratégia, execução e otimização contínua em um único time.",
      serv1_h3: "Landing Pages de Alta Conversão",
      serv1_p:
        "Páginas com copy persuasiva, design profissional e estrutura para converter tráfego em leads e vendas.",
      serv1_li1: "Oferta e posicionamento comercial",
      serv1_li2: "Estrutura com CTA estratégico",
      serv1_li3: "Integração com WhatsApp e CRM",
      garantia_badge: "Garantia DAAT · Sites",
      garantia_title: "2 rodadas de ajustes inclusas",
      garantia_desc:
        "Contratar criação de site não precisa ser um risco. Seu projeto inclui duas revisões completas — layout, textos e estrutura — sem custo extra.",
      garantia_li1: "Ajustes de design e navegação",
      garantia_li2: "Revisão de copy e CTAs",
      garantia_li3: "Validação antes da publicação",
      garantia_inline:
        "✓ <strong>2 rodadas de ajustes inclusas</strong> em sites e landing pages",
      serv2_h3: "Tráfego Pago Performance",
      serv2_p:
        "Campanhas no Meta Ads e Google Ads com segmentação inteligente e foco em retorno sobre investimento.",
      serv2_li1: "Planejamento de funil e criativos",
      serv2_li2: "Gestão e otimização diária",
      serv2_li3: "Relatórios com métricas de negócio",
      serv3_h3: "Social Media e Gestão de Conteúdo",
      serv3_p:
        "Posicionamento digital profissional para fortalecer marca, gerar autoridade e nutrir potenciais clientes.",
      serv3_li1: "Calendário editorial estratégico",
      serv3_li2: "Design e copy para redes sociais",
      serv3_li3: "Gestão e evolução de presença digital",
      aud_badge: "Para quem é",
      aud_h2: "Feito para empresas que querem <span class=\"gradient\">crescimento previsível</span>",
      aud1_h3: "Negócios locais",
      aud1_p:
        "Clínicas, escolas, estéticas e serviços que querem agenda cheia com mídia de performance.",
      aud2_h3: "E-commerce",
      aud2_p:
        "Lojas virtuais que precisam aumentar ticket, recompra e escalar faturamento com rentabilidade.",
      aud3_h3: "Prestadores B2B",
      aud3_p:
        "Empresas que vendem serviços de maior valor e precisam de pipeline qualificado.",
      proc_badge: "Método DAAT",
      proc_h2: "Como geramos resultado em 4 etapas",
      proc1_h3: "Diagnóstico",
      proc1_p: "Análise do negócio, oferta, concorrência e oportunidades de escala.",
      proc2_h3: "Estratégia",
      proc2_p: "Plano de funil, criativos, canais, orçamento e metas.",
      proc3_h3: "Execução",
      proc3_p: "Publicação de páginas, campanhas e calendário social.",
      proc4_h3: "Otimização",
      proc4_p: "Melhorias semanais orientadas por dados para aumentar ROI.",
      ba_badge: "Antes e depois",
      ba_h2: "A transformação dos sites dos <span class=\"gradient\">nossos clientes</span>",
      ba_lead:
        "Arraste o controle para comparar o site antigo com o projeto entregue pela DAAT — mais profissional, mobile e pronto para converter.",
      ba_label_before: "Antes",
      ba_label_after: "Depois",
      ba_slider_aria: "Arraste para comparar antes e depois",
      ba_case1_title: "Dr. Camargo Quintão · Advocacia",
      ba_case1_after_alt: "Novo site do escritório Dr. Camargo Quintão criado pela DAAT",
      ba_case1_caption: "Site institucional reformulado com foco em credibilidade, WhatsApp e captação de leads.",
      ba_case2_title: "Página interna · Mesmo cliente",
      ba_case2_after_alt: "Nova página interna do site Dr. Camargo Quintão",
      ba_mock_title: "Escritório de Advocacia — Página Inicial",
      ba_mock_p1: "Bem-vindo ao nosso site. Atuamos em diversas áreas do direito.",
      ba_mock_p2: "Layout genérico · Não responsivo · Sem CTA claro · Pouca conversão",
      ba_mock_p3: "Entre em contato: (49) 0000-0000 · contato@email.com",
      ba_mock2_title: "Áreas de atuação",
      ba_mock2_p: "Texto longo sem hierarquia visual. Difícil leitura no celular.",
      sites_badge: "Portfólio web",
      sites_h2: "Sites <span class=\"gradient\">criados pela DAAT</span>",
      sites_lead:
        "Projetos reais no ar — institucionais, landing pages e páginas de conversão desenvolvidas do zero para nossos clientes.",
      sites_visit: "Visitar site →",
      sites_camargo_tag: "Advocacia",
      sites_camargo_title: "Dr. Camargo Quintão",
      sites_camargo_desc:
        "Site institucional com áreas de atuação, FAQ, artigos jurídicos e captação via WhatsApp para todo o Brasil.",
      sites_camargo_img_alt: "Site do Dr. Camargo Quintão no notebook",
      sites_camargo_preview_aria: "Abrir site do Dr. Camargo Quintão",
      sites_chacara_tag: "Eventos",
      sites_chacara_title: "Chácara do Cris",
      sites_chacara_desc:
        "Site para espaço de eventos em Chapecó — galeria de fotos, tipos de celebração, formulário de orçamento e integração com WhatsApp.",
      sites_chacara_mock_brand: "Chácara do Cris",
      sites_chacara_mock_headline: "Celebre o amor em um cenário encantador e memorável",
      sites_chacara_mock_tags: "Casamentos · Formaturas · Eventos corporativos",
      sites_chacara_preview_aria: "Abrir site da Chácara do Cris",
      portfolio_badge: "Conteúdo real",
      portfolio_h2: "Posts criados pela <span class=\"gradient\">DAAT</span>",
      portfolio_lead:
        "Criativos para Instagram e Facebook com identidade visual, copy estratégica e foco em engajamento e conversão.",
      portfolio_aria: "Carrossel de posts para redes sociais",
      portfolio_prev: "Anterior",
      portfolio_next: "Próximo",
      post1_client: "dr.camargoquintao",
      post1_visual: "Defesa jurídica estratégica em Direito Médico, Civil e Previdenciário",
      post1_tag: "Atendimento online · Todo o Brasil",
      post1_caption: "Post institucional com CTA para WhatsApp e posicionamento de autoridade.",
      post2_client: "clinica.harmonizacao",
      post2_visual: "Sua melhor versão começa com um plano personalizado",
      post2_tag: "Agende sua avaliação",
      post2_caption: "Carrossel de serviços para clínica de estética — design premium e copy de conversão.",
      post3_client: "Dr. Camargo Quintão",
      post3_visual: "Experiência, seriedade e compromisso jurídico",
      post3_caption: "Criativo horizontal para campanha de reconhecimento e geração de contatos.",
      post4_client: "daat.midigital",
      post4_visual: "Landing page + tráfego + social = vendas previsíveis",
      post4_caption: "Post educativo sobre funil digital — reforço de autoridade da agência.",
      post5_client: "clinica.harmonizacao",
      post5_visual: "5 sinais de que sua clínica precisa de marketing digital",
      post5_caption: "Conteúdo de valor para nutrir leads e aumentar alcance orgânico.",
      post6_client: "DAAT Mídia Digital",
      post6_visual: "Diagnóstico gratuito do seu marketing digital",
      post6_caption: "Anúncio estático para captação de leads via formulário e WhatsApp.",
      planos_badge: "Investimento",
      planos_h2: "Pacotes <span class=\"gradient\">Básico</span>, Performance e Full",
      planos_lead:
        "Escolha o plano ideal para o seu momento. Valores mensais de referência — proposta final personalizada após diagnóstico.",
      planos_from: "a partir de",
      planos_month: "/mês",
      planos_cta: "Quero este plano",
      planos_popular: "Mais escolhido",
      planos_note:
        "* Valores indicativos. Investimento final varia conforme escopo, nicho e objetivos. Solicite diagnóstico gratuito.",
      plano_basico_name: "Básico",
      plano_basico_desc: "Presença digital profissional para começar a captar clientes online.",
      plano_basico_price: "R$ 1.997",
      plano_basico_f1: "Landing page ou site até 5 páginas",
      plano_basico_f2: "8 posts/mês (1 rede social)",
      plano_basico_f3: "2 rodadas de ajustes inclusas",
      plano_basico_f4: "Relatório mensal de desempenho",
      plano_perf_name: "Performance",
      plano_perf_desc: "Site + tráfego pago + social media para escalar leads com previsibilidade.",
      plano_perf_price: "R$ 3.997",
      plano_perf_f1: "Site completo + landing de campanha",
      plano_perf_f2: "Gestão de tráfego (Meta ou Google)",
      plano_perf_f3: "12 posts/mês (2 redes sociais)",
      plano_perf_f4: "Reunião quinzenal de performance",
      plano_perf_f5: "Otimização contínua de campanhas",
      plano_full_name: "Full",
      plano_full_desc: "Operação digital completa com estrategista dedicado e máximo ROI.",
      plano_full_price: "R$ 6.997",
      plano_full_f1: "Tudo do plano Performance",
      plano_full_f2: "Tráfego Meta + Google Ads",
      plano_full_f3: "20 posts/mês (3 redes sociais)",
      plano_full_f4: "2 landing pages extras/trimestre",
      plano_full_f5: "Suporte prioritário e estrategista dedicado",
      nav_planos: "Planos",
      res_badge: "Prova social",
      res_h2:
        "Quem contrata a DAAT <span class=\"gradient\">É ESCOLHIDO PELOS CLIENTES!</span>",
      case_full_badge: "Case · Gestão Completa",
      case_full_h3: "Clínica de Harmonização · Dra Eduarda Henkel",
      case_full_lead:
        "Site de captação + tráfego pago + social media integrados pela DAAT — a mesma entrega do pacote Gestão Completa do formulário.",
      case_full_site_mock: "Agende sua avaliação personalizada",
      case_full_site_cta: "WhatsApp",
      case_full_pillar_site_tag: "01 · Site",
      case_full_pillar_site: "Landing de agendamento",
      case_full_pillar_site_desc:
        "Página focada em conversão com WhatsApp integrado, prova social e copy para procedimentos estéticos.",
      case_full_ads_row1: "Leads/mês",
      case_full_ads_row2: "CPL",
      case_full_ads_row3: "ROAS",
      case_full_pillar_trafego_tag: "02 · Tráfego",
      case_full_pillar_trafego: "Meta Ads performance",
      case_full_pillar_trafego_desc:
        "Campanhas de captação com criativos testados, segmentação local e otimização semanal orientada a CPL.",
      case_full_social_mock1: "Sua melhor versão começa aqui",
      case_full_social_mock2: "5 sinais de que sua clínica precisa de marketing",
      case_full_pillar_social_tag: "03 · Social",
      case_full_pillar_social: "Instagram estratégico",
      case_full_pillar_social_desc:
        "Calendário editorial, design premium e conteúdo que posiciona a clínica e nutre leads do tráfego pago.",
      case_full_kpi1_val: "+92%",
      case_full_kpi1_label: "leads qualificados",
      case_full_kpi2_val: "-41%",
      case_full_kpi2_label: "custo por lead",
      case_full_kpi3_val: "12",
      case_full_kpi3_label: "posts/mês no Instagram",
      case_full_quote:
        '"Paramos de postar sem estratégia. Hoje temos conteúdo com posicionamento e geração de negócios."',
      case_full_attrib: "Dra Eduarda Henkel — Clínica de Harmonização Social",
      case_full_cta: "Quero Gestão Completa",
      depo1_quote: '"Em 60 dias nossa captação dobrou e o custo por lead caiu drasticamente."',
      depo1_meta: "Diretor Comercial, empresa educacional",
      depo2_quote:
        '"Paramos de postar sem estratégia. Hoje temos conteúdo com posicionamento e geração de negócios."',
      depo2_meta: "Dra Eduarda Henkel - Clinica de Harmonização Social",
      proof_badge: "Projeto real + depoimento",
      proof_h3: "Dr. Camargo Quintão · Advocacia & Consultoria",
      proof_lead: "Landing page profissional criada pela DAAT para o escritório.",
      proof_img1_alt: "Site do Dr. Camargo Quintão no notebook",
      proof_img2_alt: "Site do Dr. Camargo Quintão em mockup de escritório",
      proof_quote: '"A landing page ficou profissional e converte muito melhor que nosso site antigo."',
      proof_attrib: "Dr Camargo Quintão — Escritório de Advocacia",
      proof_chacara_badge: "Projeto real no ar",
      proof_chacara_h3: "Chácara do Cris · Espaço para Eventos",
      proof_chacara_lead:
        "Site institucional criado pela DAAT para casamentos, formaturas e eventos corporativos em Chapecó — SC.",
      faq_badge: "Dúvidas frequentes",
      faq_h2: "Perguntas de quem quer <span class=\"gradient\">crescer com segurança</span>",
      faq_sum1: "Em quanto tempo começo a ver resultado?",
      faq_p1:
        "Normalmente os primeiros indicadores melhoram entre 15 e 30 dias, com ganho consistente entre 60 e 90 dias.",
      faq_sum2: "Vocês fazem só tráfego ou entregam tudo?",
      faq_p2:
        "Entregamos estratégia completa: landing page, criativos, campanhas, social media e acompanhamento com foco em vendas.",
      faq_sum3: "Como acompanho o desempenho?",
      faq_p3:
        "Você recebe acompanhamento recorrente com métricas claras de leads, CAC, CPL, ROAS e evolução de conversão.",
      cta_badge: "Vamos conversar",
      cta_h2: "Solicite seu plano de crescimento digital",
      cta_p: "Preencha os dados e receba uma proposta sob medida para o seu momento de negócio.",
      form_name: "Nome completo",
      form_company: "Empresa",
      form_email: "E-mail corporativo",
      form_wa: "WhatsApp",
      form_service: "Qual serviço você precisa?",
      form_opt_landing: "Landing Page de Alta Conversão",
      form_opt_trafego: "Tráfego Pago",
      form_opt_social: "Social Media",
      form_opt_full: "Gestão Completa (Landing + Tráfego + Social)",
      form_budget: "Investimento mensal estimado",
      form_goal: "Descreva seu objetivo principal para os próximos 90 dias",
      form_submit: "Quero receber meu diagnóstico",
      form_notice:
        "Ao enviar, você concorda em receber contato da equipe DAAT para apresentação da estratégia.",
      form_alert: "Perfeito! Recebemos seus dados. Em breve nosso time entrará em contato.",
      form_sending: "Enviando seus dados...",
      form_partial:
        "Abrimos o WhatsApp com seus dados. Se o e-mail não chegar, envie a mensagem por lá.",
      footer_tagline: "Landing page profissional para conversão e vendas.",
      footer_logo_alt: "Logo DAAT",
      wa_bubble: "Fale com nossa equipe de atendimento 😃",
      wa_aria: "Falar no WhatsApp com nossa equipe",
      wa_title: "Falar no WhatsApp",
      wa_btn: "Falar no WhatsApp",
      wa_msg_default:
        "Olá, vim pelo site da DAAT Mídia Digital e quero um diagnóstico gratuito. Podemos conversar?",
      wa_msg_landing:
        "Olá! Vi a seção de Landing Pages no site da DAAT e quero uma página que converta visitantes em clientes. Podemos conversar?",
      wa_msg_web:
        "Olá! Tenho interesse em Desenvolvimento Web com a DAAT. Quero um site profissional para meu negócio. Podemos conversar?",
      wa_msg_branding:
        "Olá! Vi os serviços de Branding da DAAT e quero fortalecer a identidade da minha marca. Podemos conversar?",
      wa_msg_design:
        "Olá! Tenho interesse no serviço de Design da DAAT. Podemos conversar sobre um projeto visual?",
      wa_msg_estrategia:
        "Olá! Quero conversar sobre Estratégia Digital com a equipe DAAT. Podemos marcar um diagnóstico?",
      wa_msg_trafego:
        "Olá! Vi a seção de Tráfego Pago da DAAT e quero escalar minhas campanhas com retorno. Podemos conversar?",
      wa_msg_social:
        "Olá! Vi a seção de Social Media da DAAT e quero profissionalizar minhas redes sociais. Podemos conversar?",
      wa_msg_suporte:
        "Olá! Tenho interesse em Suporte e Gestão digital com a DAAT. Podemos conversar?",
      wa_href:
        "https://wa.me/5549998200000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20DAAT%20M%C3%ADdia%20Digital%20e%20quero%20um%20diagn%C3%B3stico%20gratuito.%20Podemos%20conversar%3F",
    },
    "en-US": {
      meta_title: "DAAT Digital Media | Landing Pages, Paid Traffic & Social Media",
      meta_description:
        "DAAT builds landing pages that sell, scales paid traffic, and runs social media to generate leads and sales every day.",
      nav_lang_aria: "Choose site language",
      nav_brand_aria: "Go to top of page",
      nav_logo_alt: "DAAT Digital Media logo",
      nav_diferenciais: "Why us",
      nav_sobre: "About",
      nav_servicos: "Services",
      nav_servicos_aria: "Open services menu",
      nav_sub_branding: "Branding",
      nav_sub_web: "Web development",
      nav_sub_design: "Design",
      nav_sub_estrategia: "Digital strategy",
      nav_sub_trafego: "Paid traffic",
      nav_sub_social: "Social media",
      nav_sub_suporte: "Support & management",
      servicos_linhas_aria: "Service lines",
      nav_metodologia: "Method",
      nav_resultados: "Results",
      nav_cta: "I want to grow",
      nav_burger_open: "Open navigation menu",
      nav_burger_close: "Close navigation menu",
      a11y_toggle_open: "Open accessibility",
      a11y_toggle_close: "Close accessibility",
      a11y_title: "Accessibility",
      a11y_font_label: "Font",
      a11y_font_minus: "Smaller font",
      a11y_font_plus: "Larger font",
      a11y_font_reset: "Default font",
      a11y_high_contrast: "High contrast",
      a11y_grayscale: "Grayscale",
      a11y_reduce_motion: "Reduce motion",
      a11y_on: "On",
      a11y_off: "Off",
      lang_pt_label: "Portuguese (Brazil)",
      lang_en_label: "English (United States)",
      audio_title: "Udi Damari — Nigun Tefilah · Tap to listen",
      audio_play: "Play music",
      audio_pause: "Pause music",
      hero_h1_l1: "DIGITAL",
      hero_h1_l2: "SOLUTIONS FOR",
      hero_slide_aria: "Featured services",
      hero_w1: "SOCIAL NETWORKS",
      hero_w2: "WEBSITE",
      hero_w3: "MARKETING",
      hero_w4: "PAID TRAFFIC",
      hero_w5: "SOCIAL MEDIA",
      hero_w6: "LANDING PAGES",
      hero_lead:
        "If your business is not selling online, you are leaving money on the table every day. We turn digital presence into clients, revenue, and predictable growth.",
      hero_cta: "Transform my business",
      hero_logo_alt: "DAAT — high-definition brand visual",
      hero_stats_aria: "DAAT in numbers",
      hero_stat_clients: "Clients served",
      hero_stat_years: "Years in business",
      diff_title: "Why choose DAAT Digital Media?",
      diff_li1:
        "<strong>Full-service agency</strong> that centralizes your entire digital operation in one place.",
      diff_li2: "Your positioning stays <strong>sharp and valued</strong>.",
      diff_li3: "<strong>Strategic communication</strong> crafted for your high-value audience.",
      diff_li4:
        "Sites built exclusively for your business, with UX and structure designed to <strong>drive results</strong>.",
      diff_li5: "<strong>A brand that builds trust and credibility</strong>.",
      diff_li6:
        "<strong>High-performance execution</strong>: posts, creatives, and video focused on growth and brand strength.",
      funil_badge: "Conversion funnel",
      funil_h2_full:
        "Funnel structure <span class=\"funnel-callout\">(you probably don't have this yet)</span>",
      funil_p: "Your site should follow this order:",
      funil_ol1: "<strong>Pain</strong> (problem)",
      funil_ol2: "<strong>Identification</strong>",
      funil_ol3: "<strong>Belief shift</strong>",
      funil_ol4: "<strong>Solution</strong>",
      funil_ol5: "<strong>Proof</strong>",
      funil_ol6: "<strong>Offer</strong>",
      funil_ol7: "<strong>CTA</strong>",
      serv_badge: "What we deliver",
      serv_h2: "End-to-end solutions for brands that want to <span class=\"gradient\">sell for real</span>",
      serv_lead:
        "You don't need multiple vendors. At DAAT you get strategy, execution, and continuous optimization in one team.",
      serv1_h3: "High-converting landing pages",
      serv1_p:
        "Pages with persuasive copy, professional design, and structure built to turn traffic into leads and sales.",
      serv1_li1: "Offer and commercial positioning",
      serv1_li2: "Structure with a strategic CTA",
      serv1_li3: "WhatsApp and CRM integration",
      garantia_badge: "DAAT guarantee · Websites",
      garantia_title: "2 rounds of revisions included",
      garantia_desc:
        "Hiring a website build shouldn't feel risky. Your project includes two full revision rounds — layout, copy, and structure — at no extra cost.",
      garantia_li1: "Design and navigation adjustments",
      garantia_li2: "Copy and CTA review",
      garantia_li3: "Pre-launch validation",
      garantia_inline:
        "✓ <strong>2 rounds of revisions included</strong> on websites and landing pages",
      serv2_h3: "Performance paid traffic",
      serv2_p:
        "Meta Ads and Google Ads campaigns with smart targeting and a focus on return on ad spend.",
      serv2_li1: "Funnel planning and creatives",
      serv2_li2: "Daily management and optimization",
      serv2_li3: "Reports with business metrics",
      serv3_h3: "Social media & content",
      serv3_p:
        "Professional digital positioning to strengthen your brand, authority, and nurture prospects.",
      serv3_li1: "Strategic editorial calendar",
      serv3_li2: "Design and copy for social channels",
      serv3_li3: "Management and evolution of digital presence",
      aud_badge: "Who it's for",
      aud_h2: "Built for companies that want <span class=\"gradient\">predictable growth</span>",
      aud1_h3: "Local businesses",
      aud1_p:
        "Clinics, schools, aesthetics, and service businesses that want a full calendar with performance media.",
      aud2_h3: "E-commerce",
      aud2_p:
        "Online stores that need higher AOV, repeat purchases, and scalable revenue with healthy margins.",
      aud3_h3: "B2B providers",
      aud3_p: "Companies selling higher-ticket services that need a qualified pipeline.",
      proc_badge: "DAAT method",
      proc_h2: "How we deliver results in 4 steps",
      proc1_h3: "Diagnosis",
      proc1_p: "Business, offer, competition, and scale opportunity analysis.",
      proc2_h3: "Strategy",
      proc2_p: "Funnel plan, creatives, channels, budget, and goals.",
      proc3_h3: "Execution",
      proc3_p: "Launch of pages, campaigns, and social calendar.",
      proc4_h3: "Optimization",
      proc4_p: "Weekly data-driven improvements to increase ROI.",
      ba_badge: "Before & after",
      ba_h2: "How we <span class=\"gradient\">transform client websites</span>",
      ba_lead:
        "Drag the control to compare the old site with the DAAT deliverable — more professional, mobile-ready, and built to convert.",
      ba_label_before: "Before",
      ba_label_after: "After",
      ba_slider_aria: "Drag to compare before and after",
      ba_case1_title: "Dr. Camargo Quintão · Law firm",
      ba_case1_after_alt: "New website for Dr. Camargo Quintão's law firm by DAAT",
      ba_case1_caption: "Institutional site rebuilt for credibility, WhatsApp, and lead capture.",
      ba_case2_title: "Inner page · Same client",
      ba_case2_after_alt: "New inner page on Dr. Camargo Quintão's website",
      ba_mock_title: "Law Firm — Home Page",
      ba_mock_p1: "Welcome to our website. We work in several areas of law.",
      ba_mock_p2: "Generic layout · Not responsive · No clear CTA · Low conversion",
      ba_mock_p3: "Contact us: (49) 0000-0000 · contact@email.com",
      ba_mock2_title: "Practice areas",
      ba_mock2_p: "Long text without visual hierarchy. Hard to read on mobile.",
      sites_badge: "Web portfolio",
      sites_h2: "Websites <span class=\"gradient\">built by DAAT</span>",
      sites_lead:
        "Live projects — institutional sites, landing pages, and conversion-focused pages built from scratch for our clients.",
      sites_visit: "Visit website →",
      sites_camargo_tag: "Law firm",
      sites_camargo_title: "Dr. Camargo Quintão",
      sites_camargo_desc:
        "Institutional website with practice areas, FAQ, legal articles, and WhatsApp lead capture nationwide.",
      sites_camargo_img_alt: "Dr. Camargo Quintão website on a laptop",
      sites_camargo_preview_aria: "Open Dr. Camargo Quintão website",
      sites_chacara_tag: "Events",
      sites_chacara_title: "Chácara do Cris",
      sites_chacara_desc:
        "Event venue website in Chapecó — photo gallery, celebration types, quote form, and WhatsApp integration.",
      sites_chacara_mock_brand: "Chácara do Cris",
      sites_chacara_mock_headline: "Celebrate love in an enchanting, memorable setting",
      sites_chacara_mock_tags: "Weddings · Graduations · Corporate events",
      sites_chacara_preview_aria: "Open Chácara do Cris website",
      portfolio_badge: "Real content",
      portfolio_h2: "Posts created by <span class=\"gradient\">DAAT</span>",
      portfolio_lead:
        "Instagram and Facebook creatives with brand identity, strategic copy, and a focus on engagement and conversion.",
      portfolio_aria: "Social media posts carousel",
      portfolio_prev: "Previous",
      portfolio_next: "Next",
      post1_client: "dr.camargoquintao",
      post1_visual: "Strategic legal defense in Medical, Civil, and Social Security law",
      post1_tag: "Online service · Nationwide",
      post1_caption: "Institutional post with WhatsApp CTA and authority positioning.",
      post2_client: "clinica.harmonizacao",
      post2_visual: "Your best version starts with a personalized plan",
      post2_tag: "Book your assessment",
      post2_caption: "Service carousel for aesthetics clinic — premium design and conversion copy.",
      post3_client: "Dr. Camargo Quintão",
      post3_visual: "Experience, seriousness, and legal commitment",
      post3_caption: "Horizontal creative for awareness and lead generation campaigns.",
      post4_client: "daat.midigital",
      post4_visual: "Landing page + traffic + social = predictable sales",
      post4_caption: "Educational post on digital funnels — agency authority building.",
      post5_client: "clinica.harmonizacao",
      post5_visual: "5 signs your clinic needs digital marketing",
      post5_caption: "Value content to nurture leads and grow organic reach.",
      post6_client: "DAAT Digital Media",
      post6_visual: "Free diagnosis of your digital marketing",
      post6_caption: "Static ad for lead capture via form and WhatsApp.",
      planos_badge: "Investment",
      planos_h2: "<span class=\"gradient\">Basic</span>, Performance & Full packages",
      planos_lead:
        "Pick the plan that fits your stage. Reference monthly values — final proposal tailored after diagnosis.",
      planos_from: "starting at",
      planos_month: "/mo",
      planos_cta: "I want this plan",
      planos_popular: "Most popular",
      planos_note:
        "* Indicative values. Final investment varies by scope, niche, and goals. Request a free diagnosis.",
      plano_basico_name: "Basic",
      plano_basico_desc: "Professional digital presence to start capturing clients online.",
      plano_basico_price: "R$ 1,997",
      plano_basico_f1: "Landing page or site up to 5 pages",
      plano_basico_f2: "8 posts/month (1 social network)",
      plano_basico_f3: "2 revision rounds included",
      plano_basico_f4: "Monthly performance report",
      plano_perf_name: "Performance",
      plano_perf_desc: "Site + paid traffic + social media to scale leads predictably.",
      plano_perf_price: "R$ 3,997",
      plano_perf_f1: "Full site + campaign landing page",
      plano_perf_f2: "Traffic management (Meta or Google)",
      plano_perf_f3: "12 posts/month (2 social networks)",
      plano_perf_f4: "Biweekly performance meeting",
      plano_perf_f5: "Continuous campaign optimization",
      plano_full_name: "Full",
      plano_full_desc: "Complete digital operation with dedicated strategist and maximum ROI.",
      plano_full_price: "R$ 6,997",
      plano_full_f1: "Everything in Performance",
      plano_full_f2: "Meta + Google Ads traffic",
      plano_full_f3: "20 posts/month (3 social networks)",
      plano_full_f4: "2 extra landing pages/quarter",
      plano_full_f5: "Priority support and dedicated strategist",
      nav_planos: "Plans",
      res_badge: "Social proof",
      res_h2: "When you hire DAAT, <span class=\"gradient\">clients choose you.</span>",
      case_full_badge: "Case · Full management",
      case_full_h3: "Aesthetics Clinic · Dr. Eduarda Henkel",
      case_full_lead:
        "Capture site + paid traffic + social media integrated by DAAT — the same deliverable as the Full Management form option.",
      case_full_site_mock: "Book your personalized assessment",
      case_full_site_cta: "WhatsApp",
      case_full_pillar_site_tag: "01 · Site",
      case_full_pillar_site: "Booking landing page",
      case_full_pillar_site_desc:
        "Conversion-focused page with integrated WhatsApp, social proof, and copy for aesthetic procedures.",
      case_full_ads_row1: "Leads/month",
      case_full_ads_row2: "CPL",
      case_full_ads_row3: "ROAS",
      case_full_pillar_trafego_tag: "02 · Traffic",
      case_full_pillar_trafego: "Meta Ads performance",
      case_full_pillar_trafego_desc:
        "Lead campaigns with tested creatives, local targeting, and weekly CPL-focused optimization.",
      case_full_social_mock1: "Your best version starts here",
      case_full_social_mock2: "5 signs your clinic needs marketing",
      case_full_pillar_social_tag: "03 · Social",
      case_full_pillar_social: "Strategic Instagram",
      case_full_pillar_social_desc:
        "Editorial calendar, premium design, and content that positions the clinic and nurtures paid traffic leads.",
      case_full_kpi1_val: "+92%",
      case_full_kpi1_label: "qualified leads",
      case_full_kpi2_val: "-41%",
      case_full_kpi2_label: "cost per lead",
      case_full_kpi3_val: "12",
      case_full_kpi3_label: "Instagram posts/month",
      case_full_quote:
        '"We stopped posting without strategy. Today our content builds positioning and drives business."',
      case_full_attrib: "Dr. Eduarda Henkel — Aesthetics clinic",
      case_full_cta: "I want Full Management",
      depo1_quote: '"In 60 days our lead volume doubled and cost per lead dropped sharply."',
      depo1_meta: "Commercial Director, education company",
      depo2_quote:
        '"We stopped posting without strategy. Today our content builds positioning and drives business."',
      depo2_meta: "Dr. Eduarda Henkel — Aesthetics clinic",
      proof_badge: "Real project + testimonial",
      proof_h3: "Dr. Camargo Quintão · Law & Consulting",
      proof_lead: "Professional landing page built by DAAT for the firm.",
      proof_img1_alt: "Dr. Camargo Quintão website on a laptop",
      proof_img2_alt: "Dr. Camargo Quintão website in office mockup",
      proof_quote: '"The landing page looks professional and converts far better than our old website."',
      proof_attrib: "Dr. Camargo Quintão — Law firm",
      proof_chacara_badge: "Live project",
      proof_chacara_h3: "Chácara do Cris · Event Venue",
      proof_chacara_lead:
        "Institutional website built by DAAT for weddings, graduations, and corporate events in Chapecó — Brazil.",
      faq_badge: "FAQ",
      faq_h2: "Questions from teams that want to <span class=\"gradient\">grow with confidence</span>",
      faq_sum1: "How soon will I see results?",
      faq_p1:
        "Early indicators usually improve within 15–30 days, with consistent gains between 60 and 90 days.",
      faq_sum2: "Do you only run ads or deliver everything?",
      faq_p2:
        "We deliver full strategy: landing page, creatives, campaigns, social media, and sales-focused follow-up.",
      faq_sum3: "How do I track performance?",
      faq_p3:
        "You get recurring reporting with clear metrics on leads, CAC, CPL, ROAS, and conversion trends.",
      cta_badge: "Let's talk",
      cta_h2: "Request your digital growth plan",
      cta_p: "Fill in your details and receive a tailored proposal for your stage.",
      form_name: "Full name",
      form_company: "Company",
      form_email: "Work email",
      form_wa: "WhatsApp",
      form_service: "Which service do you need?",
      form_opt_landing: "High-converting landing page",
      form_opt_trafego: "Paid traffic",
      form_opt_social: "Social media",
      form_opt_full: "Full management (Landing + Traffic + Social)",
      form_budget: "Estimated monthly investment",
      form_goal: "Describe your main goal for the next 90 days",
      form_submit: "Get my free diagnosis",
      form_notice:
        "By submitting, you agree to be contacted by DAAT to present the strategy.",
      form_alert: "Perfect! We received your details. Our team will reach out soon.",
      form_sending: "Sending your details...",
      form_partial:
        "We opened WhatsApp with your details. If the email does not arrive, send the message there.",
      footer_tagline: "Professional landing page for conversion and sales.",
      footer_logo_alt: "DAAT logo",
      wa_bubble: "Talk to our support team 😃",
      wa_aria: "Chat on WhatsApp with our team",
      wa_title: "WhatsApp",
      wa_btn: "Chat on WhatsApp",
      wa_msg_default:
        "Hi, I came from the DAAT Digital Media website and I'd like a free diagnosis. Can we chat?",
      wa_msg_landing:
        "Hi! I saw the Landing Pages section on the DAAT website and I want a page that converts visitors into clients. Can we chat?",
      wa_msg_web:
        "Hi! I'm interested in Web Development with DAAT. I want a professional website for my business. Can we chat?",
      wa_msg_branding:
        "Hi! I saw DAAT's Branding services and I want to strengthen my brand identity. Can we chat?",
      wa_msg_design:
        "Hi! I'm interested in DAAT's Design service. Can we talk about a visual project?",
      wa_msg_estrategia:
        "Hi! I'd like to discuss Digital Strategy with the DAAT team. Can we schedule a diagnosis?",
      wa_msg_trafego:
        "Hi! I saw the Paid Traffic section on the DAAT website and I want to scale my campaigns with ROI. Can we chat?",
      wa_msg_social:
        "Hi! I saw the Social Media section on the DAAT website and I want to professionalize my social channels. Can we chat?",
      wa_msg_suporte:
        "Hi! I'm interested in Support & Management with DAAT. Can we chat?",
      wa_href:
        "https://wa.me/5549998200000?text=Hi%2C%20I%20came%20from%20the%20DAAT%20Digital%20Media%20website%20and%20I%27d%20like%20a%20free%20diagnosis.%20Can%20we%20chat%3F",
    },
  };

  function getLang() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en-US" || saved === "pt-BR") return saved;
    return "pt-BR";
  }

  function t(lang, key) {
    var bag = STRINGS[lang] || STRINGS["pt-BR"];
    return bag[key] != null ? bag[key] : key;
  }

  function buildWaHref(lang, service) {
    var msgKey = "wa_msg_" + (service || "default");
    var text = t(lang, msgKey);
    if (text === msgKey) text = t(lang, "wa_msg_default");
    return "https://wa.me/" + WA_PHONE + "?text=" + encodeURIComponent(text);
  }

  function applyWaLink(el, lang) {
    if (!el) return;
    lang = lang || getLang();
    var service = el.getAttribute("data-wa-service") || "default";
    el.setAttribute("href", buildWaHref(lang, service));
  }

  function applyWaLinks(lang) {
    lang = lang || getLang();
    document.querySelectorAll("[data-wa-service]").forEach(function (el) {
      applyWaLink(el, lang);
    });
  }

  function applyDaatLang(lang) {
    if (lang !== "en-US" && lang !== "pt-BR") lang = "pt-BR";
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    window.__DAAT_LANG = lang;

    var bag = STRINGS[lang];

    document.title = bag.meta_title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", bag.meta_description);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (bag[key] != null) el.textContent = bag[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (bag[key] != null) el.innerHTML = bag[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (bag[key] != null) el.setAttribute("placeholder", bag[key]);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (bag[key] != null) el.setAttribute("aria-label", bag[key]);
    });

    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-title");
      if (bag[key] != null) el.setAttribute("title", bag[key]);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (bag[key] != null) el.setAttribute("alt", bag[key]);
    });

    document.querySelectorAll("[data-i18n-href]").forEach(function (el) {
      if (el.hasAttribute("data-wa-service")) return;
      var key = el.getAttribute("data-i18n-href");
      if (bag[key] != null) el.setAttribute("href", bag[key]);
    });

    applyWaLinks(lang);

    var audioBtn = document.getElementById("bgMusicToggle");
    if (audioBtn) {
      var playing = audioBtn.classList.contains("is-playing");
      audioBtn.setAttribute("aria-label", playing ? bag.audio_pause : bag.audio_play);
    }

    document.querySelectorAll(".nav-lang-btn").forEach(function (btn) {
      var isPt = btn.getAttribute("data-lang") === "pt-BR";
      var active = (isPt && lang === "pt-BR") || (!isPt && lang === "en-US");
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    var burger = document.getElementById("navBurger");
    if (burger) {
      var drawerOpen = document.body.classList.contains("nav-drawer-open");
      burger.setAttribute(
        "aria-label",
        drawerOpen ? bag.nav_burger_close : bag.nav_burger_open
      );
    }
  }

  window.DAAT_I18N = {
    getLang: getLang,
    apply: applyDaatLang,
    applyWaLink: applyWaLink,
    applyWaLinks: applyWaLinks,
    buildWaHref: buildWaHref,
    waServices: WA_SERVICES,
    t: function (key) {
      return t(getLang(), key);
    },
    strings: STRINGS,
  };

  function initDaatI18nUi() {
    applyDaatLang(getLang());
    document.querySelectorAll(".nav-lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        applyDaatLang(lang);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDaatI18nUi);
  } else {
    initDaatI18nUi();
  }
})();
