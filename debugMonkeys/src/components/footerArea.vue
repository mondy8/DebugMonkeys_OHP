<template>
  <footer class="footer">
    <div class="footer__inner">
      <ul class="footer__sns">
        <li class="footer__sns-list">
          <a href="https://twitter.com/debug_monkeys" class="footer__sns-list-twitter" target="_blank" v-on:click="$ga.event('フッター', 'click', 'Twitter')"><img src="../assets/img/icon_logo_twitter.png" alt="twitter"></a>
        </li>
        <li class="footer__sns-list">
          <a href="https://note.com/debug_monkeys" class="footer__sns-list-note" target="_blank" v-on:click="$ga.event('フッター', 'click', 'note')"><img src="../assets/img/icon_logo_note.png" alt="note"></a>
        </li>
        <li class="footer__sns-list">
          <a href="https://www.youtube.com/channel/UCqqyVlN8VP0gZ6KBqdhYH1A" class="footer__sns-list-youtube" target="_blank" v-on:click="$ga.event('フッター', 'click', 'youtube')"><img src="../assets/img/icon_logo_youtube.png" alt="youtube"></a>
        </li>
      </ul>
      <p class="footer__copyrights">&copy; 2020 DebugMonkeys</p>
      <a href="#" class="footer__btn-top" v-scroll-to="'#top'">
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
  &__sns {
    list-style-type: none;
    display: flex;
    align-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    &-list {
      display: inline-block;
      margin-left: 30px;
      a {
        display: block;
      }
      &:first-child {
        margin-left: 0;
      }
      &-twitter img {
        width: 33px;
      }
      &-note img {
        width: 88px;
      }
      &-youtube img {
        width: 100px;
      }
    }
  }
  &__copyrights {
    color: #fff;
    font-size: 12px;
    margin-top: 30px;
    padding: 0;
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
