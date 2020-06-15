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
          <router-link
            :to="{
              name: 'detail',
              params: {
                id: name
              }
            }"
          >
            <img :src="thumbImg[index]" :alt="game.title" />
          </router-link>
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
              <a
                :href="game.booth"
                target="_blank"
                v-on:click="
                  $ga.event('TOPページ：購入ボタン', 'click', game.title)
                "
              >
                購入する
              </a>
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
      thumbImg: []
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
$light-gray: #ddd;
$superlight-gray: #eee;

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
    border-radius: 6px;
    background-color: #fff;
    transition: background-color 0.2s;
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
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.2s;
    }
    @include tab() {
      &:hover {
        background-color: $superlight-gray;
        img {
          width: 110%;
          top: 55%;
          transform: translate(-50%, -55%);
        }
      }
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
    font-size: 15px;
    line-height: 1.3;
    margin-top: 15px;
    @include tab() {
      line-height: 1.4;
    }
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
      > a {
        display: block;
        width: 100%;
        height: 100%;
        color: #fff;
      }
    }
    &--soldout {
      background-color: #fff;
      color: $ttl-gray;
      cursor: default;
      border: 1px solid $ttl-gray;
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
      @include sp() {
        background-color: $light-gray;
      }
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
