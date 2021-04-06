<template>
  <article>
    <transition mode="out-in">
      <div class="wrap" :class="{ show: contentsShow }">
        <div class="mv" v-if="game.detailMv">
          <img
            :src="'/img/detail/' + game.detailMv"
            :alt="id"
            v-on:load="load"
          />
        </div>
        <div class="contents" id="contents">
          <div class="contents__inner">
            <div class="contents__articleArea">
              <h2 class="contents__articleArea-h2">{{ game.title }}</h2>
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
                  ></iframe>
                </div>
                <div
                  class="contents__articleArea-img"
                  v-if="img[index]"
                  :class="{ imgSmall: article.imgSmall }"
                >
                  <img
                    :src="img[index]"
                    :alt="article.title"
                    v-on:load="load"
                  />
                </div>
                <h3 class="contents__articleArea-title" v-if="article.title">
                  {{ article.title }}
                </h3>
                <h4
                  class="contents__articleArea-subTitle"
                  v-if="article.subTitle"
                >
                  {{ article.subTitle }}
                </h4>
                <p class="contents__articleArea-lead" v-if="article.leadCopy">
                  {{ article.leadCopy }}
                </p>
                <p
                  v-if="article.textBold"
                  class="contents__articleArea-txtBold"
                >
                  {{ article.textBold }}
                </p>
                <p
                  class="contents__articleArea-txt"
                  :class="{ textOnly: article.textOnly }"
                  v-for="(text, index) in article.text"
                  :key="index"
                >
                  {{ text }}
                </p>
              </section>
            </div>
            <div class="contents__infoArea">
              <div class="contents__infoArea-wrap">
                <div
                  v-if="game.nosale"
                  class="contents__infoArea-btn--buy contents__infoArea-btn--nosale"
                >
                  {{ game.nosale }}
                </div>
                <div
                  v-else-if="game.nosaleLink"
                  class="contents__infoArea-btn--buy"
                >
                  <a
                    :href="game.nosaleLink"
                    target="_blank"
                    v-on:click="
                      $ga.event('詳細ページ：ゾンパニ2020', 'click', game.title)
                    "
                  >
                    予約フォームへ
                  </a>
                </div>
                <div v-else class="contents__infoArea-btn--buy">
                  <a
                    :href="game.booth"
                    target="_blank"
                    v-on:click="
                      $ga.event('詳細ページ：購入ボタン', 'click', game.title)
                    "
                  >
                    販売ページへ
                  </a>
                </div>
                <dl class="contents__infoArea-dl">
                  <dt v-if="game.gamedesign">ゲームデザイン</dt>
                  <dd v-if="game.gamedesign">{{ game.gamedesign }}</dd>
                  <dt v-if="game.graphicdesign">アートワーク</dt>
                  <dd v-if="game.graphicdesign">{{ game.graphicdesign }}</dd>
                  <dt v-if="game.player">プレイ人数</dt>
                  <dd v-if="game.player">{{ game.player }}</dd>
                  <dt v-if="game.time">プレイ時間</dt>
                  <dd v-if="game.time">{{ game.time }}</dd>
                  <dt v-if="game.age">対象年齢</dt>
                  <dd v-if="game.age">{{ game.age }}</dd>
                  <dt v-if="game.size">サイズ（mm）</dt>
                  <dd v-if="game.size">{{ game.size }}</dd>
                  <dt v-if="game.year">制作年</dt>
                  <dd v-if="game.year">{{ game.year }}</dd>
                </dl>
                <div
                  v-if="game.istruction"
                  class="contents__infoArea-instruction"
                >
                  <a
                    :href="game.istruction"
                    target="_blank"
                    class="contents__link"
                    v-on:click="
                      $ga.event('説明書ダウンロード', 'click', game.title)
                    "
                  >
                    説明書を<br class="only-pc" />ダウンロード
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </article>
</template>

<script>
import game from "@/data/game.json";
export default {
  name: "detail_contents",
  data() {
    return {
      game: game,
      img: [],
      id: "",
      clientcontentsHeight: undefined,
      contentsShow: false,
      imgLoaded: false
    };
  },
  methods: {
    updateItems: function() {
      this.id = this.$route.params.id;
      this.game = game[this.id];
      this.img = [];
      for (const index of this.game.article) {
        if (index.imgpath) {
          this.img.push(this.InputImagePath(index.imgpath));
        } else {
          this.img.push(undefined);
        }
      }
      const imgLoadCallback = setInterval(() => {
        if (this.imgLoaded) {
          this.clientcontentsHeight = window.document.getElementById(
            "contents"
          ).clientHeight;
          clearInterval(imgLoadCallback);
          setTimeout(() => {
            this.contentsShow = true;
          }, 200);
        }
      }, 50);
    },
    InputImagePath: function(path) {
      return "/img/detail/" + path;
    },
    load: function() {
      this.imgLoaded = true;
    }
  },
  watch: {
    $route() {
      this.contentsShow = false;
      this.imgLoaded = false;

      setTimeout(() => {
        this.updateItems();
      }, 500);
    }
  },
  created() {
    this.updateItems();
  }
};
</script>

