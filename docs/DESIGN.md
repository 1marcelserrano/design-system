# DESIGN.md — MSCREATIVE.SYSTEMS™

> **Versão: v3.2 — Era Midnight · Fraunces Unificado · Portável** · 2026-06-19
> Arquivo de marca persistente. Auto-contido: tudo que um agente precisa para gerar peça on-brand está aqui dentro. Não depende de nenhum outro arquivo.
> **Como usar no Claude Design:** faça upload deste arquivo como conteúdo persistente do chat (`claude.ai/designs`) — ele é lido antes de toda geração, igual ao `about-me.md` no Cowork. Com ele carregado, você não re-especifica cor, fonte e tom em cada prompt. O método completo de produção (pipeline de 6 passos + buckets de prompt + validação) é o entregável do Design Codex™.

---

## 1. Overview

Este documento é a representação humana e operável do Sistema de Design da MSCREATIVE.SYSTEMS™. Codifica regras visuais, arquitetura tipográfica e o sistema cromático hierárquico de todos os produtos e canais do ecossistema.

Agentes e pipelines de automação (Claude Design, Carousel Skill, Stitch, Weavy, Creative Oracle) leem este arquivo para garantir consistência estrutural — sem depender de gosto pessoal ou interpretação subjetiva. O design aqui não decora. É **infraestrutura cognitiva**.

**Era Midnight (v3)** substitui a era Gold/Anton (v2.x): a paleta institucional migrou de dourado para cream warm low-saturation; o stack tipográfico migrou para Post-Digital Hybrid (Fraunces + Inter Tight + IBM Plex Mono).

---

## 2. Design Tokens (Global)

### 2.1. Tipografia — Fraunces Unificado

Uma família governa a voz; duas a sustentam. Fraunces carrega headline e ênfase nos DOIS registros do ecossistema — produto e editorial — variando só o eixo óptico (`opsz`). Inter Tight é o corpo universal. IBM Plex Mono é o único monoespaçado. Cada papel tem jurisdição estrita: a escolha não é estética, é operação.

| Pilar | Família | Jurisdição | Regras de Uso |
|---|---|---|---|
| **Display / Headline** | `Fraunces` (variable, opsz 9..144, ital) | Headlines e nomes de produto (registro produto) + headlines editoriais (registro editorial) | Registro **produto**: `opsz` 144, weight 700–900, impacto. Registro **editorial**: `opsz` 24–36, weight 340–400, quieto. Caixa = sentence case por padrão; CAPS só em wordmark, siglas técnicas e kickers mono que abrem seção. Sempre aplicar `font-variation-settings: "opsz" N` — sem isso a variable cai no default e perde warmth. Tracking apertado (`-0.02em`) em display. |
| **Ênfase** | `Fraunces` italic | Palavra-tensão, nome próprio, conceito focal | Itálico nativo da mesma família. Exatamente uma ênfase por bloco editorial. |
| **Body** | `Inter Tight` | Corpo universal — produto e editorial | Weights 100..900. Body weight/style/lh variam por produto (§3.2). Único corpo do ecossistema. |
| **Mono** | `IBM Plex Mono` | Tiers, labels, kickers, datas, metadados | Único monoespaçado do sistema. Tracking `0.18–0.2em` em kicker que abre seção. Cor = accent do contexto. |

**Registro óptico — o eixo que substitui a segunda família:** o que antes exigia trocar de fonte agora é um movimento no eixo `opsz` da mesma Fraunces. Produto fala alto (opsz 144). Editorial fala baixo (opsz 24–36). Mesma voz, dois volumes.

**Google Fonts import canônico:**

```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=IBM+Plex+Mono:wght@400;600;700&display=swap" rel="stylesheet">
```

**Accent serif (preservada, restrita):** `Cormorant Garamond`. Serifa de alta solenidade reservada a manifesto, capa de newsletter e longform Substack. Nunca em produto, story padrão, carrossel ou UI.

**Legado desativado:** `Anton`, `DM Sans`, `Space Mono`, `IBM Plex Sans`, `Libre Caslon Text`. Não usar em nenhuma peça nova.

### 2.2. Base Cromática — Midnight (institucional)

Todos os produtos herdam uma base escura warm. MS Midnight é a paleta institucional do sistema-mãe — usada em logo, atribuição e identidade.

