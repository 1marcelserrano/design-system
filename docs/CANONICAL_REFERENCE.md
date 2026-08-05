# Canonical Reference — Design System MSCREATIVE.SYSTEMS™

> Spec textual canônica e documentação complementar externa ao repo.

## Fonte da verdade (v3.0 — Era Midnight, 2026-04-20)

Este repositório (`1marcelserrano/design-system`) é a fonte da verdade **computacional** do design system:

- **Tokens CSS:** [`css/tokens.css`](../css/tokens.css)
- **Shell/Sections:** [`css/ds-shell.css`](../css/ds-shell.css), [`css/ds-sections.css`](../css/ds-sections.css)
- **HTMLs:** `index.html`, `products.html`, `formats.html`, `governance.html`, `studies.html`
- **Deploy:** https://design-system-beta.vercel.app/

A spec **textual** (humana) canônica agora vive **neste repo** (versionada, com backup git), em `docs/`. Reverte a parte de "fora do repo" da DEC-018/commit `114e4de`: apontar pra `KNOWLEDGE/` (gitignored) deixava o entregável sem backup. A cópia em `KNOWLEDGE/` segue como working copy de upload do Claude Design, espelhada deste repo.

- **DESIGN.md portável:** [`docs/DESIGN.md`](./DESIGN.md) (v3.2 — auto-contido, Claude Design ready; cor reconciliada a DEC-020/021/022/023). Working copy de upload: `MD FILES/KNOWLEDGE/DESIGN.md` (gitignored, espelhada daqui).
- **Pipeline Design Codex™:** [`docs/PROCEDURAL_DESIGN_CODEX_PIPELINE.md`](./PROCEDURAL_DESIGN_CODEX_PIPELINE.md) (método de 6 passos: extrair brand system → DESIGN.md → 4 buckets → iterar → validar WCAG → export).
- **Decisões:** `MSCS_OS/05_operations/DECISIONS_DESIGN_SYSTEM.md` (DEC-001 a DEC-024) — versionada no repo `MSCS_OS` (lar dos canônicos de conteúdo). Working copy: `MD FILES/KNOWLEDGE/DECISIONS_DESIGN_SYSTEM.md` (gitignored, espelhada de lá).
- **M4 Mascot spec:** `MD FILES/PROJECTS/MSCS/MSCREATIVESYSTEMS/05_Company/M4_Mascot/SPEC.md` (v3.0 com DEC-015)
- **Living-doc v3.1 pré-portável** (arquivado): `MD FILES/_archive/2026-06-19_design_md_portable/`

## MSCS DS V5.2 — camada paralela (2026-08-05)

O sistema de dois modos **Tradutor / Veredicto** vive em [`../DESIGN_SYSTEM.md`](../DESIGN_SYSTEM.md),
implementado em [`../css/ms-v5.css`](../css/ms-v5.css) e [`../js/rabisco.js`](../js/rabisco.js),
verificado por [`../tools/contrast.mjs`](../tools/contrast.mjs).

Não substitui a Era Midnight. Prefixo `--ms-*` contra `--ds-*`/`--p-*`: os dois convivem sem
colisão de nome, e as superfícies públicas listadas acima seguem servidas pelo v3.0. **Qual dos
dois governa o site é decisão em aberto** — ver `DESIGN_SYSTEM.md` §10.4. Enquanto ela não existir,
não migrar superfície pública para `--ms-*` sem DEC dedicado.

Os hex do V5.2 são autoridade do `DESIGN_SYSTEM.md`; `css/ms-v5.css` é a implementação, e o
verificador falha se os dois divergirem. Alterar um exige alterar o outro no mesmo commit.

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
| DEC-020 | Lima Ácida acento principal (2026-06-12) | `#B4C636` substitui terracota `#A85A30` (→ `--ds-ed-accent-legacy`) — contraste máximo em fundo escuro + sobrevivência em thumbnail |
| DEC-021 | Quartet ácido (2026-06-12) | Neuro `#45D6A4` · Style `#F2638C` · Design `#FFA428` · Execution `#9D6BF5` (pares escuros derivados; legados DEC-007/008/009/010 comentados) |
| DEC-022 | Oracle pôr-do-sol ácido (2026-06-12) | `--p-oracle-gradient`: `#FFA428` → `#F2638C` → `#9D6BF5` (novo `-mid`); kb-indicator e tênis M4 seguem; label do Oracle vira gradient-clip |
| DEC-023 | Sentence case padrão (2026-06-12) | Caps restrito a wordmark, siglas e kickers mono (B2); fontes intocadas (A1) — 45 uppercase removidos do chrome, 70 preservados (kickers/mockups/estudos) |
| DEC-024 | Fraunces unificado (2026-06-17) | Fraunces governa headline e ênfase nos dois registros via `opsz`. Typo B (IBM Plex Sans + Libre Caslon Text + Space Mono) **superseded** → `--ds-ed-font-*` repontados (Fraunces / Fraunces italic / Inter Tight / IBM Plex Mono); legados comentados (DEC-017). Registro produto = opsz 144 / wght 700–900; editorial = opsz 24–36 / wght 340–400. Cormorant (Typo C) reservada a manifesto/longform. Caixa intocada (DEC-023). Estudos em `studies/` preservados na era Typo B |

## Versões arquivadas

Specs pré-Midnight (v1/v2/v2.1/v2.2 — era Anton/Gold) foram arquivadas em:

`MD FILES/_archive/2026-04-20_Midnight_Migration/`

Ver README naquele diretório para detalhes do motivo e conteúdo.

## Regra operacional

Ao editar este repo, sempre:

1. Verificar consistência com [`docs/DESIGN.md`](./DESIGN.md) (spec textual canônica in-repo)
2. Consultar `DECISIONS_DESIGN_SYSTEM.md` antes de introduzir novos tokens
3. Nunca reativar tokens legados comentados (`--ds-accent-gold`, `--ds-font-*-legacy`)
4. Novos produtos/codexes exigem DEC dedicado antes de virar token em `tokens.css`
