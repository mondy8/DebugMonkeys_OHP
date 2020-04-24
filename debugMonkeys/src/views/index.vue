<template>
  <div class="index">
    <contents />
  </div>
</template>

<script>
import Vue from 'vue'
import VueHead from 'vue-head'

// @ is an alias to /src
import mv from "@/components/index_mv.vue";
import contents from "@/components/index_contents.vue";

Vue.use(VueHead)

export default {
  name: "index",
  components: {
    contents
  },
  head: {
    title() {
      return {
        inner: 'デバッグモンキーズ公式サイト',
        separator: '|',
        complement: 'ボードゲーム販売中！',
      }
    },
    meta() {
      return [
        { name: 'title', content: 'デバッグモンキーズ公式サイト' },
        { name: 'description', content: 'デバッグモンキーズは東京・静岡・福岡で活動しているボードゲーム制作団体です。ボードゲームを作っては、猿のようにデバッグをし続ける団体です。ここでは作ったゲームやデバッグ方法など、ゲームについて様々に発信していきます。' },
        { name: "keywords", content: "デバッグモンキーズ,デバモン,ボードゲーム"},
        { name: 'og:title', content: 'デバッグモンキーズ公式サイト | ボードゲーム販売中！'},
        { name: 'og:description', content: 'デバッグモンキーズは東京・静岡・福岡で活動しているボードゲーム制作団体です。ボードゲームを作っては、猿のようにデバッグをし続ける団体です。ここでは作ったゲームやデバッグ方法など、ゲームについて様々に発信していきます。' }
      ]
    },
  },
};
</script>
