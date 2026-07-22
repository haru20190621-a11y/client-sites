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


/* --- ホールケーキ予約フォーム（2026-07-12追加） --- */
(function(){
  // ▼ 設定（季節替え・接続先はここだけ編集する）
  var ENDPOINT = 'https://script.google.com/macros/s/AKfycbzTBmfqGX92Z6sq5mjT51kjsNwQsPnfJuLw5yKH-xCXhhEzktfV0xDQxy16o21t3u8s/exec';  // 通知の受け口（GASウェブアプリ・2026-07-13デプロイ）
  var FRUIT = { label: 'フルーツ（いまの季節の生デコレーション）', options: ['桃', 'メロン'] }; // 季節で変わったらここを書き換え
  var CLOSED_DAYS = [1, 2];              // 定休日: 月(1)・火(2)
  var LEAD_BUSINESS_DAYS = 3;            // 3営業日前まで
  var HOURS = { 0: ['11:00','16:00'] };  // 日曜 11:00-16:00
  [3,4,5,6].forEach(function(d){ HOURS[d] = ['12:00','18:00']; }); // 水〜土 12:00-18:00

  var form = document.getElementById('reserveForm');
  if (!form) return;
  var dateIn = document.getElementById('rfDate');
  var timeSel = document.getElementById('rfTime');
  var fruitWrap = document.getElementById('rfFruitWrap');
  var fruitBox = document.getElementById('rfFruit');
  var fruitLabel = document.getElementById('rfFruitLabel');
  var errBox = document.getElementById('rfError');
  var submitBtn = document.getElementById('rfSubmit');
  var doneBox = document.getElementById('reserveDone');

  // フルーツ選択肢を設定から生成
  fruitLabel.innerHTML = FRUIT.label + ' <em>必須</em>';
  FRUIT.options.forEach(function(f){
    var l = document.createElement('label');
    l.innerHTML = '<input type="radio" name="fruit" value="' + f + '"><span>' + f + '</span>';
    fruitBox.appendChild(l);
  });

  // 3営業日先（定休日を数えない）を最短受け取り日に
  function fmt(d){
    return d.getFullYear() + '-' + ('0'+(d.getMonth()+1)).slice(-2) + '-' + ('0'+d.getDate()).slice(-2);
  }
  var min = new Date(); var counted = 0;
  while (counted < LEAD_BUSINESS_DAYS) {
    min.setDate(min.getDate() + 1);
    if (CLOSED_DAYS.indexOf(min.getDay()) === -1) counted++;
  }
  dateIn.min = fmt(min);

  // 日付を選んだら、その曜日の受け取り時間帯を30分刻みで生成
  function buildSlots(){
    var v = dateIn.value;
    timeSel.innerHTML = '';
    if (!v) {
      timeSel.disabled = true;
      timeSel.appendChild(new Option('お受け取り日を選択してください',''));
      return;
    }
    var day = new Date(v + 'T00:00:00').getDay();
    if (CLOSED_DAYS.indexOf(day) !== -1) {
      dateIn.value = '';
      timeSel.disabled = true;
      timeSel.appendChild(new Option('お受け取り日を選択してください',''));
      showError('月曜・火曜は定休日のため、お受け取り日に選べません。別の日をお選びください。');
      return;
    }
    if (v < dateIn.min) {
      dateIn.value = '';
      timeSel.disabled = true;
      timeSel.appendChild(new Option('お受け取り日を選択してください',''));
      showError('ご予約は3営業日前までにお願いしています。' + dateIn.min.replace(/-/g,'/') + ' 以降の日をお選びください。');
      return;
    }
    clearError();
    var span = HOURS[day];
    timeSel.disabled = false;
    timeSel.appendChild(new Option('時間を選択','') );
    var t = span[0].split(':'), end = span[1];
    var h = +t[0], m = +t[1];
    while (true) {
      var s = ('0'+h).slice(-2) + ':' + ('0'+m).slice(-2);
      timeSel.appendChild(new Option(s, s));
      if (s === end) break;
      m += 30; if (m >= 60) { m = 0; h++; }
    }
  }
  dateIn.addEventListener('change', buildSlots);

  // 生デコレーションの時だけフルーツ選択を出す
  form.addEventListener('change', function(e){
    if (e.target.name === 'kind') {
      var isNama = form.kind.value === '生デコレーションケーキ';
      fruitWrap.hidden = !isNama;
      var radios = fruitBox.querySelectorAll('input');
      radios.forEach(function(r){ r.required = isNama; if (!isNama) r.checked = false; });
    }
  });

  function showError(msg){ errBox.textContent = msg; errBox.hidden = false; }
  function clearError(){ errBox.hidden = true; }

  form.addEventListener('submit', function(ev){
    ev.preventDefault();
    clearError();
    var d = {
      name: form.name.value.trim(),
      tel: form.tel.value.trim(),
      date: form.date.value,
      time: form.time.value,
      kind: (form.kind.value || ''),
      fruit: (form.fruit && form.fruit.value) || '',
      size: (form.size.value || ''),
      plate: form.plate.value.trim()
    };
    if (!d.name) return showError('お名前をご入力ください。');
    if (!/^[0-9０-９\-ー（）() ]{10,}$/.test(d.tel)) return showError('お電話番号をご確認ください（ハイフンなしでも大丈夫です）。');
    if (!d.date) return showError('お受け取り希望日をお選びください。');
    if (!d.time) return showError('お受け取り時間をお選びください。');
    if (!d.kind) return showError('ケーキの種類をお選びください。');
    if (d.kind === '生デコレーションケーキ' && !d.fruit) return showError('フルーツ（桃・メロン）をお選びください。');
    if (!d.size) return showError('サイズをお選びください。');
    if (!ENDPOINT) return showError('ただいまフォームの準備中です。お手数ですがInstagramのDMからご予約ください。');

    submitBtn.disabled = true;
    submitBtn.textContent = '送信しています…';
    fetch(ENDPOINT, { method: 'POST', mode: 'no-cors', body: new URLSearchParams(d) })
      .then(function(){
        form.hidden = true;
        doneBox.hidden = false;
        doneBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      })
      .catch(function(){
        submitBtn.disabled = false;
        submitBtn.textContent = 'この内容で申し込む';
        showError('送信に失敗しました。お手数ですが、時間をおいて再度お試しいただくか、InstagramのDMからご予約ください。');
      });
  });
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
