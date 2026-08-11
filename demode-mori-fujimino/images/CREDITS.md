# 画像の出典

このサイトの画像は8枚。**うち2枚は demode MORI '67 さんご自身のInstagram投稿の実写、6枚は
[Unsplash](https://unsplash.com/) のライセンスフリー写真（イメージ）**です。

イメージ写真には、サイト本体の各写真の近くに「※画像はイメージです」と明記し、フッターにも
その旨を書いています。ご契約いただけましたら、実際のお料理・店内を撮影して差し替えます。

## 店ご自身の写真（実写・2枚）

| ファイル | 使用箇所 | 内容 | 出典 |
|---|---|---|---|
| `01-hero-gaikan.jpg` | ヒーロー | 赤い庇の店名サインと入口、店頭の黒板 | 店Instagram [@demodemori67](https://www.instagram.com/demodemori67/) 2026-05-20投稿 |
| `04-unagi-salad.jpg` | About | 鰻のサラダ | 店Instagram [@demodemori67](https://www.instagram.com/demodemori67/) 2025-06-23投稿（#鰻のサラダ） |

店ご自身のアカウントの投稿のみを使用。人の顔が写るもの、客が被写体のもの、日付入りの告知
グラフィックは使っていません（2026-02-14の投稿は店主の顔が写るため不採用）。
フッターに `photos from @demodemori67` と出典を明記しています。

## Unsplash のイメージ写真（6枚）

### ライセンス

[Unsplash License](https://unsplash.com/license) — 商用利用可・改変可・**帰属表示は不要**。
渡した後もそのまま使い続けられるため、契約後に「使えない写真」になることはありません。
下の一覧は記録として残しているものです（Unsplash の API ガイドラインが撮影者と Unsplash への
リンクを推奨しているため、サイトのフッターにも一行載せています）。

### 選定の基準

- **顔が判別できる人物が写った写真は使わない。** Unsplash License は著作権を許諾するだけで、
  被写体のパブリシティ権までは処理していないため。候補にあった居酒屋カウンターの写真は
  いずれも客が写り込んでいたので不採用にした。
- 商標・ロゴが写り込んだ写真は使わない（"BEER SERVED ICE COLD" の看板写真は不採用）。
- **実在の特定商品名と紐付けない。** スープカレー・カオマンガイはクチコミで名前の挙がる料理だが、
  イメージ写真に品名のキャプションは付けず、区分（サラダ／いっぴん／ごはんもの／お酒）と
  時刻の章にだけ割り当てている。
- 日本の店なので、欧米の店内が明らかに分かる写真は避ける。
- **他店の店構えが写った写真は使わない。** バンドに入れていた夜の街の写真（`yVcozQqJkbM`）は、
  拡大すると実在の別店舗（熱海プリン）の看板と隣店のラーメンの看板、窓のポスターの人物が判読でき、
  ふじみ野の店のサイトでその界隈と誤読される。批評2周目の指摘で赤い提灯の写真に差し替えた。
- 同じ写真をサイト内で使い回さない（8枚すべて別の場所で1回ずつ）。

### 一覧

| ファイル | 使用箇所 | 内容 | 撮影者 | 写真ページ |
|---|---|---|---|---|
| `02-asia-plate.jpg` | 17:30の章 | アジアの一皿（ご飯・目玉焼き・鶏） | P S | https://unsplash.com/photos/mjd_PGf-slk |
| `05-beer.jpg` | 「夜」の章 | カウンターのビール | Bohdan Stocek | https://unsplash.com/photos/iBoQPGoUx8Q |
| `07-ramen.jpg` | 深夜の章 | ラーメンの丼 | Hailey Tong | https://unsplash.com/photos/KRYuPwvyEys |
| `06-lanterns.jpg` | パララックスバンド | 灯りの入った赤い提灯の列 | Lauza Loistl | https://unsplash.com/photos/iP9vf3vwfRs |
| `03-spice-soup.jpg` | お品書き | スパイスの効いた汁物 | You Le | https://unsplash.com/photos/JTTxGQaFZKw |
| `08-rice-bowl.jpg` | お品書き | ごはんの一皿 | Alexandra Tran | https://unsplash.com/photos/FVGzf1H5Oyw |

### 差し替え手順

ご契約後は、提携のカメラマンと撮影に伺い、上の6枚を実際のお料理・店内の写真に差し替えます。
差し替え時は `index.html` の該当 `<img>` の `src` を新しいファイル名に変え、その直後の
`<figcaption>※画像はイメージです</figcaption>` を削除し、フッターの
「一部の画像は無料素材（Unsplash）のイメージ写真です。〜」の一文も削除してください。
`style.css?v=N` / `script.js?v=N` の N を1つ上げるのを忘れずに。
