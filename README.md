# MSCREATIVE.SYSTEMS™ — Design System

[![Status](https://img.shields.io/badge/status-active-brightgreen)](https://github.com/1marcelserrano/design-system)
[![Version](https://img.shields.io/badge/version-3.0%20Midnight-blue)](./CHANGELOG.md)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)
[![Live](https://img.shields.io/badge/live-design--system--beta.vercel.app-black)](https://design-system-beta.vercel.app)

Design system oficial da **MSCREATIVE.SYSTEMS™** — **Era Midnight (v3.0)**: paleta cream warm, tokens canônicos `--p-{produto}-*`, componentes HTML/CSS e engine de wireframing. Gold reservado a selos cerimoniais.

Consumido como submódulo pela sede `mscreative.systems` e por projetos de cliente da MSCREATIVE.

---

## Estrutura

| Pasta / Arquivo | Conteúdo |
|-----------------|----------|
| `src/` | Código servido (superfícies HTML + `css/` + `js/` + `templates/` + `studies/`) |
| `src/css/` | Tokens, shell, seções, editorial, story-tokens |
| `src/js/` | Navigation + wireframe-engine |
| `src/index.html` · `src/formats.html` · `src/products.html` · `src/studies.html` · `src/governance.html` | Superfícies públicas do DS |
| `docs/` | `CANONICAL_REFERENCE.md` · story doc |
| `CLAUDE.md` · `AGENTS.md` | Contexto operacional para agentes de IA |

> **Deploy:** o site é servido a partir de `src/` via `vercel.json` (rewrites). A raiz do repo guarda fundação/governança.

## Arquivos canônicos

- **`src/css/tokens.css`** — source-of-truth dos tokens (cores, tipografia, spacing, radius, shadows)
- **`docs/CANONICAL_REFERENCE.md`** — referência normativa da v3.0 (Era Midnight)
- **`src/governance.html`** — governança visual (regras de uso, do/don't)

## Uso como submódulo

```bash
git submodule add https://github.com/1marcelserrano/design-system.git path/to/design-system
git submodule update --init --recursive
```

Ou consumo direto via Vercel: [design-system-beta.vercel.app](https://design-system-beta.vercel.app)

## Desenvolvimento

Projeto estático (HTML/CSS/JS vanilla). Não requer build — servir local a partir de `src/`:

```bash
python3 -m http.server 8080 --directory src
# http://localhost:8080
```

## Contribuição

- Ler [CONTRIBUTING.md](./CONTRIBUTING.md) antes de abrir PR
- Conventional Commits obrigatório
- Branch naming: `feat/<escopo>`, `fix/<escopo>`, `docs/<escopo>`, `tokens/<escopo>`
- Qualquer mudança em `src/css/tokens.css` exige bump de versão em `CHANGELOG.md`

## Segurança

Ver [SECURITY.md](./SECURITY.md). Como este repo é público e consumido via submódulo, qualquer vulnerabilidade afeta downstream — reportar via canal privado.

## Licença

[MIT](./LICENSE) — © 2026 Marcel Serrano / MSCREATIVE.SYSTEMS™

---

*Design System v3.0 · Era Midnight*
*Powered by MSCREATIVE.SYSTEMS™*