| Token | Valor | Descrição |
|---|---|---|
| `--p-ms-bg-start` | `#0C0B08` | BG início do gradiente institucional. |
| `--p-ms-bg-end` | `#16140F` | BG fim do gradiente institucional. |
| `--p-ms-gradient` | `linear-gradient(160deg, #0C0B08 0%, #16140F 100%)` | Gradiente canônico MS. |
| `--p-ms-accent1` | `#A89D80` | Cream warm low-saturation. Identidade institucional. Contraste AAA (7.2:1) sobre BG médio. |
| `--p-ms-accent2` | `#756750` | Warm gray escuro. Secondary/hover. |
| `--ds-text-primary` | `#B2A898` | Cream off. Reduz fadiga sem perder contraste. |
| `--ds-text-body` | `rgba(178, 168, 152, 0.85)` | Opacidade fixa para body. |
| `--ds-grid-color` | `rgba(255, 255, 255, 0.025)` | Grid quase invisível. Textura de sistema. |
| `--ds-grid-size` | `54px × 54px` | Padrão fixo. Não alterar. |

**Narrativa Midnight:** "Meia-noite: permanência sem performance. Só quem observa de perto percebe." A paleta não grita — espera ser vista.

### 2.3. Acento ativo — Lima Ácida (editorial / conteúdo / master brand)

O acento de trabalho do master brand em peças editoriais, de conteúdo e de impacto é **lima ácida `#B4C636`** — escolhido por contraste máximo em fundo escuro e sobrevivência em thumbnail. A institucional Midnight (§2.2) ancora identidade; a lima ácida ancora atenção.

| Token | Valor | Descrição |
|---|---|---|
| `--ds-ed-bg` | `linear-gradient(145deg, #0A0A0E 0%, #111114 100%)` | BG editorial. |
| `--ds-ed-text-headline` | `#6A6A6A` | Warm gray. Legível sem saltar. |
| `--ds-ed-accent-primary` | `#B4C636` | Lima ácida. Acento principal — ênfase, rule, identidade ativa. |
| `--ds-ed-accent-secondary` | `#6A7820` | Lima escura. Par do gradiente de rule. |
| `--ds-ed-text-emphasis` | `#B4C636` | Ênfase em palavra-tensão e nome próprio. |
| `--ds-ed-text-body` | `rgba(130, 130, 130, 0.4)` | Body no limiar — exige atenção deliberada. |
| `--ds-ed-accent-rule` | `linear-gradient(90deg, #B4C636 0%, #6A7820 50%, transparent 100%)` | Rule editorial. |

**Acento legado — Terracota `#A85A30` (par escuro `#6A3818`):** peças antigas continuam válidas; peça nova não usa terracota sem pedido explícito.

**Princípio operacional:** se o leitor percebe a cor antes de perceber o conteúdo, a paleta falhou. A cor serve ao texto, não compete com ele.

### 2.4. Cerimonial Gold (reservado)

Gold não morre — vira estado cerimonial reservado para Emblem shoes do M4, selos e assinaturas oficiais. NÃO é accent institucional nem de conteúdo.

| Token | Valor | Uso |
|---|---|---|
| `--emblem-gold` | `#E8C547` | Emblem cerimonial. |
| `--emblem-shadow` | `#B8941F` | Sombra do emblem. |
| `--emblem-gradient` | `linear-gradient(135deg, #E8C547 0%, #B8941F 100%)` | Selos, assinaturas. |

---

## 3. Sistema Cromático Hierárquico — 7 Produtos

O código cromático deriva da **essência funcional** de cada produto. O sistema cria um diálogo de temperatura e profundidade. Quartet de codexes na paleta ácida (contraste máximo em fundo escuro + sobrevivência em thumbnail).

### 3.1. Paletas por Produto

