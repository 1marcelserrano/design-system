# Contributing — MSCREATIVE.SYSTEMS™ Design System

Obrigado por contribuir. Este repo é **canônico** — mudanças em tokens e governança afetam todos os projetos downstream.

## Fluxo

1. Fork / branch a partir de `main`
2. Commits em [Conventional Commits](https://www.conventionalcommits.org/)
3. Abrir PR contra `main` — CI precisa estar verde
4. Review do CODEOWNER obrigatório
5. Squash merge (preferido) ou rebase

## Branch naming

| Tipo | Padrão | Exemplo |
|------|--------|---------|
| Feature | `feat/<escopo>` | `feat/story-tokens-v3` |
| Fix | `fix/<escopo>` | `fix/nav-overflow` |
| Docs | `docs/<escopo>` | `docs/canonical-reference-update` |
| Tokens | `tokens/<escopo>` | `tokens/amber-ramp` |
| Chore | `chore/<escopo>` | `chore/ci-cache` |

## Conventional Commits

```
<tipo>(<escopo>): <descrição curta>

<corpo opcional explicando o porquê>

<footer opcional: BREAKING CHANGE, Refs, Co-Authored-By>
```

Tipos aceitos: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`, `tokens`.

## Regras críticas

### Tokens (`css/tokens.css`)
- Qualquer alteração exige entrada em `CHANGELOG.md`
- Bumps SemVer:
  - **Major** — remoção ou rename de token público
  - **Minor** — novo token ou nova escala
  - **Patch** — ajuste de valor sem rename

### Canonical Reference (`docs/CANONICAL_REFERENCE.md`)
- Toda mudança de tokens propaga para o CANONICAL
- Nunca edite o CANONICAL sem editar `tokens.css`

### Governance (`governance.html`)
- Regras visuais (do/don't) são normativas
- Alterações requerem justificativa no corpo do PR

## Code style

- **HTML:** indentação 2 spaces, aspas duplas, `lang="pt-BR"` por padrão
- **CSS:** kebab-case, tokens via `var(--token-name)`, sem valores mágicos inline
- **JS:** vanilla ES2022+, sem frameworks, JSDoc para funções públicas

## Checklist de PR

- [ ] CI verde (JSON + HTML + Secret Scan)
- [ ] CHANGELOG atualizado (se tokens/governance)
- [ ] Docs refletem mudança
- [ ] Visual check no Vercel preview
- [ ] Consumo downstream testado (se breaking)

## Zero-tolerance

- ❌ Secrets em qualquer forma
- ❌ Dependência nova sem justificativa (este repo é vanilla)
- ❌ Merge commit (usar squash ou rebase)
- ❌ Force push em `main`

---

*CONTRIBUTING · design-system · MSCREATIVE.SYSTEMS™*
