<template>
  <article>
    <!-- <p>{{ article.title }}</p> -->
    <div class="contents">
      <div class="contents__wrap">
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
        <div class="contents__articleArea">
          <section
            class="contents__articleArea-section"
            v-for="(article, index) in game.article"
            :key="index"
          >
            <div class="contents__articleArea-video" v-if="article.videopath">
              <iframe
                class="contents__articleArea-video-inner"
                :src="article.videopath"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="contents__articleArea-img" v-if="img[index]">
              <img :src="img[index]" :alt="article.title" />
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
import game from "@/data/game.json";
export default {
  name: "detail_contents",
  data() {
    return {
      game: game,
      img: [],
      id: ""
    };
  },
  created() {
    this.updateItems();
  },
  methods: {
    updateItems: function() {
      this.id = this.$route.params.id;
      this.game = game[this.id];
      for (const index of this.game.article) {
        if (index.imgpath) {
          this.img.push(this.InputImagePath(index.imgpath));
        } else {
          this.img.push(undefined);
        }
      }
    },
    InputImagePath: function(path) {
      return require("@/assets/img/detail/" + path);
    }
  },
  watch: {
    $route() {
      this.updateItems();
    }
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
p {
  margin: 0;
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
  margin: 60px auto 60px;
  padding: 0;
  @include tab() {
    width: 70%;
    min-width: 664px;
  }
  &-section {
    margin-top: 20px;
    @include tab() {
      margin-top: 40px;
    }
    &:first-child {
      margin-top: 0;
    }
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
  &-img {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 59vw;
    @include tab() {
      height: 40vw;
    }
    img {
      width: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &-txt {
    line-height: 1.5;
    margin-top: 1em;
  }
}
</style>
