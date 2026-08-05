# DESIGN_SYSTEM.md · MSCS DS V5.2

Sistema de dois modos, os dois tirados do trabalho do fundador.
**Modo Tradutor** vem do papel mais o contorno do mural. **Modo Veredicto** vem da pintura sobre preto.

Consolidado em 05/ago/2026 ao fim de uma sessão de nove rodadas. Substitui V3.1, V3.2, V4.0 e V5.0.

**Todos os valores de cor abaixo foram validados por contraste calculado contra o fundo real de uso.**
O número em cada linha é a razão WCAG medida, não estimada.

**Base de medição.** Toda razão citada neste documento é medida contra `--ms-surface` do modo
(`#FAF8F3` no Tradutor, `#141210` no Veredicto), que é onde o texto de fato assenta. Contra
`--ms-bg` os números deslocam de fração — o laranja cai de 3.37 para 3.11 sobre papel, a tinta do
Veredicto sobe de 16.26 para 17.29 — e nenhuma conclusão de aprovação ou reprovação muda.
Verificável por `node tools/contrast.mjs`.

---

## 0 · Fontes da decisão

| Origem | O que deu ao sistema |
|---|---|
| `card-compositor` 10/jul/26 (7 iterações com aval humano) | disciplina editorial, chrome, frase por linha, anti-viúva |
| `design-canon` DS V3.0 e preset `maquina-infograficos` | tipografia, ponto de partida da paleta |
| 4 obras sobre papel (aquarela, guache, lápis, pastel) | procedimento de acúmulo, grão, terra |
| 2 murais e 1 pintura sobre preto | contorno preto, acorde de cor, fundo preto chapado |
| Decisões do Marcel nesta sessão | rabisco, sombra alta, direção D e direção C |

---

## 1 · Os dois modos

| | Modo Tradutor | Modo Veredicto |
|---|---|---|
| Origem | papel com contorno de mural | pintura sobre preto |
| Voz | Marcel Serrano, MSCREATIVE.SYSTEMS™ | Creative Oracle™ |
| Frequência | default | raro, teto de 1 em 10 peças |
| Onde | Substack, carrossel, stories, site, newsletter, proposta | diagnóstico, precedente, Activation, gate de QA |

Se o Veredicto aparecer no feed toda semana, os dois modos viram um só e a sinalização morre.

---

## 2 · Fontes tipográficas

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=IBM+Plex+Mono:wght@400;500&family=Inter+Tight:wght@300..700&display=swap" rel="stylesheet">
```

Fraunces sempre com `font-variation-settings: "opsz" 9`. Fora de 9 ela afina e deixa de ser a nossa.

O eixo WONK não é servido nesse endpoint, verificado no CSS que o Google devolve. Para usar WONK
seria preciso hospedar o arquivo variável completo. Fica como opção, não como ajuste gratuito.

---

## 3 · Tokens

Implementação: [`css/ms-v5.css`](./css/ms-v5.css).

```css
/* ============ MODO TRADUTOR · papel com contorno · default ============ */
:root {
  --ms-bg:        #F2EFE7;  /* papel */
  --ms-surface:   #FAF8F3;  /* papel elevado */
  --ms-contorno:  #1A1410;  /* preto quente. 3px, fecha a forma. 17.18:1 */
  --ms-ink:       #1A1410;  /* 17.18:1 sobre surface */
  --ms-muted:     #4A463D;  /* corpo longo. 8.85:1 */
  --ms-label:     #6E6E26;  /* oliva. 5.05:1 em mono 12px */
  --ms-terra:     #C48F41;  /* ocre. Apoio e rabisco, não carrega texto */

  --ms-vivo-1:    #FF3B00;  /* laranja M4. Ação. Tinta por cima: 5.10:1 */
  --ms-vivo-2:    #155BB0;  /* azul. Termo-chave. 6.27:1 */
  --ms-vivo-ink:  #1A1410;

  --ms-shadow:    0 10px 28px rgba(26,20,16,.20), 0 2px 6px rgba(26,20,16,.12);
  --ms-radius:    0px;
  --ms-hairline:  1px solid rgba(26,20,16,.16);
  --ms-measure:   64ch;

  --ms-font-display:"Fraunces", Georgia, serif;
  --ms-font-body:   "Inter Tight", system-ui, sans-serif;
  --ms-font-mono:   "IBM Plex Mono", ui-monospace, monospace;

  --ms-space-1:8px; --ms-space-2:16px; --ms-space-3:24px;
  --ms-space-4:40px; --ms-space-5:64px; --ms-space-6:104px;
}

