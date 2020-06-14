<template>
  <div class="detail" id="top">
    <contents />
  </div>
</template>

<script>
import Vue from "vue";
import VueHead from "vue-head";
import game from "@/data/game.json";

import contents from "@/components/detail_contents.vue";

Vue.use(VueHead);

export default {
  name: "index",
  components: {
    contents
  },
  created() {
    this.gameId = this.$route.params.id;
    this.game = game[this.gameId];
  },
  head: {
    title() {
      return {
        inner: `${this.game.title}`,
        separator: "|",
        complement: "デバッグモンキーズ公式サイト"
      };
    },
    meta() {
      return [
        { name: "title", content: `${this.game.title}｜デバッグモンキーズ公式サイト` },
        {
          name: "description",
          content:
            `ボードゲーム「${this.game.title}」の紹介ページです。デバッグモンキーズは東京・静岡・福岡で活動しているボードゲーム制作団体です。ボードゲームを作っては、猿のようにデバッグをし続ける団体です。ここでは作ったゲームやデバッグ方法など、ゲームについてさまざまな発信を行います。`
        },
        {
          name: "keywords",
          content: `${this.game.title},デバッグモンキーズ,デバモン,ボードゲーム`
        },
        {
          property: "og:title",
          content: `${this.game.title}｜デバッグモンキーズ公式サイト`
        },
        { property: "og:type", content: "website" },
        {
          property: "og:description",
          content:
            `ボードゲーム「${this.game.title}」の紹介ページです。デバッグモンキーズは東京・静岡・福岡で活動しているボードゲーム制作団体です。ボードゲームを作っては、猿のようにデバッグをし続ける団体です。ここでは作ったゲームやデバッグ方法など、ゲームについてさまざまな発信を行います。`
        },
        {
          property: "og:site_name",
          content: "デバッグモンキーズ公式サイト"
        },
        {
          property: "og:image",
          content: `https://debugmonkeys.netlify.app/ogp_${this.gameId}.png`
        },
        { name: "twitter:site", content: "@debug_monkeys" },
        { name: "twitter:card", content: "summary_large_image" }
      ];
    }
  }
};
</script>
