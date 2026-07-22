(function () {
  var rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var targets = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (rm) { targets.forEach(function (el) { el.classList.add('visible'); }); return; }

  function check() {
    var limit = window.innerHeight * 0.9;
    targets = targets.filter(function (el) {
      if (el.getBoundingClientRect().top < limit) { el.classList.add('visible'); return false; }
      return true;
    });
  }
  window.addEventListener('scroll', check, { passive: true });
  window.addEventListener('resize', check);
  check();
  var guard = setInterval(function () { check(); if (targets.length === 0) clearInterval(guard); }, 700);
})();

/* ヒーロー写真のクロスフェード（5秒ごと・reduced-motion時は先頭写真で固定） */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var phs = document.querySelectorAll('.hero-ph');
  if (phs.length < 2) return;
  var i = 0;
  setInterval(function () {
    phs[i].classList.remove('on');
    i = (i + 1) % phs.length;
    phs[i].classList.add('on');
  }, 5000);
})();

// ヒーロー背景の動画（再生できたらフェードイン、失敗したら写真クロスフェードのまま）
(function(){
  var hero=document.querySelector('.hero'),v=document.querySelector('.hero-video');
  if(!v)return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){v.remove();return;}
  v.addEventListener('playing',function(){hero.classList.add('video-on');});
  v.addEventListener('error',function(){hero.classList.remove('video-on');v.remove();},true);
  var p=v.play();if(p&&p.catch)p.catch(function(){});
})();
