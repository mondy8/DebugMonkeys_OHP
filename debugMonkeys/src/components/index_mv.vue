<template>
  <section class="mv">
    <h3 class="mv__ttl">DEBUG MONKEYS TOPIC</h3>
    <div class="mv__inner">
      <carousel
        :autoplay="true"
        :loop="true"
        :perPage="1"
        :autoplayTimeout="2500"
        :paginationPosition="bottom"
        :paginationPadding="5"
        :centerMode="true"
        :paginationEnabled="false"
        :spacePadding="0"
      >
        <slide v-for="item in mv" :key="item">
          <a
            href="https://twitter.com/debug_monkeys"
            target="_blank"
            class="mv__inner-bnr"
            :style="{ backgroundImage: 'url(' + item.img + ')' }"
            v-on:click="$ga.event('デバモントピック', 'click', game.title)"
          >
          </a>
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "mv",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      mv: [
        { img: "/img/top/mv01.jpg" },
        { img: "/img/top/mv02.jpg" },
        { img: "/img/top/mv03.jpg" },
        { img: "/img/top/mv04.jpg" }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
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

.mv {
  padding: 60px;
  background: #eeeeee;
  &__ttl {
    display: block;
    padding: 0;
    margin: 0;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    line-height: 1.3;
    color: #3b4043;
    @include tab {
      font-size: 30px;
      margin-bottom: 30px;
    }
  }
  &__inner {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    @include tab {
      width: 70%;
    }
    &-bnr {
      margin-top: 20px;
      display: inline-block;
      overflow: hidden;
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
      width: 100%;
      height: 50vw;
      @include tab {
        margin-top: 0;
        height: 300px;
      }
    }
  }
}
</style>