/* ============ MODO VEREDICTO · preto elétrico · raro ============ */
[data-modo="veredicto"] {
  --ms-bg:        #0B0908;  /* preto quente chapado */
  --ms-surface:   #141210;  /* 1.06:1 do fundo. Ver nota abaixo */
  --ms-contorno:  #E85A6B;  /* no escuro o contorno sai em coral */
  --ms-ink:       #F2EFE7;  /* 16.26:1 */
  --ms-muted:     #B9BDC9;  /* 9.95:1 */
  --ms-label:     #8C93A8;  /* 6.10:1 */
  --ms-terra:     #8C93A8;

  --ms-vivo-1:    #E85A6B;  /* coral. Ação. Tinta por cima: 5.78:1 */
  --ms-vivo-2:    #4B53E0;  /* cobalto. Campo. 3.21:1 do fundo, 5.06:1 com tinta clara */
  --ms-vivo-3:    #6BC4E8;  /* ciano. Termo-chave. 9.51:1 */
  --ms-vivo-ink:  #0B0908;

  --ms-shadow:    0 10px 28px rgba(0,0,0,.60), 0 2px 6px rgba(0,0,0,.40);
  --ms-hairline:  1px solid rgba(242,239,231,.14);
}
```

**Nota sobre a superfície do Veredicto.** `#141210` está a 1.06:1 do fundo, quase idêntica.
O card ali não se define por preenchimento: ele se define pelo contorno coral de 3px e pela
sombra. Se a sombra for removida nesse modo, o card desaparece. Não é margem de erro, é decisão.

**A sombra nunca é neutra.** É tingida com a tinta do modo. Sombra cinza ou preta pura esfria o
papel e denuncia que aquilo é CSS, não luz.

---

## 4 · Regra de cor

A regra de "uma cor viva por peça", herdada das obras sobre papel, **foi revogada**. Os murais
mostram seis e sete cores por peça. No público a cor vem em acorde, não sozinha.

**Modo Tradutor.** Par fixo: laranja faz ação, azul faz ênfase. O ocre é terra e não conta como
viva. Nunca inverter os papéis dentro da mesma peça.

**O laranja é fundo, nunca texto.** `#FF3B00` sobre papel dá 3.37:1: passa como borda e como área
de botão com tinta escura por cima (5.10:1), e reprova como texto corrido, que exige 4.5:1.
Link e termo-chave são do azul. Isso já valia para o `#EE6A22` anterior, que dava 2.94:1 e reprovava
ainda mais feio. A troca não criou a restrição, só a tornou menos severa.

**Modo Veredicto.** Três vivas com função exclusiva, e é isso que impede a peça de virar confete:

| Cor | Função única |
|---|---|
| Coral `#E85A6B` | ação: botão, contorno de card |
| Cobalto `#4B53E0` | campo e estrutura |
| Ciano `#6BC4E8` | termo-chave em guilhemés |

Uma cor, uma função. Se o ciano aparecer num botão, a hierarquia quebrou.

---

## 5 · Tokens da mão

### Rabisco · textura primária aprovada

Acúmulo de traço curto e irregular até virar campo. Vem do retrato em lápis de cor.
Implementação: [`js/rabisco.js`](./js/rabisco.js).

```js
// gerador determinístico. Semente fixa: o mesmo campo em todo render
let seed = 20260805;
function rnd(){ seed=(seed*1664525+1013904223)%4294967296; return seed/4294967296; }

// por traço: 3 segmentos, deslocamento de até 30% da largura da zona
// stroke-width  0.50 a 0.95
// opacity       0.10 a 0.42
// n             120 a 210 por campo
// zona          função (x,y) normalizada que aceita ou rejeita o ponto
```

