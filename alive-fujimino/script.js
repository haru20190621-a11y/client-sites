(function(){
  // `js` クラスの付与は head 先頭のインラインで済ませてある（このファイルは defer なので、
  // ここで付けると本文が一瞬見えてから消える）。
  var els = document.querySelectorAll('.reveal, .rule, .band-in');
  var scrolled = false;

  function check(){
    var vh = window.innerHeight;
    Array.prototype.forEach.call(els, function(el){
      if(!el.classList.contains('on') && el.getBoundingClientRect().top < vh * 0.88){
        el.classList.add('on');
      }
    });
  }

  window.addEventListener('scroll', function(){ scrolled = true; check(); }, {passive:true});
  window.addEventListener('load', check);

  var t = setInterval(function(){
    check();
    if(!document.querySelector('.reveal:not(.on), .rule:not(.on)')) clearInterval(t);
  }, 700);

  // フェイルセーフ: スクロールイベントが飛んでこない環境（埋め込みビューア・
  // アプリ内ブラウザ等）では本文が opacity:0 のまま永久に読めなくなるので、
  // 5秒待って一度もスクロールが観測できなければ演出をあきらめて全部表示する。
  setTimeout(function(){
    if(!scrolled && window.scrollY === 0){
      Array.prototype.forEach.call(els, function(el){ el.classList.add('on'); });
    }
  }, 5000);

  check();
})();
