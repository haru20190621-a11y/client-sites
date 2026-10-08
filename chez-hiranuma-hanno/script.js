document.documentElement.classList.add('js');
window.__rv=1; /* head の保険（6秒後に全部表示）を止める合図 */

/* スクロール出現（quality-standard §3-2・フェイルセーフ付き） */
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
  setTimeout(function(){
    if(!scrolled&&window.scrollY===0)
      Array.prototype.forEach.call(els,function(el){el.classList.add('on');});
  },5000);
  check();
})();

/* 受け取りの日までの日数でケーキを絞り込む
   data-lead: 1=前日まで 3=3日前まで 5=5日前まで 7=7日前まで 0=記載なし（「7日後〜」でだけ表示） */
(function(){
  var btns=document.querySelectorAll('.finder-btns button');
  var cakes=document.querySelectorAll('.cakes .cake');
  var count=document.getElementById('cake-count');
  var empty=document.querySelector('.finder-empty');
  if(!btns.length||!cakes.length)return;
  function apply(days){
    var n=0;
    Array.prototype.forEach.call(cakes,function(c){
      var lead=parseInt(c.getAttribute('data-lead'),10)||0;
      var ok=days>=7?true:(lead>0&&lead<=days);
      c.hidden=!ok;
      if(ok){n++;c.classList.add('on');}
    });
    count.textContent=n;
    empty.hidden=n>0;
  }
  Array.prototype.forEach.call(btns,function(b){
    b.addEventListener('click',function(){
      Array.prototype.forEach.call(btns,function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});
      apply(parseInt(b.getAttribute('data-days'),10));
    });
  });
  apply(7);
})();

/* 1画面目の写真：7秒ごとにゆっくり切り替える。PREV/NEXT・点で選べる。動きを止める設定では自動で切り替えない */
(function(){
  var slides=document.querySelectorAll('.hs-slide');
  var dots=document.querySelectorAll('.hs-dot');
  if(slides.length<2)return;
  var cur=0,timer=null;
  var still=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function show(n){
    cur=(n+slides.length)%slides.length;
    Array.prototype.forEach.call(slides,function(s,k){s.classList.toggle('is-on',k===cur);});
    Array.prototype.forEach.call(dots,function(d,k){d.classList.toggle('is-on',k===cur);if(k===cur)d.setAttribute('aria-current','true');else d.removeAttribute('aria-current');});
  }
  function restart(){clearInterval(timer);if(!still)timer=setInterval(function(){show(cur+1);},7000);}
  var prev=document.querySelector('.hs-prev'),next=document.querySelector('.hs-next');
  if(prev)prev.addEventListener('click',function(){show(cur-1);restart();});
  if(next)next.addEventListener('click',function(){show(cur+1);restart();});
  Array.prototype.forEach.call(dots,function(d,k){d.addEventListener('click',function(){show(k);restart();});});
  restart();
})();
