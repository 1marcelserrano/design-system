# Security Policy — MSCREATIVE.SYSTEMS™ Design System

## Escopo

Este repositório é **público** e consumido como **submódulo** por projetos MSCREATIVE e de clientes. Qualquer vulnerabilidade aqui tem **impacto downstream** — reporte com a urgência apropriada.

## Versões suportadas

| Versão | Suporte |
|--------|---------|
| 2.2.x  | ✅ Ativa |
| 2.1.x  | ⚠️ Apenas fixes críticos |
| < 2.1  | ❌ Fim de suporte |

## Reportar vulnerabilidade

**Não** abrir issue pública. Use um dos canais privados:

1. **Preferido:** [GitHub Security Advisory](https://github.com/1marcelserrano/design-system/security/advisories/new)
2. Email: `1marcelserrano@gmail.com` (assunto: `[SECURITY] design-system — <resumo>`)

### SLA de resposta

| Severidade | Primeira resposta | Fix alvo |
|------------|-------------------|----------|
| Critical   | 24h               | 72h      |
| High       | 48h               | 7 dias   |
| Medium     | 5 dias            | 30 dias  |
| Low        | 10 dias           | Next release |

## Escopo de ameaças

### In-scope
- XSS via tokens/HTML templates
- Injeção de CSS maliciosa que exfiltra dados
- Dependências `js/` vulneráveis
- Conteúdo publicado no deploy Vercel que exponha credenciais

### Out-of-scope
- Ataques em infraestrutura Vercel (reportar à Vercel)
- Rate-limit do deploy público
- Conteúdo de rascunho em `studies/`

## Secrets

Este repo **não deve conter** credenciais, API keys, tokens ou webhooks — nem em commits, nem em HTML/JS, nem em `.env`. CI faz pattern-scan em cada PR.

Se achar um secret commitado, reporte imediatamente via canal privado — **não abra PR público**.

## Consumo via submódulo

Downstreams (MSCREATIVESYSTEMS, projetos cliente) devem:
- Pin por SHA, nunca branch flutuante
- Revisar diff antes de bump
- Monitorar advisories deste repo

---

*SECURITY · design-system · MSCREATIVE.SYSTEMS™*
