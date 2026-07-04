(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // スクロールで現れるアニメーション
  // IntersectionObserverは環境により初期発火しないことがあるため、
  // getBoundingClientRectベースのスクロール判定で実装する
  var targets = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (reduceMotion) {
    targets.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  function check() {
    var limit = window.innerHeight * 0.88;
    targets = targets.filter(function (el) {
      if (el.getBoundingClientRect().top < limit) {
        el.classList.add('visible');
        return false;
      }
      return true;
    });
  }

  // rAFはタブ非表示時に止まりスクロール判定を取りこぼすため直接呼ぶ（要素数が少なく軽い）
  window.addEventListener('scroll', check, { passive: true });
  window.addEventListener('resize', check);
  check();

  // 保険: scrollイベントを発行しない環境（アプリ内ブラウザ等）でも確実に出現させる
  var guard = setInterval(function () {
    check();
    if (targets.length === 0) clearInterval(guard);
  }, 700);
})();