| Produto | Tier | Accent 1 | Accent 2 | BG start | BG end | Ícone | Razão Cromática |
|---|---|---|---|---|---|---|---|
| **MSCREATIVE.SYSTEMS** | SISTEMA-MÃE | `#A89D80` | `#756750` | `#0C0B08` | `#16140F` | MS | Meia-noite: permanência sem performance. Cream warm que se revela devagar. (Acento ativo de conteúdo = lima `#B4C636`, §2.3.) |
| **FRONTEIRISTAS** | CANAL EDITORIAL | `#B5BF9A` | `#7A8562` | `#141210` | `#1E1C18` | `◇` | Oliva suave. Cor de arquivo, de leitura, de consciência. Sem urgência. |
| **CREATIVE ORACLE V20** | PRODUTO CORE | gradiente pôr-do-sol ácido | — | `#0F1008` | `#1E1A08` | `※` | Tangerina → toranja → violeta (`#FFA428 → #F2638C → #9D6BF5`). Luz filtrada, julgamento com calor. Tri-tom, não monocromático. |
| **NEURO CODEX** | CODEX — PERCEPÇÃO | `#45D6A4` | `#1F8A63` | `#060214` | `#0D0828` | `◎` | Menta ácida sobre indigo profundo: o sinal que emerge do inconsciente. |
| **STYLE CODEX** | CODEX — IDENTIDADE | `#F2638C` | `#B23358` | `#180A12` | `#261018` | `❋` | Toranja ácida: tensão visual. Identidade que não para quieta. |
| **DESIGN CODEX** | CODEX — ESTRATÉGIA | `#FFA428` | `#C77400` | `#080808` | `#101014` | `⊞` | Tangerina ácida. Confiança estrutural com calor. O sistema que governa, não decora. |
| **EXECUTION CODEX** | CODEX — EXECUÇÃO | `#9D6BF5` | `#6A3CCB` | `#0E0A06` | `#1A1006` | `▶` | Violeta elétrica. Ação com peso técnico, não impulso. |

**Gradiente por produto:** `linear-gradient(160deg, bg-start 0%, bg-end 100%)`.
**Gradiente Oracle (accent):** `linear-gradient(135deg, #FFA428 0%, #F2638C 50%, #9D6BF5 100%)`.

### 3.2. Tipografia por Produto

Body (Inter Tight) e Mono (IBM Plex Mono) variam por produto. Display e Subheading (Fraunces) são **invariantes** — idênticos nos 7 produtos.

| Produto | Body weight | Body style | Body line-height | Mono weight |
|---|---|---|---|---|
| **MS** | 400 | normal | 1.6 | 400 |
| **Fronteiristas** | 400 | normal | 1.7 | 400 |
| **Oracle** | 400 | **italic** | 1.5 | 400 |
| **Neuro** | 400 | normal | 1.5 | **600** |
| **Style** | **600** | **italic** | 1.4 | 400 |
| **Design** | 500 | normal | 1.55 | 400 |
| **Execution** | 500 | normal | 1.5 | **700** |

Valores extremos (italic, weight 600/700) carregam identidade semântica: Style se move, Oracle reflete, Execution martela, Neuro pesa técnico.

### 3.3. Subprodutos — Herança

Skills e Knowledge Base herdam paleta do codex-pai:

| Subproduto | Accent | Herda de |
|---|---|---|
| Skills Style | `#F2638C` | Style Codex |
| Skills Neuro | `#45D6A4` | Neuro Codex |
| Skills Fronteiristas | `#B5BF9A` | Fronteiristas |
| Skills Design | `#FFA428` | Design Codex |
| Skills Execution | `#9D6BF5` | Execution Codex |
| Skills Transversal | `#A89D80` | MS |
| KB indicator | gradiente `#FFA428 → #F2638C → #9D6BF5` | Oracle |

---

## 4. M4 Mascot

**Corpo padrão:** `#FF3B00`. Corpo escuro de contraste: `#CC2E00`.

**Cena nocturne** (ambient narrativo):
- Body `#D97A5E` · Patas `#A85F46` · Eyes `#0B1220`
- Clouds `#A8AFBF` · Stars `#E7EAF0` · Scene `#0B1220`

**Codex Shoes — 9 estados:** cada shoe é um par accent1/accent2 que o M4 calça quando representa um codex.

| Estado | Shoe 1 | Shoe 2 |
|---|---|---|
| MS | `#A89D80` | `#756750` |
| Fronteiristas | `#B5BF9A` | `#7A8562` |
| Oracle | `#FFA428` | `#9D6BF5` |
| Neuro | `#45D6A4` | `#1F8A63` |
| Style | `#F2638C` | `#B23358` |
| Design | `#FFA428` | `#C77400` |
| Execution | `#9D6BF5` | `#6A3CCB` |
| Emblem (cerimonial) | `#E8C547` | `#B8941F` |
| Neutral (default) | `#404040` | `#282828` |

---

## 5. Governança

Separadores e atribuição MS em peças do ecossistema:

