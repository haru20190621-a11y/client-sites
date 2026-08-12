# 掲載写真のクレジット（齋藤硝子工業有限会社・デモサイト）

このサイトに掲載している写真は**すべて Unsplash の無料素材**です。
**齋藤硝子工業有限会社が実際に手がけた工事の写真ではありません。**
サイト上でも、各写真の近くに「※画像はイメージです」と明記しています。

ライセンス: [Unsplash License](https://unsplash.com/license)（商用利用可・改変可・帰属表示は不要）。
帰属表示は義務ではありませんが、APIガイドラインの推奨に従い、フッターに撮影者と Unsplash へのリンクを1行入れています。

| ファイル | 使用箇所 | 撮影者 | 写真ページ | ライセンス |
|---|---|---|---|---|
| 09-hero-glassfacade.jpg | ヒーロー（ガラス張りの建物） | Michael (@polygonglider) | https://unsplash.com/photos/a-building-that-has-a-lot-of-windows-on-it-48yI_ZyzuLo | Unsplash License |
| 01-engawa.jpg | 導入（ガラス戸と光） | Marek Okon (@marekokon) | https://unsplash.com/photos/a-long-hallway-with-a-painting-on-the-wall-8VT1rJqRysI | Unsplash License |
| 02-glass-door.jpg | 「ガラスの工事」スプリット | Declan Sun (@declansun) | https://unsplash.com/photos/an-empty-room-with-a-sliding-glass-door-QmiR1c9azJY | Unsplash License |
| 10-roof.jpg | 「防水の工事」スプリット | Kuyune (@kuyuneth2543) | https://unsplash.com/photos/a-cloudy-sky-is-seen-over-a-rooftop-2O-sFuodoLU | Unsplash License |
| 04-joint.jpg | 「継ぎ目をふさぐ」スプリット | Jor Eg (@jor0e) | https://unsplash.com/photos/a-close-up-of-a-white-tiled-wall-Qzib41bLy7Y | Unsplash License |
| 06-band-drops.jpg | 帯（ガラスの水滴） | Elimende Inagella (@elimendeinagella) | https://unsplash.com/photos/water-droplets-on-glass-panel-WwzL3vxMBKk | Unsplash License |
| 07-building.jpg | 会社概要の添え写真 | Wiktor Karkocha (@rotkif) | https://unsplash.com/photos/white-concrete-building-at-daytime-Dt3y3dQR6Qk | Unsplash License |

## 実写への差し替え手順（ご契約後）

1. 御社で撮影した写真（または提携写真家が撮影した写真）を、同じファイル名で `images/` に置き換える。
2. `index.html` の各写真のラベル（`.hero-note` / `.band-note` / `figcaption.ph-note`）を削除する。
3. フッターの `.img-note`（無料素材の注記）と `.credit`（撮影者クレジット）を削除する。
4. `style.css?v=N` の N を1つ上げる（GitHub Pages のキャッシュ対策）。

## 選定で落とした写真（次回のチェック項目）

- `-pKMN0dfRM8`（キャプション「gray roof sheets with water」＝屋上防水シートのつもりで取得）— 原寸で見たところ、**灰色の平面に木が2本立つ空撮**で、屋上にはまったく見えなかった。キャプションだけで選ぶと外す典型例（はるき造園 2026-08-07 の教訓の再現）。
- ガラスのカーテンウォールの超高層ビル（複数）— ふじみ野の会社の仕事としては**規模が大げさ**。ヒーローには、階数の分からない中規模のガラス面（空の映り込みが主役）を選んだ。
- `AuTZAjMj6Lg`（雨のガラス越しの緑）と `rh_6iWC575A`（外壁の見切り）— 批評ループ1周目で「防水の話に屋根も防水面も写っていない」「altと中身が違う」と指摘され、屋上の写真に差し替えて不採用にした。**未使用の写真をフォルダに残さない**（差し替え時に取り違える）。
- 人物が写る写真・レンガ壁の海外感が強い写真は最初から除外。
