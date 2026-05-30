# CLAUDE.md — Contexto para agentes de IA

> Guia operacional para Claude Code e outros agentes que trabalham neste repositório.
> Para humanos, comece pelo [README.md](./README.md).

## O que é este repo

Design system **canônico** da **MSCREATIVE.SYSTEMS™**. É a fonte da verdade
**computacional** (tokens CSS, componentes, engine de wireframing) consumida como
submódulo pela sede `mscreative.systems` e por projetos de cliente.

- **Era atual:** v3.0 — **Midnight** (paleta cream warm, Gold reservado a selos cerimoniais).
- **Site público:** servido da **raiz** via Vercel → https://design-system-beta.vercel.app
- **Stack:** HTML/CSS/JS **vanilla**. **Não há build, bundler ou dependências de runtime.**

## Como rodar / verificar

```bash
# Servir local (não há build)
python3 -m http.server 8080   # http://localhost:8080

# Sanidade rápida antes de commitar (espelha o CI .github/workflows/validate.yml)
# 1. HTML tem doctype/<html>/</html>
# 2. CSS com chaves balanceadas
# 3. Sem secrets
# 4. Arquivos de fundação presentes (README, CONTRIBUTING, SECURITY, CHANGELOG)
```

## Arquivos canônicos (alterar com cuidado)

| Arquivo | Papel | Regra |
|---------|-------|-------|
| `css/tokens.css` | Source-of-truth dos tokens | Toda mudança → entrada no `CHANGELOG.md` + bump SemVer |
| `docs/CANONICAL_REFERENCE.md` | Referência normativa | Nunca editar sem editar `tokens.css` junto |
| `governance.html` | Regras visuais (do/don't) | Alteração exige justificativa no PR |

## Convenções (não-negociáveis)

- **Commits:** [Conventional Commits](https://www.conventionalcommits.org/) — tipos:
  `feat fix docs style refactor perf test build ci chore revert tokens`.
  Decisões de design referenciam o ID da decisão (ex.: `DEC-018`).
- **Branches:** `feat/<escopo>` · `fix/<escopo>` · `docs/<escopo>` · `tokens/<escopo>` · `chore/<escopo>`.
- **HTML:** indentação 2 espaços, aspas duplas, `lang="pt-BR"`.
- **CSS:** kebab-case, sempre `var(--token-name)`, **sem valores mágicos inline**.
- **JS:** vanilla ES2022+, sem frameworks, JSDoc em funções públicas.
- **Idioma:** docs e commits em **português (pt-BR)**.
- **Caminhos:** HTMLs de superfície e `css/`/`js/` são **irmãos servidos da raiz**.
  Toda referência é relativa e nua (`href="css/tokens.css"`, `href="formats.html#..."`).
  **Não mova esses arquivos sem ajustar todas as referências + config de deploy.**

## Tabus / legado intocável

- **Nunca reativar tokens legados comentados** (`--ds-accent-gold`, `--ds-font-*-legacy`).
  A era Anton/Gold/Âmbar Elétrico (v2.x) foi arquivada — ver `docs/CANONICAL_REFERENCE.md`.
- **Novos produtos/codexes** exigem um `DEC-###` dedicado antes de virar token.
- **Sem dependência nova** — este repo é vanilla por decisão de projeto.
- **Sem merge commit em `main`** (squash ou rebase) e **sem force push em `main`**.
- Âncoras internas legadas (ex.: `#chumbo-quente`) são grandfathered — não renomear em massa.

## O que NÃO commitar

Já coberto por `.gitignore`: `.vercel/`, `.claude/`, `.anthropic/`, `.openai/`,
`node_modules/`, `.env*` (exceto `.env.example`), `*.pem`/`*.key`, logs, `tmp/`,
artefatos de macOS/IDE. **Zero-tolerance a secrets** — o CI faz pattern-scan em cada PR.

## Fluxo esperado de um agente

1. Ler este arquivo + `CONTRIBUTING.md` antes de mexer.
2. Trabalhar em branch dedicada (nunca direto na `main`).
3. Mudou tokens? Atualizar `CHANGELOG.md` e `CANONICAL_REFERENCE.md`.
4. Commits semânticos, um propósito por commit.
5. Abrir PR contra `main` — CI verde + review do CODEOWNER (`@1marcelserrano`).
