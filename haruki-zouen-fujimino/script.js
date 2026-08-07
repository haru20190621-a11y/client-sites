/* スクロール出現。IntersectionObserver も rAF も環境により止まった実績があるので、
   scroll イベント直接判定＋setInterval の保険で効かせる（品質基準書 §3-2）。

   さらにフェイルセーフを1段足してある。scroll イベントが一度も飛んでこない環境
   （埋め込みビューア・アプリ内ブラウザ等で実際に遭遇した）では、上の仕組みだけだと
   ファーストビューより下が opacity:0 のまま**永久に読めなくなる**。5秒待って
   スクロールが一度も観測できなければ、演出をあきらめて全部表示する。
   見えないより地味なほうがましなので、この判断は常に表示側に倒す。 */
(function () {
  var els = document.querySelectorAll('.reveal');
  var scrolled = false;

  function on(el) { el.classList.add('on'); }

  function check() {
    var vh = window.innerHeight;
    Array.prototype.forEach.call(els, function (el) {
      if (!el.classList.contains('on') &&
          el.getBoundingClientRect().top < vh * 0.88) {
        on(el);
      }
    });
  }

  function revealAll() {
    Array.prototype.forEach.call(els, on);
  }

  window.addEventListener('scroll', function () {
    scrolled = true;
    check();
  }, { passive: true });
  window.addEventListener('load', check);

  var t = setInterval(function () {
    check();
    if (!document.querySelector('.reveal:not(.on)')) clearInterval(t);
  }, 700);

  setTimeout(function () {
    if (!scrolled && window.scrollY === 0) revealAll();
  }, 5000);

  check();
})();
