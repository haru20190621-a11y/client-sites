(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ヒーロー背景の動画（再生できたらフェードイン、失敗したら写真クロスフェードのまま）
  var hero = document.querySelector('.hero');
  var heroVideo = document.querySelector('.hero-video');
  var bandVideo = document.querySelector('.band-video');
  if (reduceMotion) {
    if (heroVideo) heroVideo.remove();
    if (bandVideo) bandVideo.remove();
    heroVideo = null;
    bandVideo = null;
  }
  if (heroVideo) {
    heroVideo.addEventListener('playing', function () { hero.classList.add('video-on'); });
    heroVideo.addEventListener('error', function () { heroVideo.remove(); }, true);
    var hp = heroVideo.play();
    if (hp && hp.catch) hp.catch(function () {});
  }
  if (bandVideo) {
    bandVideo.addEventListener('error', function () { bandVideo.remove(); }, true);
    var bp = bandVideo.play();
    if (bp && bp.catch) bp.catch(function () {});
  }

  // ヒーロー写真のクロスフェード切り替え（動画が再生中の間は切り替えを止める）
  var slides = document.querySelectorAll('.hero-img');
  if (slides.length > 1 && !reduceMotion) {
    var idx = 0;
    setInterval(function () {
      if (hero && hero.classList.contains('video-on')) return;
      slides[idx].classList.remove('active');
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add('active');
    }, 5000);
  }

  // スクロールで現れるアニメーション
  // IntersectionObserverは環境により初期発火しないことがあるため、
  // getBoundingClientRectベースのスクロール判定で実装する
  var targets = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (reduceMotion) {
    targets.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  function check() {
    var limit = window.innerHeight * 0.88;
    targets = targets.filter(function (el) {
      if (el.getBoundingClientRect().top < limit) {
        el.classList.add('visible');
        return false;
      }
      return true;
    });
  }

  // rAFはタブ非表示時に止まりスクロール判定を取りこぼすため直接呼ぶ（要素数が少なく軽い）
  window.addEventListener('scroll', check, { passive: true });
  window.addEventListener('resize', check);
  check();

  // 保険: scrollイベントを発行しない環境（アプリ内ブラウザ等）でも確実に出現させる
  var guard = setInterval(function () {
    check();
    if (targets.length === 0) clearInterval(guard);
  }, 700);
})();
