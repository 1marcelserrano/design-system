/**
 * MSCREATIVE.SYSTEMS — 3D Wireframe Engine v3.0
 * Consolidated render engine + 6 geometry definitions.
 *
 * Usage:
 *   <script src="js/wireframe-engine.js"></script>
 *   <canvas id="my-canvas" width="300" height="300"
 *           data-geometry="icosaedro"
 *           data-color1="#A89D80" data-color2="#A89D80"
 *           data-speed-x="0.12" data-speed-y="0.16" data-speed-z="0.06"
 *           data-fov="3.5"></canvas>
 *   <script>
 *     // Option A — auto-init all [data-geometry] canvases:
 *     MSCS_Wireframe.initAllGeometries();
 *
 *     // Option B — manual init:
 *     MSCS_Wireframe.initGeometry('my-canvas', 'icosaedro', '#A89D80', '#A89D80', [0.12, 0.16, 0.06], 3.5);
 *
 *     // Option C — low-level (bring your own loop):
 *     MSCS_Wireframe.renderWireframe('my-canvas', MSCS_Wireframe.GEOMETRIES.icosaedro, '#A89D80', '#A89D80', [0.12, 0.16, 0.06], 3.5);
 *   </script>
 *
 * Exposed on window.MSCS_Wireframe:
 *   .rotateX(v, angle)        — rotate [x,y,z] around X axis
 *   .rotateY(v, angle)        — rotate [x,y,z] around Y axis
 *   .rotateZ(v, angle)        — rotate [x,y,z] around Z axis
 *   .project(v, fov, size)    — perspective-project [x,y,z] → [sx, sy]
 *   .renderWireframe(canvasId, geometry, color1, color2, speeds, fov)
 *   .initGeometry(canvasId, geometryName, color1, color2, speeds, fov)
 *   .initAllGeometries()
 *   .GEOMETRIES                — { icosaedro, mobius, tensegrity, turbine, dendritico, gyroscope }
 *   .MS_SIG_SVG                — inline SVG string of the MS signature mark
 */
