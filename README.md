# DAAT Mídia Digital — Site

Landing page institucional da **DAAT Mídia Digital** (HTML, CSS e JavaScript estáticos).

## Conteúdo

- Landing page principal com serviços, planos, cases e formulário de contato
- Suporte a **Português (BR)** e **English (US)** via `i18n-site.js`
- Páginas auxiliares: `conheca-o-projeto.html`, `ouvidoria.html`

## Como visualizar localmente

```bash
cd site-daat-midia
python3 -m http.server 8080
```

Acesse: http://localhost:8080

## Estrutura principal

| Arquivo | Descrição |
|--------|-----------|
| `index.html` | Página principal |
| `i18n-site.js` | Traduções PT/EN e links de WhatsApp por serviço |
| `assets/` | Logo, imagens de prova social e mídia |

## Deploy

Site estático — pode ser publicado em GitHub Pages, Netlify, Vercel ou qualquer hospedagem de arquivos estáticos.
