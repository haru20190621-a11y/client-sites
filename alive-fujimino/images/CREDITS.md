# 画像の出典

**このページの写真7枚は、すべて [Unsplash](https://unsplash.com/) のライセンスフリー写真です。
アライヴふじみ野様の事業所やご利用者様を撮影したものではありません。**

サイト本体でも各写真の近くに「※画像はイメージです」と明記し、フッターにもその旨を書いています。
ご契約いただけましたら、実際のお写真に差し替えます。

## ライセンス

[Unsplash License](https://unsplash.com/license) — 商用利用可・改変可・**帰属表示は不要**。
渡した後もそのまま使い続けられるため、契約後に「使えない写真」になることはありません。

下の一覧は記録として残しているものです（Unsplash の API ガイドラインが撮影者と Unsplash への
リンクを推奨しているため、サイトのフッターにも一行載せています）。

## 選定の基準

- **顔が判別できる人物が写った写真は使わない。** Unsplash License は著作権を許諾するだけで、
  被写体のパブリシティ権までは処理していないため。`06-te.jpg` は手だけで顔は写っていない。
  `05-machinami.jpg` には遠景に2人の通行人が写っているが、俯瞰でごく小さく個人は判別できない。
- **商標・ロゴが写り込んだ写真は使わない。** 当初 `05-machinami.jpg` に選んでいた住宅街の写真
  （`photo-1767520045928-35b61ccd2e8b`）には Times のコインパーキング看板とコカ・コーラの自販機、
  飲食店の看板が写っていたため、俯瞰の住宅街の写真に差し替えた。
- 日本の訪問介護事業所のサイトなので、**日本の住まいの写真だけ**を選ぶ。
- 同じ写真をサイト内で使い回さない（このサイトにマーキー帯は無く、7枚すべて別の場所で1回ずつ使っている）。
- 撮影者の表示名は Unsplash 上で確認できたユーザー名のみを記録している（本名は未確認のため書かない）。

## 一覧

| ファイル | 使用箇所 | 内容 | 撮影者 | 写真ページ |
|---|---|---|---|---|
| `07-washitsu.jpg` | ヒーロー（背景・Ken Burns） | 庭に面した明るい和室 | [@yosuke_ota](https://unsplash.com/@yosuke_ota) | https://unsplash.com/photos/sqH6pOCVAf4 |
| `06-te.jpg` | お手伝いできること 01（体のこと） | 重ねられた高齢の手（顔なし） | [@liliantruong2603](https://unsplash.com/@liliantruong2603) | https://unsplash.com/photos/P1AGAowPnXc |
| `03-ocha.jpg` | お手伝いできること 02（暮らしのこと） | 木の手すりに置かれた湯呑み2つ | [@xiaowuuuuuuu](https://unsplash.com/@xiaowuuuuuuu) | https://unsplash.com/photos/STLZpvkqaMY |
| `02-yoru-akari.jpg` | 時間の帯（8:30〜24:00） | 夜の家からもれる灯り | [@ninjason](https://unsplash.com/@ninjason) | https://unsplash.com/photos/6UHULYaSIfs |
| `09-kiroku.jpg` | はたらく人のこと | 紙に書き込む手元（顔なし） | [@zachccamp](https://unsplash.com/@zachccamp) | https://unsplash.com/photos/S4YNfBXYLVM |
| `08-ima.jpg` | わたしたちの考え | 日の差す和室の座卓と座布団 | [@alan_j](https://unsplash.com/@alan_j) | https://unsplash.com/photos/cw0tdPDC7B4 |
| `05-machinami.jpg` | お伺いする地域 | 日本の住宅街（俯瞰） | [@luxkstn](https://unsplash.com/@luxkstn) | https://unsplash.com/photos/hUmR1NxTOBw |

**差し替えた写真の記録（批評ループ 2周目）**

- 当初ヒーローに使っていた `08-ima.jpg`（照明を落とした和室）は「夜の空き家に見える」との指摘で、
  明るい `07-washitsu.jpg` と入れ替え、暗幕も .84 → .74 に薄めた。
- 「はたらく人のこと」に置いていた `04-asa-curtain.jpg`（朝日の差すカーテン）は、見出しと被写体が
  噛み合っていないとの指摘で `09-kiroku.jpg`（記録を書く手元）に差し替え、**未使用になったので削除した**。
- 全点、長辺1600px・quality 78 に書き出し直した（合計 約1.3MB）。

## 差し替えの手順

1. 事業所で撮影したお写真（事務所の外観・内観、スタッフ、車両など）をいただく。
   **ご利用者様が写るお写真は使わない。**
2. `images/` の同名ファイルを置き換える（縦横比は 4:3 で切り出すと崩れない。ヒーローは横長）。
3. `index.html` の `.img-note`（「※画像はイメージです」）と、フッターの `.demo-note` の
   写真に関する一文を削除する。
4. `style.css` と `script.js` の `?v=N` を1つ上げる。
