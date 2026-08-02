/* 情報主役型（info-first）の共通スクリプト。
   .js クラスはここで付ける。headのインラインscriptで付けると、
   このファイルが404やエラーになった瞬間に .js .reveal{opacity:0} が効いたまま
   本文が全部消える（2026-08-02 批評指摘）。 */
(function(){
  document.documentElement.className += ' js';
  var els = document.querySelectorAll('.reveal');
  function check(){
    var vh = window.innerHeight;
    els.forEach(function(el){
      if(!el.classList.contains('on') && el.getBoundingClientRect().top < vh*0.9)
        el.classList.add('on');
    });
  }
  window.addEventListener('scroll', check, {passive:true});
  window.addEventListener('load', check);
  var t = setInterval(function(){
    check();
    if(!document.querySelector('.reveal:not(.on)')) clearInterval(t);
  }, 700);
  check();
})();
