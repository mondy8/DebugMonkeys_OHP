<template>
  <section class="contents">
    <h2>デバッグモンキーズとは？</h2>
    <div class="contents__introduce">
      <p>
        デバッグモンキーズは、ボードゲームを作っては猿のようにデバッグをし続けるボードゲーム制作団体です。メンバーは6人おり、東京・静岡・福岡で活動しています。
      </p>
    </div>
    <div
      class="contents__member"
      v-for="(about, name, index) in about"
      :key="index"
      :id="'memberBlock' + index"
    >
      <p class="contents__member-name">{{ about.name }}</p>
      <p v-if="about.job" class="contents__member-job">{{ about.job }}</p>
      <p v-if="about.favgenre" class="contents__member-favgenre">
        {{ about.favgenre }}
      </p>
      <p v-if="about.favgame" class="contents__member-favgame">
        {{ about.favgame }}
      </p>
      <p v-if="about.twitter" class="contents__member-twitter">
        <a :href="'https://twitter.com/' + about.twitter">
          @{{ about.twitter }}
        </a>
      </p>

      <p v-if="about.introduce" class="contents__member-introduce">
        {{ about.introduce }}
      </p>
    </div>
  </section>
</template>

<script>
import about from "@/data/about.json";
export default {
  name: "contents",
  data() {
    return {
      about: about
      // thumbImg: []
    };
  },
  created() {
    for (const key in about) {
      // this.thumbImg.push(this.InputImagePath(game[key].thumbnail));
    }
  },
  methods: {
    // InputImagePath: function(path) {
    //   return require("@/assets/img/" + path);
    // }
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
  background: #fff;
  position: relative;
  &__member {
    margin: 50px 0;
  }
}
</style>
