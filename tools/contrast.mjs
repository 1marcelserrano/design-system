/**
 * MSCS DS V5.2 — Verificador de contraste
 * Spec: DESIGN_SYSTEM.md §3, §4
 * ─────────────────────────────────────
 * O DESIGN_SYSTEM.md afirma que toda razão citada é medida, não estimada.
 * Este arquivo é o que torna a afirmação checável. Lê os hex do
 * css/ms-v5.css, recalcula cada par declarado e falha se algum divergir
 * do valor documentado ou reprovar no mínimo WCAG do seu papel.
 *
 * Base de medição: --ms-surface do modo, que é onde o texto assenta.
 *
 *   node tools/contrast.mjs
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const css = readFileSync(join(raiz, 'css', 'ms-v5.css'), 'utf8');

/* Lê os tokens direto do CSS: se o hex mudar lá, o teste acompanha. */
function tokens(bloco) {
  const corpo = css.split(bloco)[1]?.split('}')[0] ?? '';
  const mapa = {};
  for (const [, nome, hex] of corpo.matchAll(/(--ms-[\w-]+):\s*(#[0-9A-Fa-f]{6})/g)) {
    mapa[nome] = hex.toUpperCase();
  }
  return mapa;
}

const T = tokens(':root {');
const V = tokens('[data-modo="veredicto"] {');

const canal = (c) => {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};

const luminancia = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return 0.2126 * canal((n >> 16) & 255)
       + 0.7152 * canal((n >> 8) & 255)
       + 0.0722 * canal(n & 255);
};

const razao = (a, b) => {
  const [x, y] = [luminancia(a), luminancia(b)];
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
};

/* min: piso WCAG do papel. 4.5 = texto corrido, 3.0 = texto grande e
   elemento não-textual, null = par sem piso (a razão é informativa). */
const casos = [
  ['Tradutor · contorno sobre surface',      T['--ms-contorno'], T['--ms-surface'], 17.18, 3.0],
  ['Tradutor · tinta sobre surface',         T['--ms-ink'],      T['--ms-surface'], 17.18, 4.5],
  ['Tradutor · corpo longo sobre surface',   T['--ms-muted'],    T['--ms-surface'],  8.85, 4.5],
  ['Tradutor · label oliva em mono 12px',    T['--ms-label'],    T['--ms-surface'],  5.05, 4.5],
  ['Tradutor · laranja como área/borda',     T['--ms-vivo-1'],   T['--ms-surface'],  3.37, 3.0],
  ['Tradutor · tinta sobre o laranja',       T['--ms-vivo-ink'], T['--ms-vivo-1'],   5.10, 4.5],
  ['Tradutor · azul termo-chave',            T['--ms-vivo-2'],   T['--ms-surface'],  6.27, 4.5],

  ['Veredicto · surface sobre o fundo',      V['--ms-surface'],  V['--ms-bg'],       1.06, null],
  ['Veredicto · tinta sobre surface',        V['--ms-ink'],      V['--ms-surface'], 16.26, 4.5],
  ['Veredicto · corpo longo sobre surface',  V['--ms-muted'],    V['--ms-surface'],  9.95, 4.5],
  ['Veredicto · label sobre surface',        V['--ms-label'],    V['--ms-surface'],  6.10, 4.5],
  ['Veredicto · tinta sobre o coral',        V['--ms-vivo-ink'], V['--ms-vivo-1'],   5.78, 4.5],
  ['Veredicto · cobalto como campo',         V['--ms-vivo-2'],   V['--ms-surface'],  3.21, 3.0],
  ['Veredicto · tinta clara sobre cobalto',  T['--ms-bg'],       V['--ms-vivo-2'],   5.06, 4.5],
  ['Veredicto · ciano termo-chave',          V['--ms-vivo-3'],   V['--ms-surface'],  9.51, 4.5],

  /* M4™ §9.5.3 — o mascote é figura, nunca cor de interface. */
  ['M4 · patas #CC2E00 sobre papel',         '#CC2E00',          T['--ms-bg'],       4.62, null],
  ['M4 · corpo #FF3B00 sobre preto',         '#FF3B00',          V['--ms-bg'],       5.56, null],
  ['M4 · patas #CC2E00 sobre preto',         '#CC2E00',          V['--ms-bg'],       3.75, null]
];

const TOLERANCIA = 0.02;
let falhas = 0;

for (const [nome, a, b, doc, min] of casos) {
  if (!a || !b) {
    console.log(`✗ ${nome.padEnd(40)} token ausente no CSS`);
    falhas++;
    continue;
  }
  const v = razao(a, b);
  const deriva = Math.abs(v - doc) > TOLERANCIA;
  const reprova = min !== null && v < min;
  const marca = deriva || reprova ? '✗' : '✓';

  let nota = '';
  if (deriva)  { nota += `  documentado ${doc.toFixed(2)}:1`; }
  if (reprova) { nota += `  abaixo do mínimo ${min.toFixed(1)}:1`; }
  if (deriva || reprova) { falhas++; }

  console.log(`${marca} ${nome.padEnd(40)} ${a} / ${b}  ${v.toFixed(2)}:1${nota}`);
}

/* Colisões declaradas no §9.5.1 e §9.5.4: os dois laranjas não podem
   coexistir, e o laranja do M4 não pode virar interface no Veredicto. */
const colisoes = [
  ['laranja M4 x laranja legado #EE6A22', '#FF3B00', '#EE6A22', 1.14],
  ['laranja M4 x coral do Veredicto',     '#FF3B00', V['--ms-vivo-1'], 1.04],
  ['cream do M4 x papel do DS',           '#F4F0E8', T['--ms-bg'], 1.01]
];

console.log('');
for (const [nome, a, b, doc] of colisoes) {
  const v = razao(a, b);
  const ok = Math.abs(v - doc) <= TOLERANCIA;
  if (!ok) { falhas++; }
  console.log(`${ok ? '✓' : '✗'} ${nome.padEnd(40)} ${v.toFixed(2)}:1 (documentado ${doc.toFixed(2)}:1)`);
}

console.log('');
if (falhas) {
  console.error(`${falhas} divergência(s) entre css/ms-v5.css e DESIGN_SYSTEM.md.`);
  process.exit(1);
}
console.log(`${casos.length + colisoes.length} pares conferem com o DESIGN_SYSTEM.md.`);
