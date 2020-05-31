<template>
  <article>
    <div
      class="contents"
      v-for="(game, index) in game"
      :key="index"
    >
      <div
        class="contents__wrap"
        v-if="$route.params.id === game.type"
      >
        <dl class="contents__infoArea">
          <dt>ゲームデザイン</dt>
          <dd>{{ game.gamedesign }}</dd>
          <dt>グラフィックデザイン</dt>
          <dd>{{ game.graphicdesign }}</dd>
          <dt>プレイ人数</dt>
          <dd>{{ game.player }}</dd>
          <dt>プレイ時間</dt>
          <dd>{{ game.time }}</dd>
          <dt>対象年齢</dt>
          <dd>{{ game.age }}</dd>
          <dt>サイズ</dt>
          <dd>{{ game.size }}</dd>
        </dl>
        <div
          class="contents__articleArea"
          v-if="$route.params.id === game.type"
        >
          <section
            class="contents__articleArea-section"
            v-for="(article, index) in game.article"
            :key="index"
          >
            <div
              class="contents__articleArea-video"
              v-if="article.videopath"
            >
              <iframe
                class="contents__articleArea-video-inner"
                :src="article.videopath"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
            </div>
            <div class="contents__articleArea-img" v-if="article.imgpath">
              <p>画像あり</p>
            </div>
            <h3 class="contents__articleArea-title" v-if="article.title">
              {{ article.title }}
            </h3>
            <p
              class="contents__articleArea-txt"
              v-for="(text, index) in article.text"
              :key="index"
            >
              {{ text }}
            </p>
          </section>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "detail_contents",
  data() {
    return {
      game: [
        {
          type: "zombie",
          title: "ゾンビパニックとライフルおじさん",
          booth: "https://debug-monkeys.booth.pm/items/1704053",
          gamedesign: "MONDY.W",
          graphicdesign: "あんらく",
          player: "2~3",
          time: "10分",
          age: "10歳以上",
          size: "カードゲーム箱",
          article: [
            {
              text: ["これはテストです。"]
            },
            {
              imgpath: true,
              text: ["実装できていますか"]
            }
          ]
        },
        {
          type: "street",
          title: "STREET PICKPOCKETS SEVEN",
          booth: "https://debug-monkeys.booth.pm/items/1704053",
          gamedesign: "Sunny",
          graphicdesign: "nishimura natsumi",
          player: "2~3",
          time: "10分",
          age: "10歳以上",
          size: "カードゲーム箱",
          article: [
            {
              text: [
                "不均一に存在する数字のカードを奪い合い、自分の場に役を揃えて点を稼ぐ不規則ポーカーゲーム"
              ]
            },
            {
              imgpath: true,
              videopath: "https://www.youtube.com/embed/OvEBhUVKTB8",
              title: "どんなゲーム？",
              text: [
                "このゲームでは、プレイヤーはカードを出しお互いに奪い合いながらカードの役を揃える不規則ポーカーゲームです。",
                "普通のポーカーでは、すべての数字が均一に存在していますが、このゲームでは不均一に存在しており、カードの数字の貴重さが変わっています。",
                "そのカードを集め、役の合計点数が一番高いプレイヤーが勝利します。"
              ]
            },
            {
              imgpath: true,
              title: "ここがポイント！",
              text: [
                "・短時間で繰り返し戦法を模索できるゲームシステム！奪い合いが許される世界の頂点を目指せ！",
                "・nishimura natsumiによる緻密で豪快なアートワーク！そしてそのアートを引き立てる背景のハッチング。色覚サポートの要素も。"
              ]
            },
            {
              imgpath: true,
              title: "あらすじ",
              text: [
                "あなたは、スリ師たちが行き交うこのまりの大通りで生きている。奪い、奪われながら、それでも自分の力で生き残り続けなければならない・・・！"
              ]
            },
            {
              imgpath: true,
              title: "ゲームの進め方",
              text: [
                "自分の手番で出来ることは、「補充」「スリ」のどちらかとなります。",
                "「補充」では、山札からカードを取り、その後、自分の場に1枚カードを出します。"
              ]
            },
            {
              imgpath: true,
              title: "ゲームの進め方",
              text: [
                "「スリ」は、任意の相手1人を選び、その相手の場にあるカードを選び、スリを宣言します。",
                "その後、自分と相手の2人は任意の枚数のカードを裏向きに出し合い、一斉に表西、数字の和を比べます。",
                "自分が数字比べで勝利したら、相手のカードとスリトークンを獲得します。",
                "スリトークンは獲得した枚数に応じて、最終得点計算時に加算されます。"
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
$btn-gray: #3c3c3c;
$lead-gray: #41494e;
$ttl-gray: #3b4043;
$light-gray: #cccccc;
$text-gray: #333333;
@mixin sp {
  @media (max-width: 768px) {
    @content;
  }
}
@mixin tab {
  @media (min-width: 769px) {
    @content;
  }
}
@mixin pc {
  @media (min-width: 1180px) {
    @content;
  }
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
li {
  list-style-type: none;
}
a {
  text-decoration: none;
}
.contents__wrap {
  margin-top: 70px;
  display: block;
  @include tab() {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
}
.contents__infoArea {
  width: 90%;
  color: $text-gray;
  margin: 0 auto;
  padding: 20px 0 0;
  @include tab() {
    width: 170px;
  }
  dt {
    font-weight: bold;
    margin-top: 20px;
    
    @include tab() {
      margin-top: 30px;
    }
  }
  dd {
    margin: 7px 0 0;
    @include tab() {
      margin: 10px 0 0;
    }
  }
}
.contents__articleArea {
  width: 90%;
  color: $text-gray;
  margin: 0 auto;
  padding: 20px 0 0;
  @include tab() {
    width: 70%;
    min-width: 664px;
  }
  &-title {
    margin-top: 20px;
    @include tab() {
      margin-top: 40px;
    }
  }
  &-video {
    text-align: center;
    &-inner {
      margin: 0 auto;
      width: 100%;
      height: 50vw;
      max-width: 560px;
      max-height: 315px;
      @include tab() {
        width: 100%;
        height: 315px;
      }
    }
  }
}

</style>
