# Changelog — MSCREATIVE.SYSTEMS™ Design System

Todo release notável documentado aqui. Formato: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) · Versionamento: [SemVer](https://semver.org/).

## [Unreleased]

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