**Regra de zona.** O rabisco nunca nasce onde há texto. A zona de texto é rejeitada no gerador,
não coberta por tarja depois.

**Gerado por código, por escolha.** O rabisco não é o traço digitalizado do Marcel: é um
procedimento reescrito em código, com semente fixa. A regularidade que ele tem e que o lápis não
tem é característica assumida, não defeito a corrigir. Isso mantém o campo idêntico em todo render
e faz a textura ser reproduzível por qualquer pessoa do time sem depender de asset.

### Grão de papel

Camada real, não filtro. SVG `feTurbulence`, `baseFrequency 0.85`, `numOctaves 3`, dessaturado.
Papel: `mix-blend-mode: multiply`, opacidade `.38`. Escuro: `overlay`, opacidade `.30`.

### Contorno

3px sólido em `--ms-contorno`, fechando a forma nos quatro lados.
Substitui a borda aberta em dois lados da V4.0, que sai do sistema.

---

## 6 · Escala tipográfica

| Papel | Família | Peso | Tamanho / entrelinha | Tracking |
|---|---|---|---|---|
| Display XL | Fraunces (opsz 9) | 900 | 96px / 0.98 | -0.03em |
| Display L | Fraunces (opsz 9) | 700 | 44px / 1.14 | -0.015em |
| Título | Fraunces (opsz 9) | 600 | 30px / 1.20 | -0.01em |
| Citação | Fraunces itálico | 400 | 22px / 1.40 | 0 |
| Corpo | Inter Tight | 400 | 18px / 1.55 | 0 |
| Corpo curto | Inter Tight | 400 | 15px / 1.50 | 0 |
| Label | IBM Plex Mono | 500 | 12px / 1.00 | 0.14em, caixa alta |

**Regra de ruptura.** Um Display XL por peça, no mínimo quatro vezes o corpo. Escala que sobe
suave é revista. Escala que rompe é direção de arte. Peça com dois displays não tem nenhum.

---

## 7 · Lógica de layout

Uma coluna de leitura, nunca grade de colunas. O campo é papel no Tradutor e preto chapado no
Veredicto, com margens largas de cerca de 8% da largura, e a separação entre blocos vem de vazio.
O card fecha em contorno de 3px e se levanta do campo por sombra alta tingida. O chrome fica
travado no topo à esquerda, monograma mais `LABEL · 0N/NN` em mono, em toda peça, e nunca carrega
dado que apodrece por hora. A hierarquia se resolve por tamanho e troca de família. Onde havia
área chapada, há rabisco, e o rabisco nunca nasce sob o texto. No corpo, cada ponto final quebra
linha, e nenhuma palavra fica sozinha na última linha. O desenho entra inteiro, na cor em que
nasceu, e o sistema faz moldura para ele em vez de tingi-lo.

---

## 8 · Elementos-assinatura

**Texto: termo-chave em guilhemés.** Azul no Tradutor, ciano no Veredicto. De 1 a 3 por peça.
Teste: leia só os termos marcados, na ordem. Se não contarem a história sozinhos, os termos estão
errados. Não a cor, os termos.

**Superfície: rabisco, grão e contorno.**
Teste: tire o rabisco e o grão. Se a peça continuar parecendo sua, a assinatura de superfície não
está fazendo trabalho nenhum e precisa ser mais forte.

---

## 9 · Este design nunca faz

- Nunca sombra neutra. A sombra é tingida com a tinta do modo.
- Nunca inverte a função das cores vivas dentro da mesma peça.
- Nunca canto arredondado, nunca botão em pílula.
- Nunca rabisco nascendo sob o texto. A zona de texto é rejeitada no gerador.
- Nunca dois displays na mesma peça.
- Nunca modo Veredicto em canal aberto de rotina.
- Nunca o desenho tingido para caber na paleta. A paleta é que cede.
- Nunca palavra sozinha na última linha.
- Nunca corpo longo em serifa, nem título em mono.
- Nunca `opsz` alto na Fraunces.
- Nunca texto nascido dentro de engine de imagem.
- Nunca em-dash no corpo da peça.
- Nunca dado que apodrece por hora dentro do chrome.

