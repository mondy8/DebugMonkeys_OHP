<template>
  <section class="contents">
    <ul class="contents__detail">
      <li
        class="contents__detail-list"
        v-for="(game, name, index) in game"
        :key="index"
        :id="'gamelist-' + index"
      >
        <span class="contents__detail-list--new" v-if="game.new">NEW!</span>
        <div class="contents__detail-img">
          <img :src="thumbImg[index]" :alt="game.title" />
        </div>
        <div class="contents__detail-inner">
          <div class="contents__detail-ttl">{{ game.title }}</div>
          <div class="contents__detail-lead">{{ game.lead }}</div>
          <ul class="contents__detail-btn">
            <li
              v-if="game.soldout"
              class="contents__detail-btn--buy contents__detail-btn--soldout"
            >
              完売
            </li>
            <li v-else class="contents__detail-btn--buy">
              <a :href="game.booth" target="_blank">購入する</a>
            </li>
            <li class="contents__detail-btn--info">
              <router-link
                :to="{
                  name: 'detail',
                  params: {
                    id: name
                  }
                }"
              >
                詳細を見る
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import game from "@/data/game.json";
export default {
  name: "contents",
  data() {
    return {
      game: game,
      thumbImg: [],
      gameold: [
        {
          type: "nabedaikan",
          title: "鍋代官",
          imgpath: require("@/assets/img/img_index_nabedaikan.jpg"),
          lead:
            "このゲームは、リアル鍋を使って鍋の具材をよそい合う忖度ゲームです。誰よりも上手に、誰よりも美味しく、鍋の具材をよそい合いましょう！",
          booth: "https://debug-monkeys.booth.pm/items/1949653",
          detail: "https://note.com/debug_monkeys/n/n83cdba1dd238",
          new: true
        },
        {
          type: "street",
          title: "STREET PICKPOCKETs 7",
          imgpath: require("@/assets/img/img_index_street.png"),
          lead:
            "不均一に存在する数字のカードを奪い合い、自分の場に役を揃えて点を稼ごう！短時間で終わる奪い合いの不規則ポーカーゲーム。",
          booth: "https://debug-monkeys.booth.pm/items/1704097",
          detail: "https://note.com/debug_monkeys/n/nbd0eed705dde"
        },
        {
          type: "zombie",
          title: "ゾンビパニックとライフルおじさん",
          imgpath: require("@/assets/img/img_index_zombie.png"),
          lead:
            "世界はゾンビウイルスに汚染された。プレイヤーたちの中にはゾンビが一人混ざっている。人間サイドはゾンビを倒せ！ゾンビは、ゲーム終了時まで生き延びろ！",
          booth: "https://debug-monkeys.booth.pm/items/1704053",
          detail: "https://note.com/debug_monkeys/n/nbde025dfbc80"
        },
        {
          type: "banana",
          title: "Bana-na",
          imgpath: require("@/assets/img/img_index_banana.jpg"),
          lead:
            "かわいいサルのバナナ争奪戦！かんたんでも奥深い、戦略+運のパーティゲームです。どの木にならぶか？いつ木をゆらすか？かんたんなルールで奥深い戦略性。",
          booth: "https://debug-monkeys.booth.pm/items/1704086",
          detail: "https://note.com/debug_monkeys/n/n041ffe013d18"
        },
        {
          type: "osumo",
          title: "OSUMO",
          imgpath: require("@/assets/img/img_index_osumo.jpg"),
          lead:
            "相撲をモチーフにした新感覚アブストラクト&アクションゲーム。頭と手先の器用さを武器に相手を土俵を番外に弾き出しましょう。",
          booth: "https://debug-monkeys.booth.pm/items/1704415",
          detail: "https://note.com/debug_monkeys/n/n7969a35d5d96"
        },
        {
          type: "qubism",
          title: "Qubism",
          imgpath: require("@/assets/img/img_index_qubism.jpg"),
          lead:
            "矢印の向きに動かせる壁、キューブを配置し、相手より先に反対側にたどり着いたプレイヤーが勝利するアブストラクトゲーム。シンプルながら頭を使います。",
          booth: "https://debug-monkeys.booth.pm/items/1119557",
          detail: "https://note.com/debug_monkeys/n/n499641b3c869"
        },
        {
          type: "wacryll",
          title: "Wacryll",
          imgpath: require("@/assets/img/img_index_wacryll.jpg"),
          lead:
            "相手のコマやゲームボードを使って飛び越えて、相手より先に反対側を目指そう。全てアクリル素材で出来たアブストラクトゲーム。",
          booth: "https://debug-monkeys.booth.pm/items/1119594",
          detail: "https://note.com/debug_monkeys/n/n6010e8c4738e",
          soldout: true
        }
      ]
    };
  },
  created() {
    for (const key in game) {
      this.thumbImg.push(this.InputImagePath(game[key].thumbnail));
    }
  },
  methods: {
    InputImagePath: function(path) {
      return require("@/assets/img/" + path);
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
.contents {
  margin-top: 70px;
}
.contents__detail {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  padding-top: 50px;
  margin: 0 auto;
  @include tab() {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @include pc() {
    margin-top: 70px;
    flex-direction: row;
    flex-wrap: wrap;
  }
  &-list {
    width: 100%;
    position: relative;
    @include tab() {
      width: 47%;
    }
    @include pc() {
      width: 30%;
    }
    &--new {
      position: absolute;
      top: -28px;
      color: red;
      font-size: 20px;
      font-weight: bold;
      z-index: 1;
    }
  }
  &-inner {
    padding: 20px 0 60px 0;
    @include pc() {
      padding: 0;
      padding-bottom: 60px;
    }
  }
  &-img {
    width: 100%;
    height: 60vw;
    overflow: hidden;
    position: relative;
    @include tab() {
      height: 28vw;
    }
    @include pc() {
      height: 17vw;
    }
    img {
      width: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &-ttl {
    display: block;
    font-weight: bold;
    font-size: 24px;
    line-height: 1.3;
    color: $ttl-gray;
    margin-top: 15px;
  }
  &-lead {
    display: block;
    color: $lead-gray;
    font-size: 13px;
    line-height: 1.4;
    margin-top: 15px;
  }
  &-btn {
    display: flex;
    flex-direction: row;
    font-size: 15px;
    line-height: 44px;
    justify-content: space-between;
    margin-top: 15px;
    &--buy {
      width: 48%;
      position: relative;
      background-color: $btn-gray;
      border-radius: 6px;
      text-align: center;
      font-weight: bold;
      cursor: pointer;
      overflow: hidden;
      opacity: 1;
      transition: opacity 0.2s;
      &:before {
        content: "";
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 44px;
        background-color: #fff;
        transform: translateX(-100%);
        opacity: 0.2;
        transition: transform 0.2s;
        pointer-events: none;
      }
      &:hover {
        &::before {
          transform: translateX(0%);
          @include sp() {
            transform: translateX(-101%);
          }
        }
      }
      a {
        display: block;
        width: 100%;
        height: 100%;
        color: #fff;
      }
    }
    &--soldout {
      background-color: $light-gray;
      color: $ttl-gray;
      cursor: default;
      &:before {
        content: none;
      }
    }
    &--info {
      width: 48%;
      position: relative;
      font-weight: bold;
      text-align: center;
      border-radius: 6px;
      cursor: pointer;
      overflow: hidden;
      opacity: 1;
      transition: all 0.2s;
      &:before {
        content: "";
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 44px;
        background-color: $btn-gray;
        transform: translateX(-101%);
        opacity: 0.3;
        transition: transform 0.2s;
        pointer-events: none;
      }
      &:hover {
        &::before {
          transform: translateX(0%);
          @include sp() {
            transform: translateX(-101%);
          }
        }
      }
      a {
        display: block;
        width: 100%;
        color: $btn-gray;
      }
    }
  }
}
</style>