(function () {
  'use strict';

  // ═══════════════════════════════════════════════════════════
  // RENDER ENGINE
  // ═══════════════════════════════════════════════════════════

  function rotateX(v, a) {
    var c = Math.cos(a), s = Math.sin(a);
    return [v[0], v[1] * c - v[2] * s, v[1] * s + v[2] * c];
  }

  function rotateY(v, a) {
    var c = Math.cos(a), s = Math.sin(a);
    return [v[0] * c + v[2] * s, v[1], -v[0] * s + v[2] * c];
  }

  function rotateZ(v, a) {
    var c = Math.cos(a), s = Math.sin(a);
    return [v[0] * c - v[1] * s, v[0] * s + v[1] * c, v[2]];
  }

  function project(v, fov, size) {
    var z = v[2] + fov;
    var scale = fov / z;
    return [v[0] * scale * size / 2 + size / 2, v[1] * scale * size / 2 + size / 2];
  }

  /**
   * Start an animation loop that draws a wireframe geometry on a canvas.
   *
   * @param {string}   canvasId  — DOM id of the <canvas> element
   * @param {Object}   geometry  — { vertices: number[][], edges: number[][] }
   * @param {string}   color1    — CSS color for gradient stop 0
   * @param {string}   color2    — CSS color for gradient stop 1
   * @param {number[]} speeds    — [rx, ry, rz] radians per second
   * @param {number}   [fov=3.5] — perspective field-of-view divisor
   * @returns {number|null}      — requestAnimationFrame handle, or null if canvas not found
   */
  function renderWireframe(canvasId, geometry, color1, color2, speeds, fov) {
    var canvas = (typeof canvasId === 'string')
      ? document.getElementById(canvasId)
      : canvasId;
    if (!canvas) return null;

    var ctx = canvas.getContext('2d');
    var size = canvas.width;
    fov = fov || 3.5;
    var start = null;
    var rafId;

    function draw(timestamp) {
      if (!start) start = timestamp;
      var elapsed = (timestamp - start) / 1000;
      ctx.clearRect(0, 0, size, size);

      var ax = elapsed * speeds[0];
      var ay = elapsed * speeds[1];
      var az = elapsed * speeds[2];

      // Project all vertices
      var projected = geometry.vertices.map(function (v) {
        var r = rotateX(v, ax);
        r = rotateY(r, ay);
        r = rotateZ(r, az);
        return project(r, fov, size);
      });

      // Compute depths for alpha
      var depths = geometry.vertices.map(function (v) {
        var r = rotateX(v, ax);
        r = rotateY(r, ay);
        r = rotateZ(r, az);
        return r[2];
      });

      // Draw edges
      geometry.edges.forEach(function (edge) {
        var a = edge[0], b = edge[1];
        var x1 = projected[a][0], y1 = projected[a][1];
        var x2 = projected[b][0], y2 = projected[b][1];
        var avgDepth = (depths[a] + depths[b]) / 2;
        var alpha = Math.min(1, Math.max(0.15, 0.3 + 0.7 * ((avgDepth + 2) / 4) * 0.85));

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);

        var grad = ctx.createLinearGradient(x1, y1, x2, y2);
        grad.addColorStop(0, color1);
        grad.addColorStop(1, color2);

        ctx.strokeStyle = grad;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // Draw vertices (dots)
      projected.forEach(function (p, i) {
        var alpha = Math.min(1, Math.max(0.2, 0.3 + 0.7 * ((depths[i] + 2) / 4)));
        ctx.beginPath();
        ctx.arc(p[0], p[1], 1.8, 0, Math.PI * 2);
        ctx.fillStyle = color1;
        ctx.globalAlpha = alpha * 0.6;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);
    return rafId;
  }

  // ═══════════════════════════════════════════════════════════
  // GEOMETRY DEFINITIONS
  // ═══════════════════════════════════════════════════════════

  // ── MSCREATIVE.SYSTEMS: Icosaedro ──
  var icosaedro = (function () {
    var verts = [];
    var edges = [];
    var phi = (1 + Math.sqrt(5)) / 2;
    var s = 0.85;
    var raw = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
    ];
    raw.forEach(function (v) {
      var len = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
      verts.push([v[0] / len * s, v[1] / len * s, v[2] / len * s]);
    });
    [
      [0, 1], [0, 5], [0, 7], [0, 10], [0, 11],
      [1, 5], [1, 7], [1, 8], [1, 9],
      [2, 3], [2, 4], [2, 6], [2, 10], [2, 11],
      [3, 4], [3, 6], [3, 8], [3, 9],
      [4, 5], [4, 9], [4, 11],
      [5, 9], [5, 11],
      [6, 7], [6, 8], [6, 10],
      [7, 8], [7, 10],
      [8, 9], [10, 11]
    ].forEach(function (e) { edges.push(e); });
    return { vertices: verts, edges: edges };
  })();

  // ── CREATIVE ORACLE: Mobius Strip ──
  var mobius = (function () {
    var verts = [];
    var edges = [];
    var segs = 40;
    var R = 1.0, w = 0.35;
    for (var i = 0; i < segs; i++) {
      var t = (i / segs) * Math.PI * 2;
      var halfT = t / 2;
      var cx = Math.cos(t) * R, cy = Math.sin(t) * R;
      var dx = Math.cos(halfT) * w, dz = Math.sin(halfT) * w;
      verts.push([cx - Math.cos(t) * dx, cy - Math.sin(t) * dx, -dz]);
      verts.push([cx + Math.cos(t) * dx, cy + Math.sin(t) * dx, dz]);
    }
    for (var i = 0; i < segs; i++) {
      var next = (i + 1) % segs;
      edges.push([i * 2, next * 2]);
      edges.push([i * 2 + 1, next * 2 + 1]);
      if (i % 2 === 0) edges.push([i * 2, i * 2 + 1]);
    }
    return { vertices: verts, edges: edges };
  })();

  // ── DESIGN CODEX: Tensegrity ──
  var tensegrity = {
    vertices: [
      [0.9, 0.5, 0.3], [-0.9, -0.5, -0.3], [-0.3, 0.9, -0.5], [0.3, -0.9, 0.5],
      [-0.5, -0.3, 0.9], [0.5, 0.3, -0.9], [0, 0, 0],
      [1.2, 0.8, 0.5], [-1.2, -0.8, -0.5], [-0.5, 1.2, -0.8],
      [0.5, -1.2, 0.8], [-0.8, -0.5, 1.2], [0.8, 0.5, -1.2]
    ],
    edges: [
      [0, 1], [2, 3], [4, 5],
      [0, 2], [0, 4], [0, 5], [0, 3], [1, 2], [1, 4], [1, 3], [1, 5], [2, 4], [3, 5],
      [0, 7], [1, 8], [2, 9], [3, 10], [4, 11], [5, 12],
      [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5]
    ]
  };

  // ── STYLE CODEX: Turbine ──
  var turbine = (function () {
    var verts = [];
    var edges = [];
    var blades = 5;

    // Central axis
    verts.push([0, 1.2, 0]);   // 0 top
    verts.push([0, 0.4, 0]);   // 1 upper mid
    verts.push([0, -0.4, 0]);  // 2 lower mid
    verts.push([0, -1.2, 0]);  // 3 bottom

    // 5 blades: hub + tip + trail
    for (var i = 0; i < blades; i++) {
      var angle = (i / blades) * Math.PI * 2;
      var twist = i * 0.3;
      var ca = Math.cos(angle), sa = Math.sin(angle);
      var hy = 0.3 - i * 0.15;
      verts.push([ca * 0.15, hy, sa * 0.15]);                                        // hub: 4+i*3
      var tipA = angle + twist;
      verts.push([Math.cos(tipA) * 1.1, hy - 0.2, Math.sin(tipA) * 1.1]);            // tip: 4+i*3+1
      var trA = angle - 0.4 + twist;
      verts.push([Math.cos(trA) * 0.85, hy + 0.15, Math.sin(trA) * 0.85]);           // trail: 4+i*3+2
    }

    // Outer ring nodes
    for (var i = 0; i < blades; i++) {
      var angle = (i / blades) * Math.PI * 2 + i * 0.3;
      verts.push([Math.cos(angle) * 1.25, -0.5 + Math.sin(angle * 0.5) * 0.3, Math.sin(angle) * 1.25]);
    }

    // Edges: axis
    edges.push([0, 1], [1, 2], [2, 3]);
    for (var i = 0; i < blades; i++) {
      var hub = 4 + i * 3, tip = hub + 1, trail = hub + 2;
      edges.push([hub, tip], [hub, trail], [tip, trail]);
      edges.push([1, hub], [2, hub]);
      edges.push([tip, 19 + i]);
      var nextHub = 4 + ((i + 1) % blades) * 3;
      edges.push([trail, nextHub]);
    }
    for (var i = 0; i < blades; i++) {
      edges.push([19 + i, 19 + (i + 1) % blades]);
    }
    edges.push([0, 4], [3, 4 + (blades - 1) * 3]);

    return { vertices: verts, edges: edges };
  })();

  // ── NEURO CODEX: Dendritico ──
  var dendritico = {
    vertices: [
      [0, 0, 0],
      [0.1, 0.7, 0.1], [0.3, 1.1, -0.2], [-0.2, 1.3, 0.1], [0.1, 1, 0.5],
      [0.8, 0.2, 0.1], [1.2, 0.5, -0.1], [1.1, 0.1, 0.5], [0.9, -0.3, 0.2],
      [-0.7, 0.3, 0.2], [-1.1, 0, -0.2], [-0.9, 0.5, -0.4], [-0.8, -0.2, 0.4],
      [0.2, 0.1, 0.9], [-0.1, 0.4, 1.2], [0.4, -0.2, 1.1],
      [0.1, -0.8, 0.1], [0.4, -1.1, -0.2], [-0.2, -1.2, 0.1], [0.1, -0.9, 0.5]
    ],
    edges: [
      [0, 1], [0, 5], [0, 9], [0, 13], [0, 16],
      [1, 2], [1, 3], [1, 4], [2, 3], [3, 4],
      [5, 6], [5, 7], [5, 8], [6, 7], [7, 8],
      [9, 10], [9, 11], [9, 12], [10, 11], [11, 12],
      [13, 14], [13, 15], [14, 15],
      [16, 17], [16, 18], [16, 19], [17, 18], [18, 19],
      [1, 5], [5, 13], [13, 9], [9, 1], [2, 6], [10, 14], [17, 8]
    ]
  };

  // ── EXECUTION CODEX: Gyroscope ──
  var gyroscope = (function () {
    var verts = [];
    var edges = [];
    var segs = 16;
    var r = 1.1;

    // Ring 1: XY plane (0..15)
    for (var i = 0; i < segs; i++) {
      var a = (i / segs) * Math.PI * 2;
      verts.push([Math.cos(a) * r, Math.sin(a) * r, 0]);
    }
    // Ring 2: XZ plane (16..31)
    for (var i = 0; i < segs; i++) {
      var a = (i / segs) * Math.PI * 2;
      verts.push([Math.cos(a) * r, 0, Math.sin(a) * r]);
    }
    // Ring 3: YZ plane (32..47)
    for (var i = 0; i < segs; i++) {
      var a = (i / segs) * Math.PI * 2;
      verts.push([0, Math.cos(a) * r, Math.sin(a) * r]);
    }
    // Nucleus (48) + axis tips (49-54)
    verts.push([0, 0, 0]);
    verts.push([0.3, 0, 0], [-0.3, 0, 0], [0, 0.3, 0], [0, -0.3, 0], [0, 0, 0.3], [0, 0, -0.3]);

    for (var i = 0; i < segs; i++) edges.push([i, (i + 1) % segs]);
    for (var i = 0; i < segs; i++) edges.push([16 + i, 16 + (i + 1) % segs]);
    for (var i = 0; i < segs; i++) edges.push([32 + i, 32 + (i + 1) % segs]);
    edges.push([48, 49], [48, 50], [48, 51], [48, 52], [48, 53], [48, 54]);

    return { vertices: verts, edges: edges };
  })();

  // ── FRONTEIRISTAS: Threshold (Stella Octangula) ──
  // Two interpenetrating tetrahedra — frontier as intersection of two domains
  var threshold = (function () {
    var s = 0.75;
    return {
      vertices: [
        [ s,  s,  s], [-s, -s,  s], [-s,  s, -s], [ s, -s, -s],
        [-s, -s, -s], [ s,  s, -s], [ s, -s,  s], [-s,  s,  s]
      ],
      edges: [
        [0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3],
        [4, 5], [4, 6], [4, 7], [5, 6], [5, 7], [6, 7]
      ]
    };
  })();

  // ═══════════════════════════════════════════════════════════
  // GEOMETRY REGISTRY
  // ═══════════════════════════════════════════════════════════

  var GEOMETRIES = {
    icosaedro:   icosaedro,
    mobius:      mobius,
    tensegrity:  tensegrity,
    turbine:     turbine,
    dendritico:  dendritico,
    gyroscope:   gyroscope,
    threshold:   threshold
  };

  // ═══════════════════════════════════════════════════════════
  // DEFAULT CONFIG PER GEOMETRY (matches Design System v2.8)
  // ═══════════════════════════════════════════════════════════

  // Study E — Accent Puro Monocromático (aprovado 2026-04-18)
  // c2 = c1 em todos os produtos — presença uniforme em todas as arestas
  var DEFAULTS = {
    icosaedro:  { color1: '#A89D80', color2: '#A89D80', speeds: [0.12, 0.16, 0.06], fov: 3.5 },
    mobius:     { color1: '#E8397A', color2: '#E8397A', speeds: [0.12, 0.18, 0.04], fov: 3.5 },
    tensegrity: { color1: '#909098', color2: '#909098', speeds: [0.13, 0.16, 0.09], fov: 3.5 },
    turbine:    { color1: '#E8397A', color2: '#E8397A', speeds: [0.10, 0.25, 0.06], fov: 3.5 },
    dendritico: { color1: '#00C9C8', color2: '#00C9C8', speeds: [0.14, 0.22, 0.10], fov: 3.5 },
    gyroscope:  { color1: '#E87800', color2: '#E87800', speeds: [0.12, 0.18, 0.08], fov: 3.5 },
    threshold:  { color1: '#B5BF9A', color2: '#B5BF9A', speeds: [0.06, 0.10, 0.04], fov: 3.5 }
  };

  // ═══════════════════════════════════════════════════════════
  // MS SIGNATURE SVG
  // ═══════════════════════════════════════════════════════════

  var MS_SIG_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.2 51.75"><path fill="currentColor" d="M8.15,17.67c-.11,4.77.03,9.53.42,14.28.25,3.17,1.04,6.3,1.75,9.48C12.18,49.84-.29,51.03.01,42.28.37,31.52,2.03,21.21,5.01,11.36c.43-1.42,1.65-3.48,3.25-2.21.54.42.93,1,1.17,1.72l5.79,16.92c.24.69.41.67.52-.04C16.76,21.39,18.48,15.18,20.9,9.1c2.42-6.09,7.58-4.14,9.4.92,2.78,7.72,3.72,15.26,4.54,24.1.02.19.12.21.29.06,5.16-4.21,10.49-8.2,15.97-11.98.25-.17.22-.26-.08-.27-3.62-.09-7.24-.18-10.87-.26-7.4-.16-4.36-6.16-1.1-9.15C42.34,9.67,45.46,6.8,48.59,3.94c1.41-1.29,2.61-3.41,5.09-3.82,5.9-.98,7.9,6.3,3.23,9.69-3.84,2.79-7.81,5.4-11.9,7.82-.15.09-.14.15.04.17,3.88.43,7.73.34,11.55-.27,2.22-.36,3.71-2.04,5.77-2.3,3.65-.46,6.04,3.15,4.51,6.38-.4.85-1.14,1.76-2.2,2.73-9.11,8.27-20.2,14.6-28.33,22.57-1.09,1.06-2.3,3.43-3.58,4.09-4.62,2.4-8.53-.91-8.76-5.63-.18-3.76-1.49-26.94-1.87-26.89-.1.02-.21.15-.27.33-1.47,4.3-2.51,8.71-3.14,13.22-.12.91-.44,1.73-.93,2.46-1.56,2.3-3.55-.8-4.07-2.08C9.65,26.08,7.93,21.22,6.55,16.6c-.03-.09-.07-.15-.13-.16l-.06-.01c-.03-.01-.05.01-.06.05v.01s0,0,0,0Z"/></svg>';

  // ═══════════════════════════════════════════════════════════
  // CONVENIENCE API
  // ═══════════════════════════════════════════════════════════

  /**
   * Initialize a single canvas with a named geometry.
   * Falls back to DEFAULTS for any omitted parameter.
   *
   * @param {string}        canvasId      — DOM id of the <canvas>
   * @param {string}        geometryName  — key in GEOMETRIES (icosaedro, mobius, tensegrity, turbine, dendritico, gyroscope)
   * @param {string}        [color1]      — gradient color 1 (falls back to default for that geometry)
   * @param {string}        [color2]      — gradient color 2
   * @param {number[]}      [speeds]      — [rx, ry, rz] rad/s
   * @param {number}        [fov]         — perspective fov
   * @returns {number|null} — rAF handle or null
   */
  function initGeometry(canvasId, geometryName, color1, color2, speeds, fov) {
    var name = (geometryName || '').toLowerCase().replace(/[^a-z]/g, '');

    // Resolve aliases
    if (name === 'moebius' || name === 'mbius')       name = 'mobius';
    if (name === 'icosahedron' || name === 'ico')     name = 'icosaedro';
    if (name === 'dendritic' || name === 'dendrite')   name = 'dendritico';

    var geo = GEOMETRIES[name];
    if (!geo) {
      console.warn('[MSCS_Wireframe] Unknown geometry: "' + geometryName + '". Available: ' + Object.keys(GEOMETRIES).join(', '));
      return null;
    }

    var def = DEFAULTS[name] || {};
    return renderWireframe(
      canvasId,
      geo,
      color1  || def.color1  || '#A89D80',
      color2  || def.color2  || '#A89D80',
      speeds  || def.speeds  || [0.12, 0.16, 0.06],
      fov     || def.fov     || 3.5
    );
  }

  /**
   * Auto-initialize every <canvas data-geometry="..."> on the page.
   *
   * Supported data attributes:
   *   data-geometry   — geometry name (required)
   *   data-color1     — override gradient color 1
   *   data-color2     — override gradient color 2
   *   data-speed-x    — rotation speed X (rad/s)
   *   data-speed-y    — rotation speed Y
   *   data-speed-z    — rotation speed Z
   *   data-fov        — perspective field-of-view
   */
  function initAllGeometries() {
    var canvases = document.querySelectorAll('canvas[data-geometry]');
    for (var i = 0; i < canvases.length; i++) {
      var el = canvases[i];
      var name = el.getAttribute('data-geometry');
      var c1 = el.getAttribute('data-color1') || undefined;
      var c2 = el.getAttribute('data-color2') || undefined;

      var sx = el.getAttribute('data-speed-x');
      var sy = el.getAttribute('data-speed-y');
      var sz = el.getAttribute('data-speed-z');
      var speeds = (sx !== null && sy !== null && sz !== null)
        ? [parseFloat(sx), parseFloat(sy), parseFloat(sz)]
        : undefined;

      var fov = el.getAttribute('data-fov');
      fov = fov ? parseFloat(fov) : undefined;

      // Use the canvas element id, or fall back to rendering directly on the element
      var id = el.id;
      if (!id) {
        // Generate a stable id so renderWireframe can find it
        id = '_mscs_geo_' + i;
        el.id = id;
      }

      initGeometry(id, name, c1, c2, speeds, fov);
    }
  }

  // ═══════════════════════════════════════════════════════════
  // PUBLIC API
  // ═══════════════════════════════════════════════════════════

  window.MSCS_Wireframe = {
    // Core engine
    rotateX:          rotateX,
    rotateY:          rotateY,
    rotateZ:          rotateZ,
    project:          project,
    renderWireframe:  renderWireframe,

    // Convenience
    initGeometry:     initGeometry,
    initAllGeometries: initAllGeometries,

    // Data
    GEOMETRIES:       GEOMETRIES,
    DEFAULTS:         DEFAULTS,
    MS_SIG_SVG:       MS_SIG_SVG
  };

})();
