// スクロール出現（quality-standard §3-2 のレシピそのまま。フェイルセーフ付き）
(function(){
  var els=document.querySelectorAll('.reveal');
  var scrolled=false;
  function check(){
    var vh=window.innerHeight;
    Array.prototype.forEach.call(els,function(el){
      if(!el.classList.contains('on')&&el.getBoundingClientRect().top<vh*0.88)
        el.classList.add('on');
    });
  }
  window.addEventListener('scroll',function(){scrolled=true;check();},{passive:true});
  window.addEventListener('load',check);
  var t=setInterval(function(){
    check();
    if(!document.querySelector('.reveal:not(.on)'))clearInterval(t);
  },700);
  // スクロールが一度も届かない環境（埋め込みビューア等）では、5秒後に全部表示する
  setTimeout(function(){
    if(!scrolled&&window.scrollY===0)
      Array.prototype.forEach.call(els,function(el){el.classList.add('on');});
  },5000);
  check();
})();

// ヒーローの写真の切り替え（6秒ごと・前後の矢印・下の点）
(function(){
  var slides=document.querySelectorAll('.hs');
  var dots=document.querySelectorAll('.hero-dots button');
  if(slides.length<2)return;
  var cur=0,timer=null;
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function go(n){
    cur=(n+slides.length)%slides.length;
    Array.prototype.forEach.call(slides,function(s,i){s.classList.toggle('is-active',i===cur);});
    Array.prototype.forEach.call(dots,function(d,i){d.classList.toggle('is-active',i===cur);});
  }
  function start(){if(reduce)return;stop();timer=setInterval(function(){go(cur+1);},6000);}
  function stop(){if(timer){clearInterval(timer);timer=null;}}
  var prev=document.querySelector('.hero-prev'),next=document.querySelector('.hero-next');
  if(prev)prev.addEventListener('click',function(){go(cur-1);start();});
  if(next)next.addEventListener('click',function(){go(cur+1);start();});
  Array.prototype.forEach.call(dots,function(d,i){d.addEventListener('click',function(){go(i);start();});});
  start();
})();
