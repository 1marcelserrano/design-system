# Changelog — MSCREATIVE.SYSTEMS™ Design System

Todo release notável documentado aqui. Formato: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) · Versionamento: [SemVer](https://semver.org/).

## [Unreleased]

### Changed
- **DEC-021 (2026-06-12)** — Paleta ácida do Codex Quartet: Neuro menta ácida `#45D6A4`/`#1F8A63` · Style toranja ácida `#F2638C`/`#B23358` · Design tangerina ácida `#FFA428`/`#C77400` · Execution violeta elétrica `#9D6BF5`/`#6A3CCB`. Subordinadas à lima ácida principal (DEC-020); marcam jurisdição, nunca substituem o acento da marca. Legados (DEC-007/008/009/010) comentados nos tokens. Subprodutos `--p-skill-*` herdam. PENDÊNCIA: gradiente do Oracle (`--p-oracle-accent-*`) e `--p-kb-indicator` seguem rosa→laranja legado — redecisão aguarda mockup.
- **DEC-020 (2026-06-12)** — Lima ácida `#B4C636` vira acento principal do DS V3.0 (paleta editorial + escopo MSCS): contraste máximo em fundo escuro + sobrevivência em thumbnail. Terracota `#A85A30` vira acento legado (`--ds-ed-accent-legacy` / `--ds-ed-accent-legacy-dark`) — peças antigas continuam válidas. Par escuro do gradiente: `#6A3818` → `#6A7820`. Estudos datados em `studies/editorial_typography/` preservados na era terracota.

## [Governance 1.0.0] — 2026-04-22

### Added
- `README.md` profissional com badges, estrutura e instruções de submódulo
- `CODEOWNERS` — review obrigatório nos paths canônicos (`tokens.css`, `CANONICAL_REFERENCE.md`, `governance.html`)
- `SECURITY.md` — política, SLA, escopo submódulo, canal privado de reporte
- `CONTRIBUTING.md` — Conventional Commits, branch naming, regras de tokens
- `.github/pull_request_template.md` + issue templates (bug, feature, tokens)
- `.github/workflows/validate.yml` — html-check, css-validate, secret-scan
- `.github/dependabot.yml` — github-actions weekly

### Changed
- `.gitignore` expandido — `.vercel/`, `.claude/`, `.anthropic/`, macOS, IDE, Node, env

### Security
- CI passa a rodar pattern-scan por secret em cada PR

---

## [2.2.0] — Releases anteriores

Versão **2.2** — Dark Heavy + Chumbo Quente + Âmbar Elétrico. Histórico detalhado em `docs/CANONICAL_REFERENCE.md` e nos commits antes desta introdução de CHANGELOG.

---

*CHANGELOG · design-system · MSCREATIVE.SYSTEMS™*
