<template>
  <section class="contents">
    <ul class="contents__detail">
      <li class="contents__detail-list" v-for="(game, index) in game" :key=index :id="'gamelist-' + index">
        <div class="contents__detail-img"><img :src=game.imgpath :alt=game.title></div>
        <div class="contents__detail-inner">
          <div class="contents__detail-ttl">{{ game.title }}</div>
          <div class="contents__detail-lead">{{ game.lead }}</div>
          <ul class="contents__detail-btn">
            <li class="contents__detail-btn--buy"><a :href=game.booth target="_blank">購入する</a></li>
            <li class="contents__detail-btn--info"><a :href=game.booth target="_blank">詳細を見る</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  
  name: "contents",
  data() {
    return {
      game: [
        { 
        title: '鍋代官',
        imgpath: require('@/assets/img/img_index_nabedaikan.jpg'),
        lead: 'このゲームは、リアル鍋を使って鍋の具材をよそい合う忖度ゲームです。誰よりも上手に、誰よりも美味しく、鍋の具材をよそい合いましょう！',
        booth: 'https://booth.pm/ja/items/1704097' 
        },
        { 
        title: 'STREET PICKPOCKETs 7',
        imgpath: require('@/assets/img/img_index_street.jpg'),
        lead: '相手のカードを奪い合い、自分の場に役を揃えて点を稼ごう。短時間で終わる奪い合いの不規則ポーカーゲーム。（明日また考えます）',
        booth: 'https://booth.pm/ja/items/1704097' 
        },
        { 
        title: 'ゾンビパニックとライフルおじさん',
        imgpath: require('@/assets/img/img_index_zombie.jpg'),
        lead: '世界はゾンビウイルスに汚染された。プレイヤーたちの中にはゾンビが一人混ざっている。人間サイドはゾンビを倒せ！ゾンビは、ゲーム終了時まで生き延びろ！',
        booth: 'https://booth.pm/ja/items/1704053',
        detail: 'https://note.com/debug_monkeys/n/nbde025dfbc80'
        },
        { 
        title: 'Bana-na',
        imgpath: require('@/assets/img/img_index_banana.jpg'),
        lead: 'かわいいサルのバナナ争奪戦！かんたんでも奥深い、戦略+運のパーティゲームです。どの木にならぶか？いつ木をゆらすか？かんたんなルールで奥深い戦略性。',
        booth: 'https://booth.pm/ja/items/1704086' 
        },
        { 
        title: 'OSUMO',
        imgpath: require('@/assets/img/img_index_osumo.jpg'),
        lead: '相撲をモチーフにした新感覚アブストラクト&アクションゲーム。頭と手先の器用さを武器に相手を土俵を番外に弾き出しましょう。',
        booth: 'https://booth.pm/ja/items/1704415' 
        },
        { 
        title: 'Qubism',
        imgpath: require('@/assets/img/img_index_qubism.jpg'),
        lead: '矢印の向きに動かせる壁、キューブを配置し、相手より先に反対側にたどり着いたプレイヤーが勝利するアブストラクトゲーム。シンプルながら頭を使います。',
        booth: 'https://booth.pm/ja/items/1119557' 
        },
        { 
        title: 'Wacryll',
        imgpath: require('@/assets/img/img_index_wacryll.jpg'),
        lead: '相手のコマやゲームボードを使って飛び越えて、相手より先に反対側を目指そう。全てアクリル素材で出来たアブストラクトゲーム。',
        booth: 'https://booth.pm/ja/items/1119594' 
        }
      ]
    }
  }
};
</script>

<style scoped lang="scss">
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
.contents {
  margin-top: 70px;
}
.contents__detail {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  padding-top: 50px;
  margin: 0 auto ;
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
    @include tab() {
      width: 47%;
    }
    @include pc() {
      width: 30%;
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
    height: 56vw;
    overflow: hidden;
    @include tab() {
      height: 28vw;
    }
    @include pc() {
      height: 17vw;
    }
    img {
      width: 100%;
    }
  }
  &-ttl {
    display: block;
    font-weight: bold;
    font-size: 24px;
    line-height: 1.3;
    color: #3B4043;
    margin-top: 15px;
  }
  &-lead {
    display: block;
    color: #707F89;
    font-size: 12px;
    line-height: 1.3;
    margin-top: 15px;
  }
  &-btn {
    display: flex;
    flex-direction: row;
    font-size: 15px;
    line-height: 44px;
    justify-content: space-between;
    margin-top: 13px;
    &--buy {
      width: 48%;
      background-color: #3C3C3C;
      border-radius: 6px;
      text-align: center;
      font-weight: bold;
      cursor: pointer;
      opacity: 1;
      transition: opacity 0.2s;
      &:hover {
        opacity: 0.8;
      }
      a {
        display: block;
        width: 100%;
        height: 100%;
        color: #fff;
      }
    }
    &--info {
      width: 48%;
      font-weight: bold;
      text-align: center;
      border-radius: 6px;
      cursor: pointer;
      opacity: 1;
      transition: opacity 0.2s;
      &:hover {
        opacity: 0.8;
      }
      a {
        display: block;
        width: 100%;
        color: #3C3C3C;
      }
    }
  }
}
</style>