<style scoped lang="scss">
$btn-gray: #3c3c3c;
$lead-gray: #41494e;
$ttl-gray: #3b4043;
$light-gray: #cccccc;
$text-gray: #333333;
$light-gray: #ddd;
$pc-elementMarginTop: min(8vw, 80px);
$sp-elementMarginTop: min(13vw, 60px);

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
p {
  margin: 0;
}
.only-pc {
  display: none;
  @include tab() {
    display: block;
  }
}

.wrap {
  margin-top: 70px;
  opacity: 0;
  transition: opacity 0.5s;
  &.show {
    opacity: 1;
  }
}
.mv {
  position: relative;
  width: 100%;
  height: 144px;
  overflow: hidden;
  @include tab() {
    height: 300px;
  }
  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }
}
.contents {
  max-width: 1200px;
  margin: 0 auto;
  &__inner {
    display: flex;
    flex-direction: column;
    @include tab() {
      justify-content: space-between;
      flex-direction: row;
    }
  }
  &__link {
    text-decoration: underline;
    color: #333;
    transition: 0.2s ease;
    &:hover {
      opacity: 0.7;
    }
    &[target]:after {
      content: "";
      width: 25px;
      height: 25px;
      display: inline-block;
      background-image: url(/img/common/icon_external.png);
      background-size: cover;
      transform: translate(4px, 5px);
    }
  }
}
.contents__articleArea {
  width: 86%;
  color: $text-gray;
  margin: 50px auto 60px;
  padding: 0;
  @include tab() {
    width: 70%;
    min-width: 664px;
    margin: 60px auto 100px;
    padding: 0px 50px 0 20px;
    box-sizing: border-box;
  }
  &-section {
    &:first-child {
      margin-top: 0;
    }
  }
  &-h2 {
    margin: 0;
    font-size: 34px;
    @include tab() {
      font-size: 44px;
    }
  }
  &-lead {
    margin-top: min(7vw, 50px);
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5;
  }
  &-title {
    margin-top: $sp-elementMarginTop;
    font-size: 20px;
    @include tab() {
      margin-top: $pc-elementMarginTop;
    }
  }
  &-subTitle {
    margin-top: $sp-elementMarginTop;
    font-size: 17px;
    @include tab() {
      margin-top: $pc-elementMarginTop;
    }
  }
  &-video {
    margin-top: $sp-elementMarginTop;
    text-align: center;
    @include tab() {
      margin-top: $pc-elementMarginTop;
    }
    &-inner {
      margin: 0 auto;
      width: 100%;
      height: 52vw;
      @include tab() {
        width: 100%;
        height: 37vw;
        max-height: 550px;
      }
    }
  }
  &-img {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: auto;
    border-radius: 6px;
    margin: $sp-elementMarginTop auto 0;
    @include tab() {
      margin-top: $pc-elementMarginTop;
      max-height: 550px;
    }
    img {
      width: 100%;
      vertical-align: top;
    }
    & + p.contents__articleArea-txt {
      margin-top: 20px;
      @include tab() {
        margin-top: 40px;
      }
    }
    &.imgSmall {
      max-width: 760px;
      @include tab() {
      }
    }
  }
  &-txt {
    line-height: 1.4;
    margin-top: min(3vw, 20px);
    font-size: 15px;
    @include tab() {
      line-height: 1.5;
    }
    &.textOnly:first-of-type {
      margin-top: min(10vw, 40px);
      @include tab() {
        margin-top: min(6vw, 50px);
      }
    }
  }
  &-txtBold {
    line-height: 1.4;
    margin-top: min(5vw, 30px);
    font-size: 15px;
    font-weight: bold;
    + .contents__articleArea-txt {
      margin-top: min(1vw, 10px);
    }
  }
}
.contents__infoArea {
  width: 86%;
  min-width: 170px;
  color: $text-gray;
  margin: 30px auto 60px;
  @include tab() {
    width: 170px;
    padding-right: 30px;
  }
  &-wrap {
    position: sticky;
    top: 90px;
  }
  &-btn--buy {
    width: 100%;
    height: 60px;
    line-height: 60px;
    position: relative;
    background-color: $btn-gray;
    border-radius: 6px;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    overflow: hidden;
    opacity: 1;
    transition: opacity 0.2s;
    @include tab() {
      width: 170px;
      height: 44px;
      line-height: 44px;
    }
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
    > a {
      display: block;
      width: 100%;
      height: 100%;
      color: #fff;
    }
    &.contents__infoArea-btn--nosale {
      background-color: #fff;
      color: $ttl-gray;
      cursor: default;
      border: 1px solid $ttl-gray;
      &:before {
        content: none;
      }
    }
  }
  &-dl {
    margin-top: 35px;
    margin-bottom: 0;
  }
  &-instruction {
    font-weight: bold;
    margin-top: 20px;
    @include tab() {
      margin-top: 27px;
    }
  }
  dt {
    font-weight: bold;
    margin-top: 20px;
    font-size: 15px;
    display: inline-block;
    width: 50%;
    @include tab() {
      margin-top: 27px;
      display: block;
      width: 100%;
    }
    &:first-child {
      margin-top: 0;
    }
  }
  dd {
    margin: 5px 0 0;
    font-size: 15px;
    display: inline-block;
    width: 50%;
    @include tab() {
      margin: 5px 0 0;
      display: block;
      width: 100%;
    }
  }
}
</style>
