(function () {
  // .js の付与は script.js の先頭で行う（head のインラインでやると、
  // script.js が落ちた瞬間に .reveal が opacity:0 のまま本文が全部消える）
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

  // 固定電話バーは、ヒーローを過ぎてから出す。
  // 縦の短い端末（iPhone 12〜14 等・高さ748〜891px）では、初回表示のときバーが
  // 見出しの2行目に重なって「夜9時まで」が読めなくなる。
  var hero = document.querySelector('.hero');
  function bar() {
    var y = hero ? hero.getBoundingClientRect().bottom : 0;
    document.body.classList.toggle('showbar', y < 40);
  }

  window.addEventListener('scroll', function () { scrolled = true; check(); bar(); }, { passive: true });
  window.addEventListener('resize', bar, { passive: true });
  window.addEventListener('load', function () { check(); bar(); });

  var t = setInterval(function () {
    check();
    if (!document.querySelector('.reveal:not(.on)')) clearInterval(t);
  }, 700);

  // フェイルセーフ: scroll イベントが一度も飛んでこない環境（埋め込みビューア・
  // アプリ内ブラウザ）では、上の setInterval も「閾値を跨ぐ」ことが前提なので効かず、
  // ファーストビューより下が opacity:0 のまま永久に読めなくなる。
  // 5秒待ってスクロールが観測できなければ、演出をあきらめて全部表示する。
  setTimeout(function () {
    if (!scrolled && window.scrollY === 0) {
      Array.prototype.forEach.call(els, function (el) { el.classList.add('on'); });
    }
  }, 5000);

  check();
  bar();
})();
