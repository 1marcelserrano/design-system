# MSCREATIVE.SYSTEMS™ — Design System

[![Status](https://img.shields.io/badge/status-active-brightgreen)](https://github.com/1marcelserrano/design-system)
[![Version](https://img.shields.io/badge/version-2.2-blue)](./CHANGELOG.md)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)
[![Live](https://img.shields.io/badge/live-design--system--beta.vercel.app-black)](https://design-system-beta.vercel.app)

Design system oficial da **MSCREATIVE.SYSTEMS™** — paleta **Dark Heavy + Chumbo Quente + Âmbar Elétrico**, tokens canônicos, componentes HTML/CSS e engine de wireframing.

Consumido como submódulo pela sede `mscreative.systems` e por projetos de cliente da MSCREATIVE.

---

## Estrutura

| Pasta / Arquivo | Conteúdo |
|-----------------|----------|
| `css/` | Tokens, shell, seções, editorial, story-tokens |
| `js/` | Navigation + wireframe-engine |
| `docs/` | `CANONICAL_REFERENCE.md` · story doc |
| `studies/` · `templates/` | Estudos de caso e templates reutilizáveis |
| `index.html` · `formats.html` · `products.html` · `studies.html` · `governance.html` | Superfícies públicas do DS |

## Arquivos canônicos

- **`css/tokens.css`** — source-of-truth dos tokens (cores, tipografia, spacing, radius, shadows)
- **`docs/CANONICAL_REFERENCE.md`** — referência normativa da versão 2.2
- **`governance.html`** — governança visual (regras de uso, do/don't)

## Uso como submódulo

```bash
git submodule add https://github.com/1marcelserrano/design-system.git path/to/design-system
git submodule update --init --recursive
```

Ou consumo direto via Vercel: [design-system-beta.vercel.app](https://design-system-beta.vercel.app)

## Desenvolvimento

Projeto estático (HTML/CSS/JS vanilla). Não requer build — servir local:

```bash
python3 -m http.server 8080
# http://localhost:8080
```

## Contribuição

- Ler [CONTRIBUTING.md](./CONTRIBUTING.md) antes de abrir PR
- Conventional Commits obrigatório
- Branch naming: `feat/<escopo>`, `fix/<escopo>`, `docs/<escopo>`, `tokens/<escopo>`
- Qualquer mudança em `css/tokens.css` exige bump de versão em `CHANGELOG.md`

## Segurança

Ver [SECURITY.md](./SECURITY.md). Como este repo é público e consumido via submódulo, qualquer vulnerabilidade afeta downstream — reportar via canal privado.

## Licença

[MIT](./LICENSE) — © 2026 Marcel Serrano / MSCREATIVE.SYSTEMS™

---

*Design System V2.2 · Dark Heavy + Chumbo Quente + Âmbar Elétrico*
*Powered by MSCREATIVE.SYSTEMS™*
