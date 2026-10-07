/* 町のお菓子屋さん カオハナ — デモ用スクリプト
   1) スクロール出現  2) ショーケースの切り替え  3) 写真の拡大表示  4) フォーム（デモでは送信しない） */

/* 1) スクロール出現（scroll判定＋setInterval保険＋5秒フェイルセーフ） */
(function(){
  var els=document.querySelectorAll('.reveal');
  if(!els.length)return;
  var scrolled=false;
  function check(){
    var vh=window.innerHeight;
    Array.prototype.forEach.call(els,function(el){
      if(!el.classList.contains('on')&&el.getBoundingClientRect().top<vh*0.88)el.classList.add('on');
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

/* 2) ショーケースのタブ（JSが無いときは全部の棚がそのまま縦に並ぶ） */
(function(){
  var tabs=document.querySelectorAll('.tab');
  if(!tabs.length)return;
  var panels=document.querySelectorAll('.panel');
  function select(id,focus){
    var found=false;
    Array.prototype.forEach.call(tabs,function(tb){
      var on=tb.getAttribute('aria-controls')===id;
      if(on)found=true;
      tb.setAttribute('aria-selected',on?'true':'false');
      tb.tabIndex=on?0:-1;
      if(on&&focus)tb.focus();
    });
    if(!found)return false;
    Array.prototype.forEach.call(panels,function(p){
      if(p.id===id){
        p.hidden=false;
        var list=p.querySelector('.case');
        if(list){list.classList.remove('is-anim');void list.offsetWidth;list.classList.add('is-anim');}
      }else{p.hidden=true;}
    });
    return true;
  }
  Array.prototype.forEach.call(tabs,function(tb,i){
    tb.addEventListener('click',function(){select(tb.getAttribute('aria-controls'));});
    tb.addEventListener('keydown',function(e){
      var k=e.key,n=null;
      if(k==='ArrowRight')n=(i+1)%tabs.length;
      if(k==='ArrowLeft')n=(i-1+tabs.length)%tabs.length;
      if(n!==null){e.preventDefault();select(tabs[n].getAttribute('aria-controls'),true);}
    });
  });
  Array.prototype.forEach.call(document.querySelectorAll('.case li'),function(li){
    var idx=Array.prototype.indexOf.call(li.parentNode.children,li);
    li.style.setProperty('--i',Math.min(idx,16));
  });
  function fromHash(){
    var id=(location.hash||'').replace('#','');
    if(id&&select(id)){
      var sc=document.getElementById('showcase');
      if(sc)sc.scrollIntoView();
      return true;
    }
    return false;
  }
  if(!fromHash())select(tabs[0].getAttribute('aria-controls'));
  window.addEventListener('hashchange',fromHash);
})();

/* 3) 写真の拡大表示（今のサイトの「クリックすると拡大」を引き継ぎ） */
(function(){
  var dlg=document.getElementById('lb');
  if(!dlg||typeof dlg.showModal!=='function')return;
  var img=dlg.querySelector('img'),cap=dlg.querySelector('.lb-cap');
  var group=[],pos=0;
  function show(i){
    pos=(i+group.length)%group.length;
    var a=group[pos];
    img.src=a.getAttribute('href');
    img.alt=a.getAttribute('data-title')||'';
    cap.textContent=a.getAttribute('data-title')||'';
  }
  document.addEventListener('click',function(e){
    var a=e.target.closest?e.target.closest('a.item'):null;
    if(!a)return;
    e.preventDefault();
    var list=a.closest('.case');
    group=Array.prototype.slice.call(list.querySelectorAll('a.item'));
    show(group.indexOf(a));
    dlg.showModal();
  });
  dlg.querySelector('.lb-close').addEventListener('click',function(){dlg.close();});
  dlg.querySelector('.lb-prev').addEventListener('click',function(){show(pos-1);});
  dlg.querySelector('.lb-next').addEventListener('click',function(){show(pos+1);});
  dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close();});
  dlg.addEventListener('keydown',function(e){
    if(e.key==='ArrowRight')show(pos+1);
    if(e.key==='ArrowLeft')show(pos-1);
  });
})();

/* 4) フォーム: デモでは送信せず、案内だけ出す
   （本番では今のサイトと同じ postmail.cgi につなぐ） */
(function(){
  Array.prototype.forEach.call(document.querySelectorAll('form[data-demo]'),function(f){
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var m=f.querySelector('.demo-msg');
      if(m){m.classList.add('on');m.setAttribute('tabindex','-1');m.focus();}
    });
  });
})();
