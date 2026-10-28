#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ENV_FILE="$ROOT/.env.deploy"
ZIP_OUT="$ROOT/daatmidia-site-hostinger.zip"

cd "$ROOT"

if [[ -f "$ENV_FILE" ]]; then
  # shellcheck disable=SC1090
  source "$ENV_FILE"
fi

echo "→ Gerando pacote para Hostinger..."
rm -f "$ZIP_OUT"
zip -rq "$ZIP_OUT" \
  index.html i18n-site.js styles.css script.js \
  conheca-o-projeto.html conheca-o-projeto.css conheca-o-projeto.js \
  ouvidoria.html ouvidoria.css ouvidoria.js \
  .htaccess robots.txt sitemap.xml enviar-lead.php tracking.js tracking-config.js \
  assets/fundo-daat.png assets/logo-daat-real.png assets/musica-daat.mp3 \
  assets/prova-social-camargo-escritorio.png assets/prova-social-camargo-notebook.png \
  assets/.gitkeep \
  -x "*.DS_Store"

echo "   Pacote: $ZIP_OUT ($(du -h "$ZIP_OUT" | awk '{print $1}'))"

if [[ -z "${HOSTINGER_FTP_USER:-}" || -z "${HOSTINGER_FTP_PASSWORD:-}" ]]; then
  echo ""
  echo "Upload automático: crie .env.deploy a partir de .env.deploy.example"
  echo "com usuário e senha FTP do hPanel, depois rode este script novamente."
  exit 0
fi

HOST="${HOSTINGER_FTP_HOST:-ftp.daatmidia.com.br}"
REMOTE="${HOSTINGER_FTP_REMOTE_DIR:-/public_html}"

if ! command -v lftp >/dev/null 2>&1; then
  echo "Instale lftp para upload automático (brew install lftp) ou envie o ZIP pelo Gerenciador de arquivos."
  exit 0
fi

echo "→ Enviando arquivos para $HOST:$REMOTE ..."
lftp -u "$HOSTINGER_FTP_USER","$HOSTINGER_FTP_PASSWORD" "$HOST" <<EOF
set ssl:verify-certificate no
set ftp:ssl-allow yes
mirror -Rev --delete --parallel=4 \
  --exclude-glob .git/ \
  --exclude-glob .github/ \
  --exclude-glob .tools/ \
  --exclude-glob .pypackages/ \
  --exclude-glob .venv/ \
  --exclude-glob 'assets daat/' \
  --exclude-glob '*.zip' \
  --exclude-glob .env.deploy* \
  --exclude-glob scripts/ \
  "$ROOT" "$REMOTE"
bye
EOF

echo ""
echo "Site publicado em https://daatmidia.com.br"
