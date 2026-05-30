# EDITORIAL TYPOGRAPHY SYSTEM — V1

**Status:** DRAFT · aguardando aprovação
**Parent system:** MSCREATIVE.SYSTEMS™ Design System V2.2
**Escopo:** subsistema tipográfico editorial. Coexiste com o stack de produto. Não substitui.
**Data:** 2026-04-18
**Autor:** Design System, MSCREATIVE.SYSTEMS™

---

## §1 — FILOSOFIA

### 1.1 Por que dois stacks coexistem

O Design System V2.2 resolve **produto**: carousels de codex, cards, site, UI. Ali, a tipografia é arquitetural — Anton como bloco, DM Sans como contraste limpo, Space Mono como metadado. É um sistema otimizado para **reconhecimento de produto em 2 segundos**.

A marca, entretanto, produz volume crescente de **conteúdo editorial**: Stories de princípios, carousels de curadoria, artigos Substack, posts LinkedIn, newsletters. Nesses formatos, o leitor não está reconhecendo produto — está **lendo**. O impacto não vem de bloco; vem de contraste tipográfico sutil entre **sans-light** e **serif-italic**. É a assinatura editorial consolidada por Kinfolk, Monocle, FT Weekend, Cereal.

Anton + DM Sans não atinge essa elegância. A tentativa de usar Anton editorial resulta em peças com "cara de produto" em contexto de leitura — ruído semântico.

### 1.2 Regra de routing

| Pergunta | Se SIM | Stack |
|---|---|---|
| A peça reconhece produto (codex card, site UI, navegação)? | → | **Produto** |
| A peça carrega um insight que pede leitura, atribuição, pausa? | → | **Editorial** |
| Ambos? (ex: CTA de produto em peça editorial) | → | Editorial **envelopa**, Produto **marca** o CTA |

### 1.3 Referências estéticas

- **Kinfolk** — sans-light + serif-italic em baixíssimo contraste tonal
- **Monocle** — serif para emphasis, sans para ancoragem, tracking monospace em labels
- **FT Weekend** — hierarquia por estilo (italic vs roman), não por tamanho
- **Cereal** — respiração extrema, tipografia como silêncio estruturado

A assinatura visual do stack editorial MSCS é **contraste por estilo, não por escala**.

---

## §2 — TYPE STACK EDITORIAL

### 2.1 Famílias

| Família | CDN / Link | Pesos carregados | Papel | Licença |
|---|---|---|---|---|
| **IBM Plex Sans** | Google Fonts | 300, 400, 500 | Headline base, subtitle, body, nome de speaker | OFL |
| **Libre Caslon Text** | Google Fonts | 400 italic, 400 regular | Emphasis em headline, initials, pull quote | OFL |
| **Space Mono** | Google Fonts | 400, 700 | Labels, tags, info strips, vertical text, ASCII frags | OFL |

### 2.2 Import único (canônico)

