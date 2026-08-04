/* 情報主役型（info-first）第5世代の共通スクリプト。
   .js クラスはここで付ける（headのインラインで付けると、このファイルが落ちた瞬間に
   .js .rv{opacity:0} が効いたまま本文が全部消える）。
   palette の velocity.js による「下からふわっと」を CSS transition で再現する。 */
(function(){
  document.documentElement.className += ' js';
  var els = document.querySelectorAll('.rv');
  function check(){
    var vh = window.innerHeight;
    els.forEach(function(el){
      if(!el.classList.contains('on') && el.getBoundingClientRect().top < vh*0.92)
        el.classList.add('on');
    });
  }
  window.addEventListener('scroll', check, {passive:true});
  window.addEventListener('resize', check, {passive:true});
  window.addEventListener('load', check);
  var t = setInterval(function(){
    check();
    if(!document.querySelector('.rv:not(.on)')) clearInterval(t);
  }, 700);
  check();
})();
