# Canonical Reference — Design System MSCREATIVE.SYSTEMS™

> Spec textual canônica e documentação complementar externa ao repo.

## Fonte da verdade (v3.0 — Era Midnight, 2026-04-20)

Este repositório (`1marcelserrano/design-system`) é a fonte da verdade **computacional** do design system:

- **Tokens CSS:** [`css/tokens.css`](../css/tokens.css)
- **Shell/Sections:** [`css/ds-shell.css`](../css/ds-shell.css), [`css/ds-sections.css`](../css/ds-sections.css)
- **HTMLs:** `index.html`, `products.html`, `formats.html`, `governance.html`, `studies.html`
- **Deploy:** https://design-system-beta.vercel.app/

A spec **textual** (humana) canônica vive fora deste repo, no workspace do ecossistema:

- **Spec principal:** `MD FILES/DESIGN_MSCREATIVE.SYSTEMS.md` (living doc, consolida v3.0 — Era Midnight)
- **Decisões:** `MD FILES/KNOWLEDGE/DECISIONS_DESIGN_SYSTEM.md` (DEC-001 a DEC-018)
- **M4 Mascot spec:** `MD FILES/PROJECTS/MSCS/MSCREATIVESYSTEMS/05_Company/M4_Mascot/SPEC.md` (v3.0 com DEC-015)

## Decisões integradas na v3.0

| DEC | Tema | Impacto neste repo |
|---|---|---|
| DEC-001 | MS Midnight | Paleta cream warm no lugar de Gold — `--p-ms-*` |
| DEC-004 | Typo A Post-Digital Hybrid | Fraunces + Inter Tight + IBM Plex Mono |
| DEC-005 | Fronteiristas | `--p-fronteiristas-*` (oliva suave) |
| DEC-006 | Oracle gradient | `--p-oracle-*` (rose → orange) |
| DEC-007 | Style Codex | `--p-style-*` (magenta + laranja) |
| DEC-008 | Design Codex | `--p-design-*` (cinza arquitetônico) |
| DEC-009 | Execution Codex | `--p-execution-*` (laranja queimado) |
| DEC-010 | Neuro Codex | `--p-neuro-*` (turquesa + indigo) |
| DEC-011 | Governança | `--gov-*` (separadores, atribuição MS) |
| DEC-012 | Body/Mono por produto | `--p-{name}-body-*`, `--p-{name}-mono-*` |
| DEC-013 | Emblem cerimonial | `--emblem-*` (Gold reservado para selos) |
| DEC-014 | Subprodutos herança | `--p-skill-*`, `--p-kb-indicator` |
| DEC-015 | M4 Mascot | `--m4-*` (shoes, nocturne, body canônico #FF3B00) |
| DEC-017 | Tokens canônicos | Nomenclatura `--p-{name}-*`, legados comentados |
| DEC-018 | Consolidação doc v3 | Living doc único em `DESIGN_MSCREATIVE.SYSTEMS.md` |

## Versões arquivadas

Specs pré-Midnight (v1/v2/v2.1/v2.2 — era Anton/Gold) foram arquivadas em:

`MD FILES/_archive/2026-04-20_Midnight_Migration/`

Ver README naquele diretório para detalhes do motivo e conteúdo.

## Regra operacional

Ao editar este repo, sempre:

1. Verificar consistência com `MD FILES/DESIGN_MSCREATIVE.SYSTEMS.md`
2. Consultar `DECISIONS_DESIGN_SYSTEM.md` antes de introduzir novos tokens
3. Nunca reativar tokens legados comentados (`--ds-accent-gold`, `--ds-font-*-legacy`)
4. Novos produtos/codexes exigem DEC dedicado antes de virar token em `tokens.css`
