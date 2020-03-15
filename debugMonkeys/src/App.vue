<template>
  <div id="app">
    <headerArea></headerArea>
    <router-view/>
  </div>
</template>

<script>
import "normalize.css";
import headerArea from "@/components/headerArea";

export default {
  name: "App",
  components: {
    headerArea
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
