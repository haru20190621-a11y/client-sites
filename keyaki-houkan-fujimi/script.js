/* .js の付与はここで行う（head のインラインでやると、このファイルが読めなかったときに
   .js .rv{opacity:0} が効いたまま本文が永久に消える） */
document.documentElement.className += ' js';

document.addEventListener('DOMContentLoaded', function () {
  var els = document.querySelectorAll('.rv');
  var scrolled = false;

  function check() {
    var vh = window.innerHeight;
    Array.prototype.forEach.call(els, function (el) {
      if (!el.classList.contains('on') && el.getBoundingClientRect().top < vh * 0.88) {
        el.classList.add('on');
      }
    });
  }

  window.addEventListener('scroll', function () { scrolled = true; check(); }, { passive: true });
  window.addEventListener('load', check);

  var t = setInterval(function () {
    check();
    if (!document.querySelector('.rv:not(.on)')) clearInterval(t);
  }, 700);

  /* フェイルセーフ: スクロールイベントが一度も飛んでこない環境（埋め込みビューア・
     アプリ内ブラウザ）では上の保険も閾値を跨げないので、5秒待って演出をあきらめる。
     見えないより地味なほうがましなので、常に表示側へ倒す。 */
  setTimeout(function () {
    if (!scrolled && window.scrollY === 0) {
      Array.prototype.forEach.call(els, function (el) { el.classList.add('on'); });
    }
  }, 5000);

  check();
});