---

## 9.5 · M4™ — o mascote

Agente do Marcel no Hermes. Criatura pixel de quatro patas cuja silhueta é a letra M.
Canon próprio em `SPEC.md v2.1` (06/abr/2026): 18 rects, `shape-rendering="crispEdges"`,
sem `path`, sem `circle`, sem gradiente. **O SPEC do M4 prevalece sobre este documento em
qualquer questão de coordenada, timing ou anatomia.** O que está aqui é só a interface entre os dois.

### 9.5.1 · O M4 é fonte, não convidado

O `--ms-vivo-1` deste sistema **passa a ser `#FF3B00`, o laranja do M4**, substituindo o `#EE6A22`.

A razão é de procedência, não de gosto. O hex do M4 é valor decidido e versionado, com changelog e
anatomia especificada desde abril. O `#EE6A22` era estimativa lida de fotografia de mural sob céu
nublado. Entre um número decidido e um número estimado, manda o decidido.

Os dois laranjas não podiam coexistir: 1.14:1 entre si. Distantes demais para serem a mesma cor,
próximos demais para serem duas. Lado a lado leriam como erro de registro de impressão.

### 9.5.2 · Convergências que já existiam

| M4 | DS | Situação |
|---|---|---|
| Olhos `#1A1410` | Contorno `#1A1410` | Valor idêntico, decidido separadamente |
| Cream `#F4F0E8` | Papel `#F2EFE7` | 1.01:1 entre si. O DS vence por ser o valor em uso |
| Patas `#CC2E00` | — | 4.62:1 sobre papel. Nenhum ajuste |

### 9.5.3 · As duas paletas de modo

```
MODO TRADUTOR (era a paleta Cream do SPEC §16.3)
  Fundo    #F2EFE7   valor do DS, substitui o #F4F0E8
  Corpo    #FF3B00
  Patas    #CC2E00   4.62:1 sobre papel
  Olhos    #1A1410

MODO VEREDICTO (paleta nova, não existia no SPEC)
  Fundo    #0B0908
  Corpo    #FF3B00   5.56:1 sobre o fundo
  Patas    #CC2E00   3.75:1 sobre o fundo
  Olhos    #0B0908   herdam o preto do modo, viram buraco
```

### 9.5.4 · Regra de figura

No modo Veredicto o laranja do M4 é a quarta cor num modo que tem três com função exclusiva.
Isso só se sustenta com uma regra dura:

**O M4 é figura, nunca cor de interface.** Ele não pinta botão, não pinta campo, não marca
termo-chave, não vira borda. Aparece inteiro, como personagem, e sai. Se o laranja do M4 vazar
para um elemento de interface dentro do Veredicto, ele colide com o coral, que é 1.04:1 dele e
detém a função de ação.

### 9.5.5 · Divergência de tipografia, em aberto

Os sheets do Mascot Lab usam Space Mono e Syne. Este sistema usa Fraunces, Inter Tight e
IBM Plex Mono. Não é urgente, porque o mascote em si não carrega texto: a divergência vive só na
camada de apresentação dos sheets internos. Fica registrada para não ser descoberta por acidente.

---

## 10 · Pendências

**10.1 · Os hex ainda são leitura de fotografia, não medição de parede.** Os valores acima foram
corrigidos por contraste calculado, o que resolve legibilidade. Não resolve fidelidade ao pigmento:
a foto do mural foi feita sob céu nublado, e luz difusa esfria e dessatura tinta. Para fechar de
verdade: fotografar uma parede com cartela de referência ao lado, ou recuperar os códigos das
tintas usadas.

**10.2 · Colisão de nome M4.** No canon acessível, M4 também é o Mecanismo 4 (reframing de
categoria) do `PROCEDURAL_RAGE_REVERSION_SYSTEM`, citado em seis skills. Dois M4 com significados
diferentes na mesma casa quebram busca e quebram briefing. O mascote foi integrado nesta versão,
mas a desambiguação continua pendente.

