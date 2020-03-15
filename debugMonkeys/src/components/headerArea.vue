<template>
  <header>
    <div class="header__logo">
      <img
        src="../assets/img/logo.svg"
        alt="Debug Monkeys"
        width="247"
        height="50"
      >
    </div>
    <div class="header__nav-button"></div>
    <ul class="header__nav-menu">
      <li v-for="(item, index) in items" :key="index">
        <router-link v-bind:to="item.path">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      items: [
        { title: "top", path: "/" },
        { title: "profile", path: "/profile" },
        { title: "skills", path: "/skills" },
        { title: "outputs", path: "/outputs" }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.header {
  &__logo {
    float: left;
    padding: 10px;
  }
  &__nav-menu {
    position: absolute;
    top: 70px;
  }
}
</style>
