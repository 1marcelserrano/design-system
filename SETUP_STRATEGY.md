# SETUP_STRATEGY.md — Auditoria & roadmap de organização

> Registro do diagnóstico estrutural do repositório e do plano em fases para um
> setup profissional. Documento vivo — atualizado a cada fase concluída.

**Auditoria realizada em:** 2026-05-30 · **Branch:** `claude/repo-organization-YlEK5`
**Primeiro commit do repo:** 2026-04-17 · **Era atual:** v3.0 Midnight (2026-04-20)
**Governance audit anterior:** 2026-04-22 (commit `09de276`)

## Estado encontrado (verificável)

- Repo enxuto: ~580K (sem `.git`), `.git` ~452K. **Sem mídia pesada, sem artefatos
  suspeitos** (zip/dump/`.DS_Store`/tmp). 16 HTML, 8 MD, 6 CSS, 5 YML, 3 JS.
- Fundação **já presente** (do audit de 2026-04-22): README, LICENSE (MIT),
  `.gitignore`, CONTRIBUTING, SECURITY, CODEOWNERS, CHANGELOG, `.github/`
  (PR template, 3 issue templates, CI `validate.yml`, dependabot).
- Projeto estático vanilla, **sem build**, servido da raiz via Vercel.

## Diagnóstico

**Tensão central:** a camada de **código** já migrou para a v3.0 "Era Midnight",
mas parte da **documentação** ainda descrevia a v2.2 "Âmbar Elétrico" — o repo
falava duas versões ao mesmo tempo.

| # | Problema | Evidência | Prioridade |
|---|----------|-----------|------------|
| 1 | Drift de versão docs↔código | README badge `version-2.2` + rodapé "Âmbar Elétrico", mas `CANONICAL_REFERENCE.md` declara v3.0 Midnight como fonte da verdade | 🔴 Alto |
| 2 | Sem contexto para agentes | Ausência de `CLAUDE.md`/`AGENTS.md` | 🟠 Médio |
| 3 | Sem `.gitattributes` | EOL não normalizado, sem hints de linguist | 🟡 Baixo |
| 4 | CI não cobre `studies/` | `validate.yml` usava `find -maxdepth 2` → HTMLs em profundidade 3 escapavam | 🟡 Baixo |
| 5 | CHANGELOG sem a era v3.0 | DEC-001→018 só nos commits, não no changelog | 🟠 Médio |

**Conclusão:** estruturalmente o repo está **saudável**. Sem nada destrutivo a fazer
(sem mídia para LFS, sem reescrita de histórico necessária). O ganho está em fechar
o drift de versão e adicionar a camada de contexto para agentes.

## Roadmap em fases

### Fase 0 — Fundação (não-destrutiva) ✅
- `CLAUDE.md` + `AGENTS.md` — contexto para agentes.
- `.gitattributes` — normalização EOL + linguist.
- `SETUP_STRATEGY.md` — este documento.
- README + CHANGELOG alinhados à **v3.0 Midnight** (resolve drift #1 e #5).
- CI `validate.yml` ampliado para cobrir `studies/` (resolve #4).

### Fase 1 — Taxonomia
- Repo já separa durável (`css/`, `js/`, `docs/`, superfícies) de processo (`studies/`).
- ⚠️ HTMLs de superfície e `css/`/`js/` são **irmãos servidos da raiz**; toda
  referência é relativa e nua. Mover exige reescrever referências + `vercel.json`.
  Qualquer `git mv` de superfície só após confirmação explícita + mitigação de deploy.

### Fase 2 — Convenções
- Conventional Commits + branch naming já documentados em `CONTRIBUTING.md`.
- Registrados também em `CLAUDE.md`. **Sem mass-rename de legado.**

### Fase 3 — Higiene de Git
- Nada a fazer: sem mídia/artefatos efêmeros rastreados, `.git` pequeno.
- LFS desnecessário. Sem reescrita de histórico.

## Ações manuais do dono (fora do sandbox)

- Conferir que o deploy Vercel continua apontando para a raiz após qualquer mudança.
- Caso a Fase 1 mova superfícies: aplicar o `vercel.json` proposto e validar URLs.
