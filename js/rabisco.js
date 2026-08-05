/**
 * MSCS DS V5.2 — Rabisco
 * Textura primária: acúmulo de traço curto e irregular até virar campo.
 * Vem do retrato em lápis de cor. Spec: DESIGN_SYSTEM.md §5.
 * ─────────────────────────────────────
 * Gerado por código, por escolha. O rabisco não é o traço digitalizado
 * do Marcel: é um procedimento reescrito em código, com semente fixa.
 * A regularidade que ele tem e que o lápis não tem é característica
 * assumida, não defeito a corrigir. A semente é reposta a cada chamada,
 * então o mesmo campo sai idêntico em todo render, em qualquer máquina.
 *
 * Usage:
 *   <script src="js/rabisco.js"></script>
 *   <div class="ms-card" style="position:relative">
 *     <div class="ms-rabisco" id="campo"></div>
 *     <p class="ms-corpo">…</p>
 *   </div>
 *   <script>
 *     MSCS_Rabisco.montar('campo', {
 *       cor: 'var(--ms-terra)',
 *       // a zona de texto é REJEITADA no gerador, não coberta por tarja
 *       zona: function (x, y) { return y < 0.55; }
 *     });
 *   </script>
 *
 * Exposto em window.MSCS_Rabisco:
 *   .SEMENTE            — 20260805, a semente canônica
 *   .gerar(opts)        — devolve a string do <svg>
 *   .montar(alvo, opts) — gera e injeta no elemento (id ou nó)
 */

(function (global) {
  'use strict';

  var SEMENTE = 20260805;

  /* Padrões do §5. Alterá-los muda o campo em toda peça já produzida. */
  var PADRAO = {
    largura:      1000,
    altura:       1000,
    segmentos:    3,      /* por traço */
    deslocamento: 0.30,   /* extensão do traço: até 30% da largura da zona */
    tracoMin:     0.50,   /* stroke-width */
    tracoMax:     0.95,
    opacMin:      0.10,
    opacMax:      0.42,
    nMin:         120,    /* traços por campo */
    nMax:         210,
    cor:          'currentColor',
    zona:         null    /* (x,y) normalizados → aceita ou rejeita */
  };

  /* Gerador determinístico (LCG). Numbers acima de 2^32 são exatos em
     float64, então a multiplicação não perde bit antes do módulo. */
  function criarRnd(semente) {
    var s = semente >>> 0;
    return function () {
      s = (s * 1664525 + 1013904223) % 4294967296;
      return s / 4294967296;
    };
  }

  function entre(rnd, min, max) { return min + rnd() * (max - min); }

  function opcoes(opts) {
    var o = {}, k;
    for (k in PADRAO) { if (PADRAO.hasOwnProperty(k)) { o[k] = PADRAO[k]; } }
    if (opts) { for (k in opts) { if (opts.hasOwnProperty(k)) { o[k] = opts[k]; } } }
    return o;
  }

  /* Regra de zona: o rabisco nunca nasce onde há texto. Rejeitamos o traço
     inteiro, não só a origem — traço que nasce fora e cresce para dentro da
     zona de texto quebraria a regra do mesmo jeito. */
  function aceita(zona, pontos, largura, altura) {
    if (!zona) { return true; }
    for (var i = 0; i < pontos.length; i++) {
      if (!zona(pontos[i][0] / largura, pontos[i][1] / altura)) { return false; }
    }
    return true;
  }

  function tracar(rnd, o) {
    var extensao = o.deslocamento * o.largura;
    var passo    = extensao / o.segmentos;
    var x = rnd() * o.largura;
    var y = rnd() * o.altura;
    var pontos = [[x, y]];

    for (var s = 0; s < o.segmentos; s++) {
      x += entre(rnd, -passo, passo);
      y += entre(rnd, -passo, passo);
      pontos.push([x, y]);
    }
    return pontos;
  }

  function gerar(opts) {
    var o = opcoes(opts);
    var rnd = criarRnd(SEMENTE);
    var n = Math.round(entre(rnd, o.nMin, o.nMax));
    var partes = [];
    var tentativas = 0;
    var LIMITE = n * 40;   /* zona muito restrita não pode virar laço infinito */

    while (partes.length < n && tentativas < LIMITE) {
      tentativas++;
      var pontos = tracar(rnd, o);
      var largura = entre(rnd, o.tracoMin, o.tracoMax);
      var opac    = entre(rnd, o.opacMin, o.opacMax);

      if (!aceita(o.zona, pontos, o.largura, o.altura)) { continue; }

      var d = 'M' + pontos.map(function (p) {
        return p[0].toFixed(2) + ' ' + p[1].toFixed(2);
      }).join('L');

      partes.push(
        '<path d="' + d + '" stroke-width="' + largura.toFixed(2) +
        '" opacity="' + opac.toFixed(2) + '"/>'
      );
    }

    return '<svg class="ms-rabisco-svg" viewBox="0 0 ' + o.largura + ' ' + o.altura +
           '" width="100%" height="100%" preserveAspectRatio="none" aria-hidden="true" ' +
           'focusable="false" fill="none" stroke="' + o.cor +
           '" stroke-linecap="round">' + partes.join('') + '</svg>';
  }

  function montar(alvo, opts) {
    var el = typeof alvo === 'string' ? document.getElementById(alvo) : alvo;
    if (!el) { return null; }
    el.innerHTML = gerar(opts);
    return el;
  }

  global.MSCS_Rabisco = {
    SEMENTE: SEMENTE,
    PADRAO:  PADRAO,
    gerar:   gerar,
    montar:  montar
  };

}(typeof window !== 'undefined' ? window : globalThis));
