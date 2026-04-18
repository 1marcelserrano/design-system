# Story Template — MSCREATIVE.SYSTEMS™

**Status:** Canônico (validado em produção — OFFF Barcelona 2026, 5 stories publicados)
**Formato:** 1080 × 1920px (Instagram Story 9:16)
**Stack tipográfico:** Inter + Instrument Serif + Space Mono
**Paleta:** Chumbo Puro + Electric Orange
**Tokens:** `css/story-tokens.css` (namespace `--ds-story-*`)
**Template:** `templates/story.html`

---

## Tipografia

| Papel | Font | Peso | Tamanho | Token |
|---|---|---|---|---|
| Headline base | Inter | 300 (Light) | 54px | `--ds-story-headline-size` |
| Headline emphasis `<em>` | Instrument Serif | italic 400 | 62px | `--ds-story-headline-em-size` |
| Subtitle | Inter | 300 | 19px | `--ds-story-subtitle-size` |
| Tags / labels / strips | Space Mono | 400 | 9–11px uppercase | `--ds-story-tag-font-size` |
| Speaker initials | Instrument Serif | italic | 28px | `--ds-story-speaker-init-fsize` |
| Speaker name | Inter | 400 | 17px | `--ds-story-speaker-name-size` |
| Speaker role | Space Mono | 400 | 9px uppercase | `--ds-story-speaker-role-size` |

Google Fonts (copiar exatamente):
```
https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap
```

---

## Paleta

| Token | Valor | Uso |
|---|---|---|
| Background | `linear-gradient(145deg, #0A0A0E, #111114)` | Body |
| Headline | `#6A6A6A` | Inter Light base |
| Emphasis `<em>` | `#A85A30` | Instrument Serif italic |
| Subtitle | `rgba(130,130,130, 0.4)` | Inter Light body |
| Rule gradient | `#A85A30 → #6A3818 → transparent` | Divider |
| Tag accent | `#A85A30` @ border `rgba(168,90,48, 0.25)` | Speaker tag |
| Tag ghost | `rgba(140,140,140, 0.5)` @ border `rgba(255,255,255, 0.04)` | Context tags |
| Info strip | `rgba(130,130,130, 0.18)` | Top/bottom metadata |
| ASCII fragment | `rgba(168,90,48, 0.035)` | Decorative texture |
| Ghost layers | `0.06 / 0.04 / 0.025` | Border-only echoes |
| Wireframe | `#A85A30 / #6A3818` | Icosaedro gradient |
| Speaker card | `rgba(168,90,48, 0.15)` border | Attribution |

---

## 7 Camadas Obrigatórias

1. **Grid overlay** — 54×54px, `rgba(255,255,255,0.025)`
2. **Scan lines** — `repeating-linear-gradient`, 3px/1px
3. **Product marker** — 3px left, gradient accent → transparent
4. **Ghost layers** — 3 divs, inset -8/-16/-24px, borders accent
5. **Glitch lines** — 2 horizontais 1px, posição Y variável
6. **ASCII fragments** — 3 por story, keyword contextual ao insight
7. **Icosaedro 3D** — canvas wireframe, opacity 0.2, posição variável

---

## Safe Zones

```
┌─────────────────────────────┐
│ INFO STRIP TOP (54px)       │
│ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ │ ← safe top: 120px
│                             │
│  CONTENT AREA               │ ← padding lateral: 72px
│  (tags, headline, rule,     │
│   subtitle, speaker card)   │
│                             │
│ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ │ ← safe bottom: 160px
│ INFO STRIP BOTTOM (54px)    │
└─────────────────────────────┘
```

---

## Regras de Tags

- **Tag accent (laranja):** sempre `OFFF BCN 2026` (ou evento equivalente)
- **Tag ghost 1:** nome do speaker
- **Tag ghost 2:** `Key Insights`
- **Teses proprietárias MSCS** sem speaker externo: ghost 1 = `MSCREATIVE.SYSTEMS™`, omitir speaker card

---

## Variação Obrigatória entre Stories Consecutivos

| Elemento | Regra |
|---|---|
| Icosaedro posição | Alternar: top-right → bottom-left → bottom-right → center-right |
| Icosaedro tamanho | Variar entre 240–320px |
| Glitch lines Y | Nunca repetir entre stories consecutivos |
| ASCII fragments | Variar conteúdo, posição e rotação |
| ASCII keyword | Contextual ao insight (ex: `▸ SOVEREIGNTY ▸▸▸`) |
| Rotation speeds | Variar `[0.05–0.12]` por eixo |
| Frase editorial top strip | Contextual ao insight — nunca genérica |

---

## Tom MSCREATIVE — Regras de Headline

- **Frases-veredicto.** Curtas. Provocativas. Declaram — não explicam.
- O insight é do Marcel (MSCREATIVE). O speaker é a fonte. A interpretação é MSCS.
- Palavras em `<em>` carregam a **tensão** — nunca decorativas.
- Formato padrão: "X não é Y — é Z." ou "Quem faz X, perde Y."
- PT-BR default. Sem anglicismos desnecessários.

### Léxico proibido
game-changer, magic, empower, leverage, disruptivo, inovação (sem contexto), "ferramenta" (para Oracle), mindset, transformador, revolucionário, paradigma.

---

## Uso

1. Abrir `templates/story.html` no browser
2. Substituir placeholders `<!-- FRASE EDITORIAL CONTEXTUAL -->`, `<!-- SPEAKER NAME -->`, etc.
3. Screenshot a 1080×1920 para publicação
4. Ou: pedir a um LLM "gere story OFFF com este insight" passando o template como contexto

---

*Design System V3.0 · MSCREATIVE.SYSTEMS™ · 18 Abr 2026*
