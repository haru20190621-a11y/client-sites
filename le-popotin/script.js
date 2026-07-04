(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ヒーロー写真のクロスフェード切り替え
  var slides = document.querySelectorAll('.hero-img');
  if (slides.length > 1 && !reduceMotion) {
    var idx = 0;
    setInterval(function () {
      slides[idx].classList.remove('active');
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add('active');
    }, 5000);
  }

  // スクロールで現れるアニメーション
  // IntersectionObserverは環境により初期発火しないことがあるため、
  // getBoundingClientRectベースのスクロール判定で実装する
  var targets = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (reduceMotion) {
    targets.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  var ticking = false;
  function check() {
    ticking = false;
    var limit = window.innerHeight * 0.88;
    targets = targets.filter(function (el) {
      if (el.getBoundingClientRect().top < limit) {
        el.classList.add('visible');
        return false;
      }
      return true;
    });
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(check);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  check();
})();
