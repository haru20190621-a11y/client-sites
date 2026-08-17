// スクロールで少しだけ現れる。動きを減らす設定の人には何もしない。
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var items = document.querySelectorAll('.reveal');

  if (reduce.matches || !('IntersectionObserver' in window)) {
    for (var i = 0; i < items.length; i++) items[i].classList.add('shown');
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('shown');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    items.forEach(function (el) { io.observe(el); });
  }

  // ヒーローの写真を静かに入れ替える。1枚目は料理。
  var slides = document.querySelectorAll('.hero-photo .slide');
  if (slides.length > 1 && !reduce.matches) {
    var at = 0;
    setInterval(function () {
      slides[at].classList.remove('on');
      at = (at + 1) % slides.length;
      slides[at].classList.add('on');
    }, 5200);
  }
})();
