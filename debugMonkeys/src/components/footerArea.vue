<template>
  <footer class="footer">
    <div class="footer__inner">
      <p class="footer__copyrights">&copy; 2020 DebugMonkeys</p>
      <a href="#" class="footer__btn-top" v-scroll-to="'#gamelist-1'">
        <img src="../assets/img/icon_footer_arrow.png" alt="↑">
      </a>
    </div>
  </footer>
</template>

<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

export default {
  name: "footer",
  data() {
    return {
    };
  }
};
</script>

<style scoped lang="scss">
$footer-grey: #3b4043;
$arrow-grey: #cdd6dd;
.footer {
  background-color: $footer-grey;
  &__inner {
    position: relative;
    width: 90%;
    margin: 0 auto;
    padding: 100px 0 30px;
  }
  &__copyrights {
    color: #fff;
    font-size: 12px;
  }
  &__btn-top {
    position: absolute;
    bottom: 20px;
    right: 0;
    padding: 12px;
    height: 44px;
    box-sizing: border-box;
    color: $arrow-grey;
    border: 2px solid $arrow-grey;
    transition: bottom ease 0.3s;
    &:hover {
      bottom: 30px;
    }
  }
}
</style>
