# PROCEDURAL — Pipeline de Produção do Design Codex™

> **Entregável do Design Codex™** (sprint de 14 dias, ativação camada-1). O cliente sai com (a) o `DESIGN.md` da própria marca, (b) este pipeline operável, (c) N peças geradas on-brand. Fonte do método: destilação da nota `claude-design` (Ruben Hassid, How to AI). Calibragem MSCS.
> **Companion:** `DESIGN.md` (o arquivo de marca persistente que o passo 1 produz e o passo 2 carrega). Este doc é o COMO; o `DESIGN.md` é o O QUÊ.

---

## Princípio

Claude Design é tão bom quanto o design system que recebe de input. Prompt longo perde para arquivo de marca carregado uma vez. O `DESIGN.md` é o equivalente visual do `about-me.md` no Cowork — o agente lê antes de toda geração e para de re-especificar cor, fonte e tom.

A ferramenta constrói 10 dashboards em 10 minutos. Não decide qual dos 10 entregar para o público específico no momento específico. Isso é gosto — o **override switch** humano. Ferramenta barata, gosto caro. O Design Codex vende as duas coisas: a infraestrutura (o `DESIGN.md` + pipeline) e o gosto (a curadoria de qual versão sai).

---

## Passo 1 — Extrair o brand system (Cowork → `DESIGN.md`)

Reúna numa pasta os ativos de marca: logos, slides passados, fotografia, landing pages, brand PDF, website, screenshots de produto.

Prompt no Cowork:

```
Analise esta pasta e produza um design system completo.
Fontes, cores, estilos gráficos, padrões de componente, tom,
convenções de layout. Sinalize o que estiver faltando.
Salve como DESIGN.md.
```

Saída: `DESIGN.md` — guidelines da marca compiladas, auto-contidas, prontas para upload.
**Atalho de identidade visual:** para herdar uma lógica visual reconhecível, parta do `DESIGN.md` de uma marca de referência (ex. via bibliotecas públicas tipo goddesign.ml) e adapte.

## Passo 2 — Carregar o `DESIGN.md` como input persistente

Em `claude.ai/designs`, faça drop do `DESIGN.md` como conteúdo do chat. Todo prompt seguinte aplica a marca automaticamente.
Alternativa equivalente: linkar um codebase que já carrega o design system em código (no caso MSCS, o `tokens.css` do repo `design-system`).

## Passo 3 — Gerar com prompt em 4 buckets

Todo prompt de geração segue quatro blocos. Falta de qualquer um = output genérico.

```
Construa [deliverable] para [produto].
1. Brief:       objetivo emocional + lógico + CTA pegajoso no mobile.
2. Constraints: responsivo, rápido, sem 3D pesado, [restrições visuais].
3. Examples:    referência tonal ("Apple-like" ou a homepage atual).
4. Deliverable: landing page / slide deck / vídeo / etc.
```

| Bucket | O que entra | Erro comum |
|---|---|---|
| Brief | O que a peça precisa fazer sentir, provar e pedir | Pedir "uma landing bonita" sem objetivo |
| Constraints | Responsivo, performance, proibições visuais | Deixar a ferramenta inventar restrição |
| Examples | Âncora tonal reconhecível | Nenhuma referência → default de IA |
| Deliverable | Formato de saída concreto | Formato ambíguo → retrabalho |

## Passo 4 — Iterar em dois planos

| Tipo de mudança | Onde | Como |
|---|---|---|
| Estrutural (layout, fluxo) | Chat | `Me mostre 3 layouts alternativos.` → "Tweaks" gera versões em segundos |
| Pixel-level | Canvas | Botão Edit → seleção visual do elemento → instrução |
| Branching (experimento de risco) | Chat | `Salve o que temos e tente uma abordagem completamente diferente.` |

Regra: mudança estrutural sempre no chat; mudança fina sempre no canvas. Antes de qualquer redesign de risco, salve o branch.

## Passo 5 — Validar antes de exportar (3 prompts canônicos)

Checklist obrigatório. Nenhuma peça exporta sem os três passarem.

```
Revise contraste e acessibilidade.
Liste violações WCAG 2.1 AA com a correção exata de cada uma.
```

```
Gere versões desktop, tablet e mobile.
```

```
Sugira 2 variações A/B da seção hero, cada uma com um ângulo diferente.
```

## Passo 6 — Exportar

| Formato | Uso |
|---|---|
| PPTX | Apresentação editável |
| PDF | Distribuição final |
| Standalone HTML | Web direto |
| Bundle for Claude Code | Handoff para implementação |
| Send to Canva | Quando estável (instável no preview) |

**Cycle time:** ~1h para landing single-page; 2–3h para website com múltiplas abas. Antes do pipeline: pelo menos um dia inteiro.

---

## Hack vídeo → slides (opcional, eleva qualidade do deck)

Pedir um vídeo animado primeiro força pensamento visual sequencial; converter depois, no mesmo chat, produz slides melhores do que pedir o deck direto.

| Passo | Ação |
|---|---|
| 1 | Upload do material-base (markdown de research/blog) |
| 2 | `Faça um vídeo animado de 30s que resuma isto para quem vê pela primeira vez.` |
| 3 | No mesmo chat: `Agora converta esse vídeo num slide deck.` |

---

## O que vira entregável do Design Codex™ (sprint 14d)

| Dia | Marco |
|---|---|
| 1–3 | Passo 1: auditar pasta de ativos → gerar e calibrar o `DESIGN.md` da marca |
| 4–5 | Passo 2–3: carregar input persistente + padronizar os 4 buckets do cliente |
| 6–11 | Passo 4: gerar e iterar as N peças do escopo (landing, deck, story, etc.) |
| 12–13 | Passo 5: validação WCAG + responsivo + A/B em todas as peças |
| 14 | Passo 6: export + handoff. Entrega: `DESIGN.md` + este pipeline + peças finais |

**Limitações a comunicar ao cliente:** consumo agressivo de tokens (monitorar plano), bugs de research preview, controle fino menor que ferramenta nativa.

---

**Próximo passo:** rodar o pipeline ponta-a-ponta numa peça MSCS real (ex. uma landing de produto camada-1), usando o `DESIGN.md` deste workspace como input persistente, e cronometrar o cycle time real para fechar o template de proposta do Design Codex.
