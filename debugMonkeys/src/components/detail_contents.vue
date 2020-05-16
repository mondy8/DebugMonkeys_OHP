<template>
  <article class="contents">
    <div class="contents__infoArea" v-for="(game, index) in game" :key=index>
      <div class="contents__infoArea-inner" v-if="$route.params.id === game.type">
      <p>{{ game.title }}</p>
      <p>{{ game.booth }}</p>
      <p>{{ game.gamedesign }}</p>
      <p>{{ game.graphicdesign }}</p>
      </div>
    </div>
    <div class="contents__articleArea" v-for="(game, index) in game" :key=index>
      <div class="contents__articleArea-inner" v-if="$route.params.id === game.type">
        <div class="contents__txtBlock" v-for="(article, index) in game.article" :key=index>
          <div class="img" v-if=article.imgpath>
            <p>画像あり</p>
          </div>
          <p>{{ article.text }}</p>
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
          age: "10歳以上",
          size: "カードゲーム箱",
          article: [
            {
              text: "これはテストです。"
            },
            {
              imgpath: true,
              text: "実装できていますか"
            }
          ]
        },
        {
          type: "street",
          title: "ストリートピックポケッツ7",
          booth: "https://debug-monkeys.booth.pm/items/1704053",
          gamedesign: "Sunny",
          graphicdesign: " ",
          player: "2~3",
          age: "10歳以上",
          size: "カードゲーム箱",
          article: [
            {
              text: "すとりーと"
            },
            {
              imgpath: true,
              text: "ぴいくぽ"
            }
          ]
        }
      ]
    }
  }
};
</script>

<style scoped lang="scss">
$btn-gray: #3c3c3c;
$lead-gray: #41494e;
$ttl-gray: #3b4043;
$light-gray: #cccccc;
@mixin sp {
  @media (max-width: 768px) { @content; }
}
@mixin tab {
  @media (min-width: 769px) { @content; }
}
@mixin pc {
  @media (min-width: 1180px) { @content; }
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
</style>
