<template>
  <div id="app">
    <headerArea></headerArea>
      <transition mode="out-in">
        <router-view/>
      </transition>
    <footerArea></footerArea>
  </div>
</template>

<script>
import Vue from 'vue'
import VueHead from 'vue-head'

import "normalize.css";
import headerArea from "@/components/headerArea";
import footerArea from "@/components/footerArea";

Vue.use(VueHead)

export default {
  name: "App",
  components: {
    headerArea,
    footerArea
  },
  head: {
    meta() {
      return [{ name: 'application-name', content: 'vue-router-project' }]
    },
  },
};
</script>

<style lang="scss">
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
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+JP");
#app {
  font-family: "Noto Sans Japanese", sans-serif, "Avenir", Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0.4px;
  font-weight: 300;
}
.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
</style>