**10.3 · Tipografia dos sheets do Mascot Lab.** Space Mono e Syne contra Fraunces, Inter Tight e
IBM Plex Mono. Ver §9.5.5.

**10.4 · Coexistência com o DS V3.0 deste repo.** O V5.2 entra como camada própria (`--ms-*`,
`css/ms-v5.css`) e não substitui os tokens `--p-*` / `--ds-*` da Era Midnight, que seguem
servindo as superfícies públicas (`index.html`, `products.html`, `formats.html`,
`governance.html`, `studies.html`). Qual dos dois governa o site é decisão em aberto; até ela
existir, os dois convivem sem colisão de nome porque os prefixos são distintos.

**Decisão carregada sem aval explícito:** raio 0. A sombra alta veio da emenda V3.2, que pareava
sombra com raio 8px. O Marcel aprovou a sombra e não falou do raio. Mantive 0 porque o contorno de
3px pede canto duro. Reversível numa linha.

## 11 · Changelog

**V5.2 · 05/ago/2026** · Integração do M4™ v2.1. O `--ms-vivo-1` migra de `#EE6A22` para
`#FF3B00`: entre um hex decidido e versionado e um hex estimado de fotografia, manda o decidido.
Duas paletas de modo definidas para o mascote, sendo a do Veredicto inédita. Regra de figura
estabelecida para impedir colisão com o coral. Regra explícita de que o laranja é fundo e nunca
texto. Pendência do mascote encerrada; colisão de nome e divergência tipográfica permanecem.
Vetor: envio do repositório do M4 com SPEC, LAYOUT, CHANGELOG e sheets.

Correções na entrada em repo: a tabela do §4 citava o cobalto no hex `#3A3FA8`, que é o valor
reprovado na V5.1 (2.25:1), enquanto o token do §3 já trazia o `#4B53E0` corrigido. A tabela passa
a citar o `#4B53E0`. Base de medição das razões declarada no topo (`--ms-surface`) e verificável
por `tools/contrast.mjs`.

**V5.1 · 05/ago/2026** · Calibragem de cor por contraste medido. Nove tokens revisados, dois
reprovavam: a oliva do label (4.25:1, abaixo do mínimo de 4.5) e o cobalto do Veredicto (2.25:1,
sumia no fundo). Contorno e preto do Veredicto migram para temperatura quente por coerência com a
regra de que preto tem temperatura. Azul do termo-chave escurece para sair do limite. ASCII
descartado do sistema por decisão do Marcel. Rabisco gerado por código promovido de limitação a
escolha deliberada. M4 identificado como agente do Marcel no Hermes, mascote ainda fora de alcance.
Vetor: aprovação das nove sugestões de hex.

**V5.0 · 05/ago/2026** · Consolidação final. Modo Tradutor migra para papel com contorno de mural,
par laranja e azul. Modo Veredicto migra de preto com lima para preto elétrico com coral, cobalto
e ciano, tirado da pintura sobre preto. Rabisco vira textura primária. Sombra alta entra como
token, sempre tingida. Contorno de 3px substitui a borda aberta. Regra de uma cor viva por peça
revogada: os murais mostram acorde, não cor solitária. Regra de "nunca contorno preto" revogada
pelo mesmo motivo. Regra de "nunca preto puro" revogada no modo Veredicto.
Vetor: envio de dois murais e uma pintura sobre preto, e escolha das direções D e C.

**V4.0 · 05/ago/2026** · Sistema de dois modos a partir de quatro obras sobre papel. Slot vivo,
hachura, borda aberta, grão. Display XL para 96 com regra de ruptura.
Superada pela V5.0 na paleta, na regra de cor e no acabamento.

**V3.2 · 05/ago/2026** · Emenda de elevação e modo papel. Revertida na V4.0, sombra reabilitada na V5.0.

**V3.1 · 05/ago/2026** · Consolidação das três fontes divergentes do monorepo.
