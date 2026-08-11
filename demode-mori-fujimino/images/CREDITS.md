# 画像・映像の出典

このサイトの素材は画像8枚と映像1本。**うち2枚は demode MORI '67 さんご自身のInstagram投稿の実写、
残り6枚と映像1本は Higgsfield で生成したイメージ**です。Unsplash等のフリー素材は使っていません。

イメージ素材には、サイト本体の各素材の近くに「※画像はイメージです」「※背景の映像はイメージです」と
明記し、フッターにも実写でない旨とAI生成である旨を書いています。ご契約いただけましたら、
実際のお料理・店内を撮影して差し替えます。

## 店ご自身の写真（実写・2枚）

| ファイル | 使用箇所 | 内容 | 出典 |
|---|---|---|---|
| `01-hero-gaikan.jpg` | ヒーロー | 赤い庇の店名サインと入口、店頭の黒板 | 店Instagram [@demodemori67](https://www.instagram.com/demodemori67/) 2026-05-20投稿 |
| `04-unagi-salad.jpg` | About | 鰻のサラダ | 店Instagram [@demodemori67](https://www.instagram.com/demodemori67/) 2025-06-23投稿（#鰻のサラダ） |

店ご自身のアカウントの投稿のみを使用。人の顔が写るもの、客が被写体のもの、日付入りの告知
グラフィックは使っていません（2026-02-14の投稿は店主の顔が写るため不採用）。
フッターに `photos from @demodemori67` と出典を明記しています。

## Higgsfield で生成したイメージ（画像6枚・映像1本）

### 生成の条件（2026-08-12）

- 画像: Higgsfield の `nano_banana_pro`（2K・1枚2クレジット）
- 実費: 合計61クレジット（画像は作り直し込みで8回生成＝16クレジット、映像45クレジット）
- 映像: Higgsfield の `seedance_2_0`（1080p・5秒・音声なし・45クレジット）。
  上の提灯の画像を参照入力にして生成し、**前半＋逆再生を繋いで10秒の往復ループ**に加工した
  （継ぎ目で絵が飛ばないようにするため）。`ffmpeg` で 16:9 に切り出し、H.264 CRF30 で 約600KB。

### 権利

Higgsfield の Terms of Use Agreement に、出力物について次の記載がある
（[higgsfield.ai/terms-of-use-agreement](https://higgsfield.ai/terms-of-use-agreement) 2026-08-12確認）。

> "Company does not claim ownership of any of your Inputs or Outputs, nor does it restrict your commercial use of Outputs."
>
> "Your rights in Outputs you have generated and exported survive cancellation of your subscription or deletion or termination of your Account"
>
> "you may transfer or sublicense your rights in Outputs to your clients or other third parties."

つまり **商用利用の制限なし・サブスク解約後も権利は残る・クライアントへ権利を移せる**。
デモのまま本番サイトに移行しても、あとから「使えない素材」にはならない。

### 生成時の指定（AIっぽさと物理的破綻を防ぐため）

すべてのプロンプトに次を入れている。**この6枚と同種の素材を作るときはここから流用する。**

- **文字を一切出さない。** 「no text / no lettering / no kanji / no signage / no labels / no logos」。
  AI画像が一目でバレる最大の原因は、看板やラベルの崩れた文字。提灯も「paper completely blank with
  no writing on it」と指定して、崩れた漢字が出る余地を消した。
- **人物と手を出さない。** 「no people / no hands / no faces」。指の破綻を根から断つのと、
  Unsplashのときと同じ理由（被写体のパブリシティ権）で人を写さない方針を維持するため。
- **実写の撮影条件で書く。** 「50mm f/2.2 / 室内のタングステン光のみ / mild film grain /
  no food-styling gloss / 少し中心を外した構図」。広告写真の光沢を出さないことがいちばん効く。
- **物理を名指しする。** 液面は「physically correct flat liquid surface」、麺は「separate individual
  strands rather than a fused mass」、提灯は「correct hanging physics with the cords vertical」、
  映像は「each swinging as a rigid pendulum from its cord」。
- **生活の痕跡を入れる。** カウンターの傷、こぼれた米粒、グラスの水の輪。整いすぎた画がいちばん嘘臭い。

### 一覧

| ファイル | 使用箇所 | 内容 |
|---|---|---|
| `02-asia-plate.jpg` | 17:30の章 | アジアの一皿（ご飯・鶏・きゅうり・チリソース） |
| `05-beer.jpg` | 「夜」の章 | カウンターのビール |
| `07-ramen.jpg` | 深夜の章 | 醤油ラーメンの丼 |
| `06-lanterns.mp4` | パララックスバンド（背景・自動再生ループ） | 灯りの入った赤い提灯の列（提灯だけが揺れる） |
| `06-lanterns-poster.jpg` | 同上のポスター画像（再生前に出る静止画） | 映像の1コマ目 |
| `06-lanterns.jpg` | 同上のフォールバック背景 | 映像が再生されない環境用の静止画 |
| `03-spice-soup.jpg` | お品書き | スパイスの効いた汁物 |
| `08-rice-bowl.jpg` | お品書き | ごはんと香の物 |

画像はすべて長辺1600px・3:2（枠が 417×290px と 340×230px でどちらも約3:2のため）。

## 生成物の検査で実際に直したこと（2026-08-12）

**全点を原寸で開き、怪しい箇所は等倍に切り出して確認した。** 見つけた破綻は次の3件で、すべて修正済み。

1. **箸置きが2個に複製され、片方は何も乗せずに浮いていた**（`02-asia-plate` と `08-rice-bowl` の
   初回生成、同じ破綻が2枚同時に出た）→ プロンプトから箸置きを消し「箸は台の上に直接置く／
   箸置きは画面のどこにも無い」と指定して再生成。**小物を増やすほど複製の破綻が出る。**
2. **`08-rice-bowl` の左端に、頼んでいない人物の背中が写り込んでいた**（暗くて一見分からないが、
   明るさを上げると人と分かる）→ 左端を落とすトリミングで除去。
   **「no people」と書いても入ることがあるので、暗部は必ず持ち上げて確認する。**
3. **`06-lanterns` の遠景に、遠近が破綻した提灯の一群があった**（遠いほうが手前より大きい）
   → 手前側だけを切り出して除去。

**破綻ではないが判断したこと**: `03-spice-soup` の背景が広いテーブル席の店内で、この店の
「カウンターのある店」という記述と噛み合わなかったため、丼に寄せて背景を削った。
背景の瓶のラベル類は全点、等倍でも判読不能なぼけであることを確認済み（崩れた文字が読めると
一発でAIだと分かるため）。

## 差し替え手順

ご契約後は、提携のカメラマンと撮影に伺い、生成した6枚を実際のお料理・店内の写真に差し替えます。
差し替え時は `index.html` の該当 `<img>` の `src` を新しいファイル名に変え、その直後の
`<figcaption>※画像はイメージです</figcaption>` を削除し、フッターの
「そのほかのお料理・お酒・提灯の画像と背景の映像は、AIで生成した〜」の一文も削除してください。
バンドの映像を使わない場合は `<video class="dm-band-video">` の行を消せば、
`06-lanterns.jpg` の静止画（パララックス）に戻ります。
`style.css?v=N` / `script.js?v=N` の N を1つ上げるのを忘れずに。
