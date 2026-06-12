# DAAT Mídia Digital — Site

Landing page institucional da **DAAT Mídia Digital** (HTML, CSS e JavaScript estáticos).

**Site oficial:** [https://daatmidia.com.br](https://daatmidia.com.br)

## Conteúdo

- Landing page principal com serviços, planos, cases e formulário de contato
- Suporte a **Português (BR)** e **English (US)** via `i18n-site.js`
- Páginas auxiliares: `conheca-o-projeto.html`, `ouvidoria.html`

## Visualizar localmente

```bash
python3 -m http.server 8080
```

Acesse: http://localhost:8080

## Publicar na Hostinger (daatmidia.com.br)

### Opção A — ZIP (mais simples)

1. Use o arquivo `daatmidia-site-hostinger.zip` (gerado pelo script abaixo)
2. hPanel → **Gerenciador de arquivos** → `public_html`
3. Apague a página padrão, faça upload do ZIP e **Extraia**

### Opção B — Script automático (FTP)

1. hPanel → **Contas FTP** → copie host, usuário e senha
2. `cp .env.deploy.example .env.deploy` e preencha os dados
3. `chmod +x scripts/deploy-hostinger.sh && ./scripts/deploy-hostinger.sh`

### Opção C — GitHub Actions (deploy automático)

No repositório GitHub, em **Settings → Secrets**, adicione:

| Secret | Exemplo |
|--------|---------|
| `HOSTINGER_FTP_HOST` | `ftp.daatmidia.com.br` |
| `HOSTINGER_FTP_USER` | usuário FTP do hPanel |
| `HOSTINGER_FTP_PASSWORD` | senha FTP |

Cada `git push` na branch `main` publica em `daatmidia.com.br`.

## Estrutura principal

| Arquivo | Descrição |
|--------|-----------|
| `index.html` | Página principal |
| `i18n-site.js` | Traduções PT/EN e WhatsApp por serviço |
| `.htaccess` | HTTPS, www e cache (Hostinger/LiteSpeed) |
| `robots.txt` / `sitemap.xml` | SEO |
| `assets/` | Logo, imagens e mídia |

## Repositório e backup

- GitHub: [github.com/daatmidia/site-daat-midia](https://github.com/daatmidia/site-daat-midia)
- GitHub Pages (backup): [daatmidia.github.io/site-daat-midia](https://daatmidia.github.io/site-daat-midia/)
