<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__inner-logo">
        <img
          src="../assets/img/logo.svg"
          alt="Debug Monkeys"
          width="247"
          height="50"
        >
      </div>
      <div class="header__inner-navbutton"></div>
    </div>
    <ul class="header__nav-menu">
      <li class="header__nav-menu-inner" v-for="(item, index) in items" :key="index">
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
  position: relative;
  &__inner {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    &-logo {
    }
    &-navbutton {
      display: block;
      width: 20px;
      height: 20px;
      background-color: red;
    }
  }
  &__nav-menu {
    display: none;
    position: absolute;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
    background-color: #fff;
    box-shadow: 0px 3px 6px #00000029;
    &-inner {
      width: 80%;
      margin: 0 auto;
      padding: 15px;
      border-bottom: 1px solid #ccc;
      &:last-child {
        border: none;
      }
    }
    &--active {
      display: block;
    }
  }
}
</style>
