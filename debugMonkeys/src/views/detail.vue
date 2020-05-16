<template>
  <div class="detail">
    <contents />
  </div>
</template>

<script>
import Vue from 'vue'
import VueHead from 'vue-head'

// @ is an alias to /src
import contents from "@/components/detail_contents.vue";

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
        { property: 'og:title', content: 'デバッグモンキーズ公式サイト | ボードゲーム販売中！'},
        { property: 'og:type', content: 'website'},
        { property: 'og:description', content: 'デバッグモンキーズは東京・静岡・福岡で活動しているボードゲーム制作団体です。ボードゲームを作っては、猿のようにデバッグをし続ける団体です。ここでは作ったゲームやデバッグ方法など、ゲームについて様々に発信していきます。' },
        { property: 'og:site_name', content: 'デバッグモンキーズ公式サイト'},
        { property: 'og:image', content: 'https://debugmonkeys.netlify.app/ogp.png'},
        { name: 'twitter:site', content: '@debug_monkeys'},
        { name: 'twitter:card', content: 'summary_large_image'}
      ]
    }
  }
};
</script>