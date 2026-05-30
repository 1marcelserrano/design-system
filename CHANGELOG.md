# Changelog — MSCREATIVE.SYSTEMS™ Design System

Todo release notável documentado aqui. Formato: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) · Versionamento: [SemVer](https://semver.org/).

## [Unreleased]

### Changed
- **Taxonomia:** código servido movido para `src/` (superfícies, `css/`, `js/`, `templates/`, `studies/`);
  fundação/governança e `docs/` permanecem na raiz. Histórico preservado via `git mv`.
- `studies/editorial_typography/` → `src/studies/editorial-typography/` (kebab-case), arquivos e links internos.

### Added
- `vercel.json` — rewrites mapeando a raiz pública do deploy para `src/`.

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

## [3.0.0 Midnight] — 2026-04-20

Migração da era **Anton/Gold/Âmbar Elétrico** (v2.x) para a **Era Midnight**.
Decisões DEC-001 a DEC-018 — referência completa em `docs/CANONICAL_REFERENCE.md`.

### Added
- Tokens canônicos `--p-{produto}-*` para os 7 produtos/codexes (DEC-005 a DEC-010)
- `--p-ms-*` (paleta MS Midnight, cream warm) substituindo Gold como cor primária (DEC-001)
- Tipografia Typo A "Post-Digital Hybrid": Fraunces + Inter Tight + IBM Plex Mono (DEC-004)
- `--p-{name}-body-*` / `--p-{name}-mono-*` — body/mono por produto (DEC-012)
- `--emblem-*` (Gold reservado a selos cerimoniais) (DEC-013)
- `--p-skill-*`, `--p-kb-indicator` — herança de subprodutos (DEC-014)
- `--m4-*` — tokens do mascote M4 (DEC-015)
- `--gov-*` — separadores e atribuição de governança (DEC-011)
- 7 ícones de produto migrados para geometrias wireframe 3D

### Changed
- **BREAKING:** nomenclatura de tokens passa a `--p-{name}-*`; tokens legados comentados (DEC-017)
- Consolidação da spec textual em living doc único (DEC-018)

### Deprecated
- Tokens legados `--ds-accent-gold`, `--ds-font-*-legacy` — comentados, **não reativar**

---

## [2.2.0] — Releases anteriores

Versão **2.2** — Dark Heavy + Chumbo Quente + Âmbar Elétrico (era arquivada). Histórico detalhado em `docs/CANONICAL_REFERENCE.md` e nos commits antes desta introdução de CHANGELOG.

---

*CHANGELOG · design-system · MSCREATIVE.SYSTEMS™*