| Token | Valor | Uso |
|---|---|---|
| `--gov-separator` | `rgba(168, 157, 128, 0.25)` | Divisória leve em peças. |
| `--gov-separator-strong` | `rgba(168, 157, 128, 0.50)` | Divisória principal. |
| `--gov-ms-logo` | `#A89D80` | Logo MS em atribuições. |
| `--gov-ms-attribution` | `#756750` | Texto "by MSCREATIVE.SYSTEMS". |
| `--gov-ms-attribution-bg` | `transparent` | BG da atribuição — nunca caixa sólida. |

---

## 6. Formatos de Conteúdo Visual

### 6.0. Story (Instagram — 1080×1920)

Formato vertical 9:16 para conteúdo standalone. Não depende de sequência nem de CTA.

| Parâmetro | Valor |
|---|---|
| **Resolução** | 1080 × 1920px |
| **Safe zone — topo** | 120px mínimo |
| **Safe zone — base** | 160px mínimo |
| **Paleta padrão** | Lima Ácida editorial (§2.3) ou Midnight (§2.2) por peça |
| **Grid overlay** | 54×54px, opacidade 0.025 |
| **Tecnologia** | HTML/CSS → Playwright → PNG |

**Estrutura de um Story de Princípios** (exemplo):

| Zona | Elemento | Token/Spec |
|---|---|---|
| Tag strip | Categorias | IBM Plex Mono 11px, `--gov-separator` entre tags |
| Título | Nome próprio + título | Fraunces 56px opsz 72, accent1 do produto |
| Rule | Gradient accent1 → accent2 | 2px, full width |
| Lista | Números + headlines + descriptions | Fraunces (números), Inter Tight (body) |
| Atribuição | Nome + role | Inter Tight 21px italic + IBM Plex Mono 11px |
| Brand mark | Ícone MS SVG 48px | `--gov-ms-logo` a 6% opacidade |

### 6.1. Carousel Pipeline (9 slides, Dark Heavy)

Estrutura rígida alternando Dark (densidade) / Light (respiro):

| Slide | Modo | Conteúdo | Tipografia |
|---|---|---|---|
| 1 | **CAPA (Dark)** | Headline + Subtitle | Fraunces 72px opsz 144 + Inter Tight 20px |
| 2 | Dark | O Problema | IBM Plex Mono 11px + Inter Tight 18px |
| 3 | Dark | Os Dados | Fraunces 48px opsz 72 (número) + Inter Tight 18px |
| 4 | Dark | O Paradoxo | Fraunces 56px opsz 72 + Inter Tight 16px |
| 5 | **LIGHT (Respiro)** | Pullquote | Inter Tight 32px sobre fundo claro |
| 6 | Dark | A Solução | IBM Plex Mono 11px + Inter Tight 18px |
| 7 | Dark | Prova Social | IBM Plex Mono 11px + Inter Tight 18px |
| 8 | **LIGHT (Respiro)** | Reflexão Final | Inter Tight 32px |
| 9 | **CTA (Dark)** | Chamada para ação | Fraunces 56px opsz 72 + Inter Tight 16px |

**Renderização:**

| Parâmetro | Valor |
|---|---|
| Resolução | 1080 × 1350px |
| Tecnologia | HTML/CSS → Playwright → PNG |
| Fontes | Google Fonts (Fraunces, Inter Tight, IBM Plex Mono) |
| Grid overlay | 54×54px, opacidade 0.025 |

### 6.2. Hierarquia de Contraste

**Dark slides** (padrão do ecossistema):
- Headlines (Fraunces): accent1 do produto
- Labels (IBM Plex Mono): accent1
- Body (Inter Tight): `rgba(178, 168, 152, 0.85)`
- BG: gradient do produto

**Light slides** (respiro, apenas em carousel):
- Quote (Inter Tight): `#0A0C10`
- Border: accent1
- BG: `linear-gradient(145deg, #F5F7FA 0%, #E8EAEF 100%)`

### 6.3. Carrossel IG — Hierarquia de Leitura

**Codificação explícita de níveis:**

| Nível | Função | Spec |
|---|---|---|
| 1 (entra primeiro) | Headline | Fraunces opsz 144, 60–90px, `#9A7048` (cobre queimado) em palco escuro / `#0A0A0E` em palco claro |
| 2 (segundo olho) | Tag/Kicker | IBM Plex Mono 13–15px com bg sutil `rgba(10,10,14,0.65)` padding 6×10px |
| 3 (terceiro olho) | Corpo | Inter Tight 18–22px |
| 4 (último, opcional) | Metadata | IBM Plex Mono 11px (mínimo legível mobile) |

