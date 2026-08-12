# 掲載写真のクレジット（有限会社富田組・デモサイト）

このサイトに掲載している写真は**すべて Unsplash の無料素材**です。
**有限会社富田組が実際に手がけた工事の写真ではありません。**
サイト上でも、各写真の近くに「※画像はイメージです」と明記しています。

ライセンス: [Unsplash License](https://unsplash.com/license)（商用利用可・改変可・帰属表示は不要）。
帰属表示は義務ではありませんが、APIガイドラインの推奨に従い、フッターに撮影者と Unsplash へのリンクを1行入れています。

| ファイル | 使用箇所 | 撮影者 | 写真ページ | ライセンス |
|---|---|---|---|---|
| 01-hero-ashiba.jpg | ヒーロー背景（足場） | Hermann Wittekopf - kmkb (@von_muenchen) | https://unsplash.com/photos/a-very-tall-building-with-a-bunch-of-scaffolding-on-it-QUl8zu162yU | Unsplash License |
| 02-band-ashiba-mono.jpg | 帯（モノクロの足場） | Camillo Corsetti Antonini (@signorsmith) | https://unsplash.com/photos/a-black-and-white-photo-of-scaffolding-on-a-building-Nq7D85Hs4F0 | Unsplash License |
| 03-tekkotsu.jpg | 「承る仕事」の添え写真（鉄骨） | D R (@dkphotos22) | https://unsplash.com/photos/black-metal-canopy-frame-dSRhwPe6v9c | Unsplash License |
| 07-ashiba-texture.jpg | 「承る仕事」の添え写真（足場のテクスチャ） | Jack B (@nervum) | https://unsplash.com/photos/black-and-blue-abstract-illustration-S3SU988T13A | Unsplash License |

## 実写への差し替え手順（ご契約後）

1. 御社で撮影した写真（または提携写真家が撮影した写真）を、同じファイル名で `images/` に置き換える。
2. `index.html` の各写真の「※画像はイメージです」ラベル（`.ph-note` / `.hero-note` / `.band-note`）を削除する。
3. フッターの `.img-note`（無料素材の注記）と `.credit`（撮影者クレジット）を削除する。
4. `style.css?v=N` の N を1つ上げる（GitHub Pages のキャッシュ対策）。

## 選定で落とした写真（次回のチェック項目）

- `ernuBNilBas`「Texture of rusty metal pipes」— **錆びた鋼管**。足場を扱う会社に渡すサイトに錆びた材料を置くのは、はるき造園で松の枯れ芯を選んだのと同じ失敗になる。
- `eKY6_9W_iqY` / `csxp9zl8Ok0` — 大規模造成地とバックホウ数台。**ふじみ野の小さな会社の仕事としては規模が大げさ**（はるき造園で皇居外苑の写真を落としたのと同じ理由）。
- `gIuwiRLL0TU` / `y-IbPO2pLS0` — 作業員が大きく写る。人物は使わない。
- 超高層ビルを覆う大規模足場（`WN9QRESOu5c` ほか）— 同じく規模の誇張。
- `ANziECjFRoI`（仮囲いとカラーコーン）— **批評ループ2周目で不採用**。表示サイズでは分からないが、原寸で見ると仮囲いに**韓国語の駐停車禁止の掲示**が写っていた。日本の会社のサイトに置くと違和感が出る。**掲示物・看板は必ず原寸で文字を読むこと。**
