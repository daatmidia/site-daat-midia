#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
GH_BIN="$ROOT/.tools/gh_2.94.0_macOS_arm64/bin/gh"
REPO_NAME="${1:-site-daat-midia}"

cd "$ROOT"

if [[ ! -x "$GH_BIN" ]]; then
  echo "GitHub CLI não encontrado em .tools/. Execute o setup primeiro."
  exit 1
fi

if ! "$GH_BIN" auth status >/dev/null 2>&1; then
  echo "Faça login no GitHub:"
  "$GH_BIN" auth login --hostname github.com --git-protocol https --web
fi

if "$GH_BIN" repo view "daatmidia/$REPO_NAME" >/dev/null 2>&1; then
  echo "Repositório daatmidia/$REPO_NAME já existe."
else
  "$GH_BIN" repo create "$REPO_NAME" \
    --public \
    --source=. \
    --remote=origin \
    --description "Site institucional DAAT Mídia Digital — landing page estática"
fi

git push -u origin main

echo ""
echo "Repositório publicado:"
"$GH_BIN" repo view --web 2>/dev/null || "$GH_BIN" repo view --json url -q .url
