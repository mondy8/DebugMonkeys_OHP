<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__inner-logo" v-on:click="isActive = false">
        <router-link to="/">
          <img src="../assets/img/logo.svg" alt="Debug Monkeys" />
        </router-link>
      </div>
      <div
        class="header__inner-navbutton"
        v-on:click="isActive = !isActive"
        :class="{ active: isActive }"
      >
        <span class="header__inner-navbutton-inner"></span>
      </div>
    </div>
    <ul class="header__nav-menu" :class="{ active: isActive }">
      <li
        class="header__nav-menu-inner"
        v-for="(game, name, index) in game"
        :key="index"
        v-on:click="isActive = !isActive"
      >
        <router-link :to="{ name: 'detail', params: { id: name } }">
          {{ game.title }}
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
import Vue from "vue";
import VueScrollTo from "vue-scrollto";
import game from "@/data/game.json";
Vue.use(VueScrollTo, {
  offset: -100
});
export default {
  name: "header",
  data() {
    return {
      game: game,
      isActive: false
    };
  }
};
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  z-index: 100;
  &__inner {
    position: relative;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;
    &-logo {
      a {
        display: block;
      }
      img {
        width: 170px;
      }
    }
    &-navbutton {
      display: block;
      width: 20px;
      height: 20px;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
      &.active {
        .header__inner-navbutton-inner {
          background-color: #fff;
        }
        .header__inner-navbutton-inner:before {
          transform: rotate(45deg);
          top: 0;
        }
        .header__inner-navbutton-inner:after {
          transform: rotate(-45deg);
          top: 0;
        }
      }
    }
    &-navbutton-inner {
      display: block;
      position: relative;
      width: 20px;
      height: 2px;
      top: 50%;
      transform: translateY(-50%);
      background-color: #98a6b5;
      &:before,
      &:after {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        background-color: #98a6b5;
        transition: all ease 0.2s;
      }
      &:before {
        top: -7px;
      }
      &:after {
        bottom: -7px;
      }
    }
  }
  &__nav-menu {
    position: absolute;
    width: 100%;
    top: 71px;
    margin: 0;
    padding: 0;
    list-style-type: none;
    background-color: #fff;
    box-shadow: 0px 3px 6px #00000029;
    &.active {
      display: block;
      .header__nav-menu-inner {
        height: 48px;
        border-bottom: 1px solid #ccc;
      }
    }
    &-inner {
      width: 83%;
      margin: 0 auto;
      overflow: hidden;
      height: 0;
      border-bottom: 0px solid #fff;
      box-sizing: border-box;
      transition: all ease 0.3s;
      &:last-child {
        border: none;
      }
      a {
        display: block;
        padding: 15px;
        background-color: #fff;
        color: #3b4043;
        text-decoration: none;
        transition: all ease 0.3s;
        &:hover {
          background-color: #eee;
        }
      }
    }
  }
}
</style>
