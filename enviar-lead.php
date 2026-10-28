<?php
header("Content-Type: application/json; charset=UTF-8");
header("X-Content-Type-Options: nosniff");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(405);
  echo json_encode(["ok" => false, "error" => "method"]);
  exit;
}

function field($key) {
  $value = isset($_POST[$key]) ? $_POST[$key] : "";
  return trim(strip_tags($value));
}

if (field("website") !== "") {
  echo json_encode(["ok" => true]);
  exit;
}

$nome = field("nome");
$empresa = field("empresa");
$email = field("email");
$whatsapp = field("whatsapp");
$servico = field("servico");
$orcamento = field("orcamento");
$objetivo = field("objetivo");
$utmSource = field("utm_source");
$utmMedium = field("utm_medium");
$utmCampaign = field("utm_campaign");
$referrer = field("referrer");

if ($nome === "" || $empresa === "" || $email === "" || $whatsapp === "" || $servico === "") {
  http_response_code(400);
  echo json_encode(["ok" => false, "error" => "required"]);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(["ok" => false, "error" => "email"]);
  exit;
}

$to = "alinemenezes.dev@gmail.com";
$subject = "Novo lead DAAT — " . $nome . " (" . $servico . ")";
$body =
  "Novo lead pelo site daatmidia.com.br\n\n" .
  "Nome: " . $nome . "\n" .
  "Empresa: " . $empresa . "\n" .
  "E-mail: " . $email . "\n" .
  "WhatsApp: " . $whatsapp . "\n" .
  "Serviço: " . $servico . "\n" .
  "Investimento: " . ($orcamento !== "" ? $orcamento : "não informado") . "\n" .
  "Objetivo: " . ($objetivo !== "" ? $objetivo : "não informado") . "\n" .
  "Origem (utm_source): " . ($utmSource !== "" ? $utmSource : "direto / não informado") . "\n" .
  "Mídia (utm_medium): " . ($utmMedium !== "" ? $utmMedium : "não informado") . "\n" .
  "Campanha (utm_campaign): " . ($utmCampaign !== "" ? $utmCampaign : "não informado") . "\n" .
  "Referrer: " . ($referrer !== "" ? $referrer : "não informado") . "\n";

$headers = [
  "From: DAAT Midia Digital <noreply@daatmidia.com.br>",
  "Reply-To: " . $email,
  "MIME-Version: 1.0",
  "Content-Type: text/plain; charset=UTF-8",
  "X-Mailer: DAAT-Site",
];

$sent = @mail($to, "=?UTF-8?B?" . base64_encode($subject) . "?=", $body, implode("\r\n", $headers));

if (!$sent) {
  http_response_code(500);
  echo json_encode(["ok" => false, "error" => "mail"]);
  exit;
}

echo json_encode(["ok" => true]);
