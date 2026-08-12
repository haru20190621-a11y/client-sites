/* 齋藤硝子工業有限会社 — スクロール出現（scrollイベント直接判定＋保険＋フェイルセーフ） */
(function () {
  'use strict';
  // .js の付与はここで行う。script.js が読めなかったときに本文が消えないようにするため。
  document.documentElement.className += ' js';

  var els = document.querySelectorAll('.reveal');
  var scrolled = false;

  function check() {
    var vh = window.innerHeight;
    Array.prototype.forEach.call(els, function (el) {
      if (!el.classList.contains('on') && el.getBoundingClientRect().top < vh * 0.9) {
        el.classList.add('on');
      }
    });
  }

  window.addEventListener('scroll', function () { scrolled = true; check(); }, { passive: true });
  window.addEventListener('load', check);
  window.addEventListener('resize', check, { passive: true });

  var t = setInterval(function () {
    check();
    if (!document.querySelector('.reveal:not(.on)')) clearInterval(t);
  }, 700);

  // フェイルセーフ: scroll イベントが一度も飛んでこない環境（埋め込みビューア・
  // アプリ内ブラウザ）では、閾値を跨げず本文が永久に読めなくなる。
  // 5秒待って観測できなければ演出を捨てて全部表示する。
  setTimeout(function () {
    if (!scrolled && window.scrollY === 0) {
      Array.prototype.forEach.call(els, function (el) { el.classList.add('on'); });
    }
  }, 5000);

  check();
})();
