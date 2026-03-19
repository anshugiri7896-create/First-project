// DevPath — main.js

document.addEventListener('DOMContentLoaded', function () {

  // -- custom cursor --
  var dot  = document.getElementById('cur-dot');
  var ring = document.getElementById('cur-ring');
  var mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', function (e) {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  (function raf() {
    rx += (mx - rx) * 0.13;
    ry += (my - ry) * 0.13;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(raf);
  })();

  document.querySelectorAll('a, button, .card, .row-card, .pc, .feat-item, .pj, .tc2').forEach(function (el) {
    el.addEventListener('mouseenter', function () {
      dot.style.width    = '13px';
      dot.style.height   = '13px';
      dot.style.background = 'var(--green)';
      ring.style.width   = '52px';
      ring.style.height  = '52px';
    });
    el.addEventListener('mouseleave', function () {
      dot.style.width    = '';
      dot.style.height   = '';
      dot.style.background = '';
      ring.style.width   = '';
      ring.style.height  = '';
    });
  });

  // -- navbar scroll --
  var nb = document.getElementById('navbar');
  if (nb) {
    window.addEventListener('scroll', function () {
      nb.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });
  }

  // -- hamburger --
  var ham = document.getElementById('ham');
  var nl  = document.getElementById('navlinks');
  if (ham && nl) {
    ham.addEventListener('click', function () {
      ham.classList.toggle('open');
      nl.classList.toggle('open');
    });
  }

  // -- scroll progress bar --
  var sprog = document.getElementById('sprog');
  if (sprog) {
    window.addEventListener('scroll', function () {
      var tot = document.documentElement.scrollHeight - window.innerHeight;
      sprog.style.width = (window.scrollY / tot * 100) + '%';
    }, { passive: true });
  }

  // -- scroll reveal (aos + titem) --
  var aosObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) e.target.classList.add('in');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.aos, .titem').forEach(function (el) {
    aosObs.observe(el);
  });

  // -- progress bars --
  var pbObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('.pb-fill').forEach(function (f) {
        f.style.width = (f.dataset.w || 0) + '%';
      });
      pbObs.unobserve(e.target);
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('.pbars').forEach(function (el) {
    pbObs.observe(el);
  });

  // -- counter animation --
  var cntObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el  = e.target;
      var end = parseInt(el.dataset.count);
      var suf = el.dataset.suf || '';
      var dur = 1800;
      var step = end / (dur / 16);
      var cur  = 0;
      var t = setInterval(function () {
        cur = Math.min(cur + step, end);
        el.textContent = Math.floor(cur) + suf;
        if (cur >= end) clearInterval(t);
      }, 16);
      cntObs.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(function (el) {
    cntObs.observe(el);
  });

  // -- tabs --
  document.querySelectorAll('.tab-group').forEach(function (group) {
    var btns   = group.querySelectorAll('.tb');
    var panels = group.querySelectorAll('.tpanel');
    btns.forEach(function (btn, i) {
      btn.addEventListener('click', function () {
        btns.forEach(function (b)   { b.classList.remove('act'); });
        panels.forEach(function (p) { p.classList.remove('act'); p.style.opacity = '0'; });
        btn.classList.add('act');
        panels[i].classList.add('act');
        setTimeout(function () { panels[i].style.opacity = '1'; }, 10);
      });
    });
  });

  // -- filter buttons --
  document.querySelectorAll('.filter-row').forEach(function (row) {
    row.querySelectorAll('.fb').forEach(function (btn) {
      btn.addEventListener('click', function () {
        row.querySelectorAll('.fb').forEach(function (b) { b.classList.remove('act'); });
        btn.classList.add('act');
        var f = btn.dataset.f;
        document.querySelectorAll('.fi').forEach(function (el) {
          el.classList.toggle('hide', f !== 'all' && el.dataset.cat !== f);
        });
      });
    });
  });

  // -- copy code --
  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var code = btn.closest('.code-blk').querySelector('code');
      navigator.clipboard.writeText(code.textContent).then(function () {
        btn.textContent = 'Copied!';
        btn.style.color = 'var(--green)';
        setTimeout(function () {
          btn.textContent = 'Copy';
          btn.style.color  = '';
        }, 2000);
      });
    });
  });

  // -- active nav link (pages only) --
  var currentPage = window.location.pathname.split('/').pop().replace('.html', '');
  document.querySelectorAll('.nav-links a[data-p]').forEach(function (a) {
    if (a.dataset.p === currentPage) a.classList.add('act');
  });

  // -- resource search --
  var rsearch = document.getElementById('rsearch');
  if (rsearch) {
    rsearch.addEventListener('input', function () {
      var q = rsearch.value.toLowerCase();
      document.querySelectorAll('.searchable').forEach(function (el) {
        el.classList.toggle('hidden', q.length > 0 && !el.textContent.toLowerCase().includes(q));
      });
    });
  }

  // -- particle canvas (home only) --
  var canvas = document.getElementById('particles');
  if (canvas) {
    var ctx = canvas.getContext('2d');
    var resize = function () {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    var pts = [];
    for (var i = 0; i < 55; i++) {
      pts.push({
        x:  Math.random() * canvas.width,
        y:  Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r:  Math.random() * 1.4 + 0.4,
        a:  Math.random() * 0.45 + 0.08
      });
    }

    var pmx = -999, pmy = -999;
    window.addEventListener('mousemove', function (e) { pmx = e.clientX; pmy = e.clientY; });

    (function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pts.forEach(function (p) {
        var dx = pmx - p.x, dy = pmy - p.y;
        var d  = Math.hypot(dx, dy);
        if (d < 160) { p.vx += dx * 0.000025; p.vy += dy * 0.000025; }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0)           p.x = canvas.width;
        if (p.x > canvas.width)  p.x = 0;
        if (p.y < 0)           p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,229,255,' + p.a + ')';
        ctx.fill();
      });

      for (var i = 0; i < pts.length; i++) {
        for (var j = i + 1; j < pts.length; j++) {
          var dx = pts[i].x - pts[j].x;
          var dy = pts[i].y - pts[j].y;
          var d  = Math.hypot(dx, dy);
          if (d < 115) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = 'rgba(0,229,255,' + (0.07 * (1 - d / 115)) + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    })();
  }

});