```html
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500&family=Libre+Caslon+Text:ital,wght@0,400;1,400&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

Este é o único import oficial para peças editoriais. Qualquer peso adicional de Inter (600/700/800) é **violação** — o stack editorial não usa Inter bold em headline. Se precisar bold, o stack correto é o de produto (Anton).

### 2.3 Escala responsiva (CSS clamps)

Escalas baseadas no template OFFF 2026 canônico, normalizadas para o formato Story como referência (1080×1920). Demais formatos escalam proporcionalmente.

```css
--ed-h1-size:       clamp(36px, 4.5vw, 54px);   /* Inter 300, headline base */
--ed-emphasis-size: clamp(42px, 5.2vw, 62px);   /* Instrument italic, +10-15% vs h1 */
--ed-h2-size:       clamp(28px, 3.2vw, 38px);   /* Inter 300, sub-headline */
--ed-subtitle-size: clamp(16px, 1.8vw, 19px);   /* Inter 300, deck/subtitle */
--ed-body-size:     clamp(15px, 1.6vw, 17px);   /* Inter 300/400, body */
--ed-quote-size:    clamp(22px, 2.6vw, 28px);   /* Instrument italic, pull quote */
--ed-label-size:    clamp(9px, 0.85vw, 11px);   /* Space Mono, labels */
--ed-meta-size:     clamp(8px, 0.75vw, 10px);   /* Space Mono, meta/vertical */
--ed-initials-size: clamp(24px, 2.5vw, 28px);   /* Instrument italic, speaker initials */
--ed-dropcap-size:  clamp(80px, 9vw, 120px);    /* Instrument 700, uso raro */
```

---

## §3 — PAIRINGS E CONTRASTE

### 3.1 Pairings aprovados

| Papel | Família | Peso | Estilo | Observação |
|---|---|---|---|---|
| Headline base | IBM Plex Sans | 300 | normal | letter-spacing -0.02em |
| Headline emphasis | Libre Caslon Text | 400 | italic | +10-15% tamanho vs base |
| Sub-headline | IBM Plex Sans | 300 | normal | — |
| Pull quote | Libre Caslon Text | 400 | italic | standalone, sem Plex |
| Body editorial longo | IBM Plex Sans | 300 | normal | line-height 1.65 |
| Body editorial curto | IBM Plex Sans | 400 | normal | line-height 1.5 |
| Label / kicker | Space Mono | 400 | upper | tracking 0.18–0.25em |
| Speaker name | IBM Plex Sans | 400 | normal | — |
| Speaker role | Space Mono | 400 | upper | tracking 0.2em |
| Initials / monogram | Libre Caslon Text | 400 | italic | dentro de caixa |
| Drop cap (raro) | Libre Caslon Text | 700 | normal | accent @ 0.12 |
| Vertical text | Space Mono | 400 | upper | tracking 0.3em |

### 3.2 Regras de contraste tipográfico

1. **O impacto vem do contraste peso/estilo, não de escala.** IBM Plex Sans 300 + Libre Caslon Text italic na mesma linha cria hierarquia semântica sem precisar de H1 gigante.
2. **Libre Caslon Text é 10–15% maior que IBM Plex Sans na mesma linha** para compensar a diferença de x-height. Exemplo: se Plex é 54px, Caslon é 62px.
3. **Libre Caslon Text nunca em body text.** É font de display/accent. Violação disso quebra hierarquia e prejudica legibilidade em blocos longos.
4. **Libre Caslon Text só em italic.** O regular não tem a personalidade necessária para o contraste com Plex. Exceção única: drop cap (§6.4), onde usa 700 regular em escala extrema.
5. **IBM Plex Sans nunca em bold (700+) no stack editorial.** Se precisar bold, a peça é de produto — use Anton.

---

## §4 — INTEGRAÇÃO COM PALETA

### 4.1 Subsistema cromático: Chumbo Puro + Electric Orange

Paleta editorial. Irmã de Chumbo Quente (produto), não substituta.

```css
/* Backgrounds */
--ed-bg:           linear-gradient(145deg, #0A0A0E 0%, #111114 100%);

/* Text */
--ed-text-headline:      #6A6A6A;                   /* Inter 300 base */
--ed-text-emphasis:      #A85A30;                   /* Instrument italic, Electric Orange */
--ed-text-body:          rgba(130,130,130, 0.4);    /* Inter 300/400, body */
--ed-text-speaker-name:  rgba(130,130,130, 0.4);
--ed-text-label:         rgba(130,130,130, 0.18);   /* Space Mono, labels ghost */
--ed-text-label-accent:  rgba(168,90,48, 0.2);      /* Space Mono, labels accent */

/* Accents */
--ed-accent-primary:     #A85A30;                   /* Electric Orange */
--ed-accent-secondary:   #6A3818;                   /* Burnt Orange */
--ed-accent-rule:        linear-gradient(90deg, #A85A30 0%, #6A3818 50%, transparent 100%);

/* Structural ghosts */
--ed-grid-line:   rgba(255,255,255, 0.025);
--ed-ghost-1:     rgba(168,90,48, 0.06);
--ed-ghost-2:     rgba(168,90,48, 0.04);
--ed-ghost-3:     rgba(168,90,48, 0.025);
--ed-glitch:      rgba(168,90,48, 0.07);
--ed-ascii:       rgba(168,90,48, 0.035);
```

### 4.2 Mapping tipografia → cor

| Elemento | Cor |
|---|---|
| Headline Inter 300 | `--ed-text-headline` (#6A6A6A) |
| Emphasis Instrument italic | `--ed-text-emphasis` (#A85A30) |
| Subtitle / body Inter | `--ed-text-body` (rgba 0.4) |
| Label Space Mono (ghost) | `--ed-text-label` (rgba 0.18) |
| Label Space Mono (accent) | `--ed-text-label-accent` (rgba 168,90,48 @ 0.2) |
| Speaker name | `--ed-text-body` |
| Speaker role | `--ed-text-label-accent` |
| Initials | `--ed-accent-primary` |
| Rule / divider | `--ed-accent-rule` |

---

## §5 — APLICAÇÃO POR FORMATO

### 5.1 Tabela canônica

| Formato | Dim | Headline (Inter 300) | Emphasis (Instrument italic) | Subtitle/Body (Inter 300) | Label (Space Mono) |
|---|---|---|---|---|---|
| Story | 1080×1920 | 54px / 1.12 | 62px / 1.12 | 19px / 1.65 | 10px / 0.18em |
| Carousel cover | 1080×1350 | 48px / 1.14 | 54px / 1.14 | 17px / 1.6 | 10px / 0.18em |
| Carousel content | 1080×1350 | 38px / 1.2 | 44px / 1.2 | 16px / 1.6 | 10px / 0.18em |
| Substack header | 1100×400 | 42px / 1.15 | 48px / 1.15 | 18px / 1.55 | 11px / 0.2em |
| LinkedIn post | 1200×628 | 40px / 1.15 | 46px / 1.15 | 16px / 1.55 | 9px / 0.18em |
| Newsletter header | 1200×500 | 36px / 1.2 | 42px / 1.2 | 16px / 1.55 | 10px / 0.18em |
| Open Graph | 1200×630 | 38px / 1.15 | 44px / 1.15 | 16px / 1.5 | 9px / 0.18em |

### 5.2 Safe zones e margens

| Formato | Padding superior | Padding inferior | Padding lateral |
|---|---|---|---|
| Story | 174px (info strip + ghost) | 214px | 72px |
| Carousel | 120px | 140px | 64px |
| Substack header | 72px | 48px | 80px |
| LinkedIn | 72px | 72px | 80px |
| Newsletter | 64px | 56px | 72px |
| Open Graph | 56px | 48px | 64px |

---

## §6 — ELEMENTOS TIPOGRÁFICOS ESPECIAIS

### 6.1 Speaker Card

Usado em Stories e carousels editoriais para atribuir insight.

- Caixa com borda `rgba(168,90,48, 0.15)`, 64×64px
- Initials: Libre Caslon Text italic 28px, cor `#A85A30`
- Nome: IBM Plex Sans 400 17px, cor `rgba(130,130,130, 0.4)`
- Role: Space Mono 9px upper tracking 0.2em, cor `rgba(168,90,48, 0.2)`
- Wrapper: border-top + border-bottom `rgba(168,90,48, 0.06)`, padding 28px 0

### 6.2 Section Label / Kicker

- Space Mono 11px upper, tracking **0.25em**
- Cor: `--ed-accent-primary` @ 0.6
- Margin-bottom: 24px antes de headline

### 6.3 Pull Quote

- Libre Caslon Text italic 24–28px
- Cor: `rgba(130,130,130, 0.25)`
- Border-left: 3px solid `rgba(168,90,48, 0.2)`
- Padding-left: 28px
- Max-width: 640px

### 6.4 Drop Cap (uso raro)

- Libre Caslon Text **700** (único lugar que usa regular e peso alto)
- 120px
- Cor: `rgba(168,90,48, 0.12)` — quase fantasma
- Float left, margin-right 16px

### 6.5 Issue / Edition Badge

- Space Mono 9px upper
- Padding 6px 14px
- Border: 1px `rgba(168,90,48, 0.25)`
- Background: `rgba(168,90,48, 0.04)`
- Cor: `#A85A30`
- Border-radius: 2px (quase reto — não é capsule)

### 6.6 Vertical Text (lateral)

- Space Mono 9–10px upper
- Tracking **0.3em**
- Cor: `rgba(168,90,48, 0.06)`
- Transform: rotate(-90deg)
- Usado como textura estrutural, não informação

---

## §7 — COEXISTÊNCIA COM STACK DE PRODUTO

### 7.1 Matriz de routing

| Contexto | Stack | Headline | Body | Label |
|---|---|---|---|---|
| Site, UI, codex cards, navegação | **Produto** | Anton | DM Sans | Space Mono |
| Stories editoriais, carousels de curadoria | **Editorial** | Inter + Instrument | Inter | Space Mono |
| Artigos Substack, posts LinkedIn, newsletter | **Editorial** | Inter + Instrument | Inter | Space Mono |
| CTA de produto dentro de peça editorial | **Produto** (overlay) | Anton (só CTA) | — | Space Mono |
| Citação editorial dentro do site | **Editorial** (bloco isolado) | — | Instrument italic | — |

### 7.2 O conector

**Space Mono está nos dois stacks.** É a continuidade. Serve de ponte visual entre peça editorial e ecosistema de produto — quando um carousel editorial termina com CTA de produto (Anton), a Space Mono do info strip segura a continuidade.

### 7.3 Nunca

- Misturar Anton e Libre Caslon Text no mesmo bloco visual
- Misturar DM Sans e IBM Plex Sans no mesmo bloco visual
- Usar o stack editorial em cards de codex (viola reconhecimento de produto)
- Usar o stack de produto em artigos editoriais longos (viola legibilidade)

---

## §8 — CSS TOKENS (pronto para import)

```css
/* ═══════════════════════════════════════════════════════════════
   EDITORIAL TYPOGRAPHY TOKENS — MSCREATIVE.SYSTEMS™
   Subsistema editorial. Coexiste com o stack de produto.
   ═══════════════════════════════════════════════════════════════ */

:root {
  /* ── Families ── */
  --ed-font-headline:  'IBM Plex Sans', sans-serif;
  --ed-font-emphasis:  'Libre Caslon Text', serif;
  --ed-font-body:      'IBM Plex Sans', sans-serif;
  --ed-font-label:     'Space Mono', monospace;

  /* ── Weights ── */
  --ed-w-light:   300;
  --ed-w-regular: 400;
  --ed-w-medium:  500;
  --ed-w-display: 700; /* apenas drop cap */

  /* ── Sizes (clamps) ── */
  --ed-h1-size:       clamp(36px, 4.5vw, 54px);
  --ed-emphasis-size: clamp(42px, 5.2vw, 62px);
  --ed-h2-size:       clamp(28px, 3.2vw, 38px);
  --ed-subtitle-size: clamp(16px, 1.8vw, 19px);
  --ed-body-size:     clamp(15px, 1.6vw, 17px);
  --ed-quote-size:    clamp(22px, 2.6vw, 28px);
  --ed-label-size:    clamp(9px, 0.85vw, 11px);
  --ed-meta-size:     clamp(8px, 0.75vw, 10px);
  --ed-initials-size: clamp(24px, 2.5vw, 28px);
  --ed-dropcap-size:  clamp(80px, 9vw, 120px);

  /* ── Line heights ── */
  --ed-lh-tight:   1.12;
  --ed-lh-snug:    1.2;
  --ed-lh-normal:  1.5;
  --ed-lh-body:    1.65;

  /* ── Tracking ── */
  --ed-track-headline: -0.02em;
  --ed-track-label:     0.18em;
  --ed-track-kicker:    0.25em;
  --ed-track-vertical:  0.3em;

  /* ── Palette (Chumbo Puro + Electric Orange) ── */
  --ed-bg:                 linear-gradient(145deg, #0A0A0E 0%, #111114 100%);
  --ed-text-headline:      #6A6A6A;
  --ed-text-emphasis:      #A85A30;
  --ed-text-body:          rgba(130,130,130, 0.4);
  --ed-text-label:         rgba(130,130,130, 0.18);
  --ed-text-label-accent:  rgba(168,90,48, 0.2);
  --ed-accent-primary:     #A85A30;
  --ed-accent-secondary:   #6A3818;
  --ed-accent-rule:        linear-gradient(90deg, #A85A30 0%, #6A3818 50%, transparent 100%);

  /* ── Ghosts / structure ── */
  --ed-grid-line:   rgba(255,255,255, 0.025);
  --ed-ghost-1:     rgba(168,90,48, 0.06);
  --ed-ghost-2:     rgba(168,90,48, 0.04);
  --ed-ghost-3:     rgba(168,90,48, 0.025);
  --ed-glitch:      rgba(168,90,48, 0.07);
  --ed-ascii:       rgba(168,90,48, 0.035);
}

/* ── Semantic classes ── */
.ed-h1 {
  font-family: var(--ed-font-headline);
  font-weight: var(--ed-w-light);
  font-size: var(--ed-h1-size);
  line-height: var(--ed-lh-tight);
  letter-spacing: var(--ed-track-headline);
  color: var(--ed-text-headline);
}
.ed-h1 em {
  font-family: var(--ed-font-emphasis);
  font-style: italic;
  font-weight: var(--ed-w-regular);
  font-size: var(--ed-emphasis-size);
  color: var(--ed-text-emphasis);
}
.ed-subtitle {
  font-family: var(--ed-font-body);
  font-weight: var(--ed-w-light);
  font-size: var(--ed-subtitle-size);
  line-height: var(--ed-lh-body);
  color: var(--ed-text-body);
}
.ed-body {
  font-family: var(--ed-font-body);
  font-weight: var(--ed-w-light);
  font-size: var(--ed-body-size);
  line-height: var(--ed-lh-body);
  color: var(--ed-text-body);
}
.ed-quote {
  font-family: var(--ed-font-emphasis);
  font-style: italic;
  font-weight: var(--ed-w-regular);
  font-size: var(--ed-quote-size);
  line-height: var(--ed-lh-snug);
  color: rgba(130,130,130, 0.25);
  border-left: 3px solid rgba(168,90,48, 0.2);
  padding-left: 28px;
  max-width: 640px;
}
.ed-label {
  font-family: var(--ed-font-label);
  font-weight: var(--ed-w-regular);
  font-size: var(--ed-label-size);
  text-transform: uppercase;
  letter-spacing: var(--ed-track-label);
  color: var(--ed-text-label);
}
.ed-label--accent {
  color: var(--ed-accent-primary);
  border: 1px solid rgba(168,90,48, 0.25);
  background: rgba(168,90,48, 0.04);
  padding: 6px 14px;
  border-radius: 2px;
  display: inline-block;
}
.ed-kicker {
  font-family: var(--ed-font-label);
  font-size: var(--ed-label-size);
  text-transform: uppercase;
  letter-spacing: var(--ed-track-kicker);
  color: rgba(168,90,48, 0.6);
}
.ed-rule {
  height: 1px;
  border: none;
  background: var(--ed-accent-rule);
}
```

---

## §9 — DON'Ts

1. **Nunca** usar Libre Caslon Text em parágrafos de leitura (só emphasis/initials/pull quote)
2. **Nunca** usar Anton em peças editoriais (pertence ao stack de produto)
3. **Nunca** usar IBM Plex Sans Bold (700+) em headlines editoriais — o peso é Light (300)
4. **Nunca** usar DM Sans em peças editoriais (pertence ao stack de produto)
5. **Nunca** misturar os dois stacks no mesmo bloco visual (exceções em §7.1)
6. **Nunca** usar Libre Caslon Text sem itálico (exceção única: drop cap, §6.4)
7. **Nunca** compensar fraqueza de copy com escala — o impacto vem do contraste peso/estilo
8. **Nunca** alterar o letter-spacing de headline (-0.02em é canônico)
9. **Nunca** usar Space Mono em texto corrido — é apenas label/meta/info strip
10. **Nunca** criar nova paleta editorial — Chumbo Puro + Electric Orange é o único subsistema aprovado

---

## §10 — CHECKLIST DE VALIDAÇÃO

Antes de aprovar uma peça editorial, confirmar:

- [ ] Import único Google Fonts presente (IBM Plex Sans 300/400/500 + Libre Caslon Text ital + Space Mono 400/700)
- [ ] Headline usa IBM Plex Sans 300 com emphasis em `<em>` Libre Caslon Text italic
- [ ] Emphasis é 10–15% maior que Plex base na mesma linha
- [ ] Nenhum Plex bold, nenhum Caslon regular (exceto drop cap)
- [ ] Cores vêm de Chumbo Puro + Electric Orange — não há desvio para Chumbo Quente (gold)
- [ ] Grid 54×54px @ 0.025 aplicado
- [ ] Space Mono upper 0.18em em todo label/tag/info strip
- [ ] Speaker card (quando presente) segue §6.1
- [ ] Rule usa gradient `--ed-accent-rule`
- [ ] Safe zones respeitadas (§5.2)

---

**FIM DO DOCUMENTO V1 — aguardando aprovação.**
