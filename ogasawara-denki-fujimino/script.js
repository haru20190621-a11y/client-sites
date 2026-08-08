/* 有限会社小笠原電気工業 デモサイト / 2026-08-09 */
(function () {
  // .js の付与はここで行う（head のインラインでやると、このファイルが落ちた瞬間に本文が全部消える）
  document.documentElement.className += ' js';

  var els = document.querySelectorAll('.reveal');
  var scrolled = false;

  function check() {
    var vh = window.innerHeight;
    Array.prototype.forEach.call(els, function (el) {
      if (!el.classList.contains('on') && el.getBoundingClientRect().top < vh * 0.88) {
        el.classList.add('on');
      }
    });
  }

  var de = document.documentElement;
  function bar() {
    // ヒーローを抜けたらモバイルの固定電話バーを出す
    if (window.scrollY > 240) de.classList.add('scrolled');
    else de.classList.remove('scrolled');
  }

  window.addEventListener('scroll', function () { scrolled = true; check(); bar(); }, { passive: true });
  window.addEventListener('load', function () { check(); bar(); });

  var t = setInterval(function () {
    check();
    if (!document.querySelector('.reveal:not(.on)')) clearInterval(t);
  }, 700);

  // フェイルセーフ: scroll イベントが一度も飛んでこない環境（埋め込みビューア・
  // アプリ内ブラウザ等）では、上の setInterval も「閾値を跨ぐ」ことが前提なので効かず、
  // ファーストビューより下が opacity:0 のまま永久に読めなくなる。
  // 5秒待ってスクロールが観測できなければ、演出をあきらめて全部表示する。
  setTimeout(function () {
    if (!scrolled && window.scrollY === 0) {
      Array.prototype.forEach.call(els, function (el) { el.classList.add('on'); });
      de.classList.add('scrolled'); // スクロールが観測できない環境では電話バーを出す
    }
  }, 5000);

  check();
  bar();
})();
