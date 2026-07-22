(function(){
  var els=document.querySelectorAll('.reveal');
  function check(){
    var vh=window.innerHeight;
    els.forEach(function(el){
      if(!el.classList.contains('on')&&el.getBoundingClientRect().top<vh*0.88)
        el.classList.add('on');
    });
  }
  window.addEventListener('scroll',check,{passive:true});
  window.addEventListener('load',check);
  var t=setInterval(function(){
    check();
    if(!document.querySelector('.reveal:not(.on)'))clearInterval(t);
  },700);
  check();
})();

// ヒーロー背景の動画（再生できたらフェードイン、失敗したら写真スライドのまま）
(function(){
  var hero=document.querySelector('.hero'),v=document.querySelector('.hero-video');
  if(!v)return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){v.remove();return;}
  v.addEventListener('playing',function(){hero.classList.add('video-on');});
  v.addEventListener('error',function(){hero.classList.remove('video-on');v.remove();},true);
  var p=v.play();if(p&&p.catch)p.catch(function(){});
})();
