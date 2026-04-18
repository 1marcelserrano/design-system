/**
 * MSCREATIVE.SYSTEMS Design System v3.0
 * Navigation & Utility JS
 * ─────────────────────────────────────
 * Sidebar toggle, active nav tracking,
 * clipboard helpers, view switching,
 * multi-page awareness.
 */

(function () {
  'use strict';

  // ═══════════════════════════════════════
  // HELPERS
  // ═══════════════════════════════════════

  var toast = document.getElementById('toast');

  function showToast(message, duration) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(function () {
      toast.classList.remove('show');
    }, duration || 2000);
  }

  // ═══════════════════════════════════════
  // 1. SIDEBAR TOGGLE (mobile)
  // ═══════════════════════════════════════

  function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('open');
  }

  // Expose globally so onclick="toggleSidebar()" works
  window.toggleSidebar = toggleSidebar;

  // ═══════════════════════════════════════
  // 2. ACTIVE NAV TRACKING
  //    IntersectionObserver highlights the
  //    current section in the sidebar.
  // ═══════════════════════════════════════

  var sections = document.querySelectorAll('section, .hero');
  var navLinks = document.querySelectorAll('.sidebar nav a');

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.remove('active');
          });
          var id = entry.target.id;
          if (id) {
            var activeLink = document.querySelector('.sidebar nav a[href="#' + id + '"]');
            if (activeLink) activeLink.classList.add('active');
          }
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  // Close sidebar on link click (mobile)
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        var sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.remove('open');
      }
    });
  });

  // ═══════════════════════════════════════
  // 3. COPY COLOR TO CLIPBOARD
  // ═══════════════════════════════════════

  function copyColor(value) {
    navigator.clipboard.writeText(value).then(function () {
      showToast('Copiado: ' + value);
    }).catch(function () {
      // Fallback for older browsers / insecure contexts
      fallbackCopy(value);
      showToast('Copiado: ' + value);
    });
  }

  window.copyColor = copyColor;

  // ═══════════════════════════════════════
  // 4. COPY CODE BLOCK
  //    Copies the content of the nearest
  //    <code> element to clipboard.
  // ═══════════════════════════════════════

  function copyCodeBlock(button) {
    var container = button.closest('pre') || button.parentElement;
    var codeEl = container ? container.querySelector('code') : null;

    if (!codeEl) {
      // Try sibling or preceding code element
      var prev = button.previousElementSibling;
      if (prev && prev.tagName === 'CODE') codeEl = prev;
    }

    if (!codeEl) return;

    var text = codeEl.textContent || codeEl.innerText;

    navigator.clipboard.writeText(text).then(function () {
      showToast('Copiado!');
    }).catch(function () {
      fallbackCopy(text);
      showToast('Copiado!');
    });
  }

  window.copyCodeBlock = copyCodeBlock;

  // ═══════════════════════════════════════
  // 5. TOGGLE VIEW (showcase / code)
  //    Switches between .view-showcase and
  //    .view-code within a given section.
  // ═══════════════════════════════════════

  function toggleView(sectionId, view) {
    var section = document.getElementById(sectionId);
    if (!section) return;

    var showcase = section.querySelector('.view-showcase');
    var code = section.querySelector('.view-code');

    if (view === 'code') {
      if (showcase) showcase.style.display = 'none';
      if (code) code.style.display = 'block';
    } else {
      // Default: showcase
      if (showcase) showcase.style.display = 'block';
      if (code) code.style.display = 'none';
    }

    // Update toggle button states within the section
    var buttons = section.querySelectorAll('[data-view]');
    buttons.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-view') === view);
    });
  }

  window.toggleView = toggleView;

  // ═══════════════════════════════════════
  // 6. MULTI-PAGE NAV AWARENESS
  //    Highlights the current page link in
  //    the sidebar based on pathname.
  // ═══════════════════════════════════════

  (function highlightCurrentPage() {
    var pathname = window.location.pathname;
    // Normalise: remove trailing slash, default to index
    var current = pathname.replace(/\/$/, '') || '/index.html';
    // Also handle bare filename (e.g. /typography.html)
    var currentFile = current.split('/').pop() || 'index.html';

    var pageLinks = document.querySelectorAll('.sidebar nav a[href]');
    pageLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      // Skip anchor-only links (#section)
      if (href.charAt(0) === '#') return;

      var linkFile = href.split('/').pop().split('#')[0] || 'index.html';
      if (linkFile === currentFile) {
        link.classList.add('active', 'current-page');
      }
    });
  })();

  // ═══════════════════════════════════════
  // FALLBACK CLIPBOARD (textarea trick)
  // ═══════════════════════════════════════

  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) { /* noop */ }
    document.body.removeChild(ta);
  }

})();
