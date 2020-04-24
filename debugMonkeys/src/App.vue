<template>
  <div id="app">
    <headerArea></headerArea>
    <router-view/>
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

<style>
#app {
  font-family: "源ノ角ゴシック","Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