Cada nível tem distância vertical mínima e contrast ratio mínimo. Quando dois elementos competem pelo mesmo nível, agrupar visualmente em um bloco.

### 6.4. Carrossel IG — Bloco sobre Imagem

Bg sutil é REQUISITO PARA O BLOCO INTEIRO. Não basta dar bg só na tag — todo conteúdo textual sobre fotografia (tag + headline + sublegenda) precisa estar dentro do mesmo container com bg `rgba(10,10,14,0.65)` e padding consistente.

Header/footer em slides com imagem full-bleed: faixa de 32px com `rgba(10,10,14,0.6)`.

### 6.5. Carrossel IG — Léxico de CTA

**Aprovados:**
- "Resumo aqui. Artigo completo no Substack. Link na bio."
- "[Pergunta-isca]. Resposta no Substack. Link na bio."
- "[Frase-âncora]. Artigo completo no Substack. Link na bio."

**Vetados:**
- "Substack do Marcel Serrano" / "Substack do MSCREATIVE" (redundante com bio)
- "Link na bio" sem chamada-pra-ação clara
- "Confira no perfil" / "Salve esse post"

### 6.6. Carrossel IG — Fontes Mobile-Safe

| Elemento | Antes | Agora (Mobile-Safe) |
|---|---|---|
| Info strip top/bottom | 5px | 11px OU remover quando não-essencial |
| Tag/Kicker | 10–13px | 13–15px com bg sutil |
| Numeração de slide | 5px | 11px ou remover |

---

## 7. Do's and Don'ts

| Regra | Diretriz | Justificativa |
|---|---|---|
| **DO** | Acento de conteúdo/editorial do master brand = lima ácida `#B4C636`. | Contraste máximo em fundo escuro + sobrevive em thumbnail. |
| **DO** | Headline carrossel IG em palco escuro: `#9A7048` (cobre queimado). | Regra específica de carrossel; `#6A6A6A` fica para metadata e palco claro. |
| **DO** | Usar `Fraunces` com `font-variation-settings: "opsz" N`. | Sem opsz a variable cai no default e perde warmth. Display: 144. Editorial: 24. |
| **DO** | Respeitar o grid background (`opacity: 0.025`). | Textura de sistema, não elemento visual. |
| **DO** | Usar accent1/accent2 conforme produto (§3.1). | Cor é a âncora de memorização do usuário. |
| **DO** | Aplicar rule gradient na capa (accent1 → accent2). | Identifica produto e cria hierarquia imediata. |
| **DO** | Respeitar body weight/style/lh por produto (§3.2). | Cada codex tem voz própria — Style italic 600, Oracle italic 400. |
| **DON'T** | Não usar `Anton`, `DM Sans`, `Space Mono`, `IBM Plex Sans` ou `Libre Caslon Text`. | Legados. O editorial agora é registro óptico da Fraunces; o único mono é IBM Plex Mono. |
| **DON'T** | Não usar `#D4AF37` (Gold legado) como accent. | Gold virou cerimonial (Emblem, selos). Institucional é Midnight `#A89D80`; acento ativo é lima `#B4C636`. |
| **DON'T** | Não inverter cores de Codexes. | Cor é identidade — Style é toranja, Design é tangerina, Execution é violeta, Neuro é menta. |
| **DON'T** | Não usar `Fraunces` em parágrafos. | É forma arquitetural, não texto de leitura. |
| **DON'T** | Não adicionar "Accent Slides" (fundo 100% colorido). | Dark Heavy depende do escuro para gravidade. |
| **DON'T** | Não alterar grid (54×54px). | Proporcional à resolução Instagram e ritmo visual. |
| **DON'T** | Não usar `™` em layouts visuais. | Existe apenas em texto corrido (copy). |

---

## 8. Voz (quando a peça carrega texto)

PT-BR, voz ativa, frases curtas, zero floreio. Léxico proibido: game-changer, transformador, turbinar, empoderar, alavancar, holístico, robusto, vanguarda, disruptivo. Sem paralelismo negativo ("não é X, é Y"). Registro default = Tradutor (narra a travessia, horizontal). O gosto é o override final: a ferramenta gera 10 versões; quem decide qual entrega para qual público é humano.

---

**Design não é preferência. É protocolo.**
