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
