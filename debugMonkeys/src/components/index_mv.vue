<template>
  <section class="mv">
    <div class="mv__inner">
      <!-- <h2 class="mv__inner-ttl">Debug Monkeys</h2>
      <p class="mav__inner-lead">新作ゲーム販売中！</p>-->
      <carousel
        :autoplay="true"
        :loop="true"
        :perPage="1"
        :autoplayTimeout="3000"
        :paginationPosition="bottom"
        :paginationPadding="5"
        :centerMode="true"
        :paginationEnabled="true"
        :spacePadding="0"
        :indicators="true"
        :indicator-type="line"
      >
        <slide>
          <a 
            href="https://twitter.com/debug_monkeys"
            target="_blank"
            class="mv__inner-bnr"
          >
            <img src="../assets/img/bnr_gm2020.png" alt="ゲームマーケット2020秋 2020年11月14日（土）出展決定" />
          </a>
        </slide>
        <slide>
          <a 
            href="https://debug-monkeys.booth.pm/"
            target="_blank"
            class="mv__inner-bnr"
          >
            <img src="../assets/img/bnr_booth.png" alt="BOOTHにてデバッグモンキーズの作品販売中！！" />
          </a>
        </slide>
        <slide>
          <a 
            href="https://www.youtube.com/channel/UCqqyVlN8VP0gZ6KBqdhYH1A"
            target="_blank"
            class="mv__inner-bnr"
          >
            <img src="../assets/img/bnr_youtube.png" alt="毎週月曜日・木曜日22時頃よりYouTubeにてラジオ配信中！！" />
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
  margin-top: 70px;
  @include tab {
    margin-top: 100px;
  };
  &__inner {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    @include tab {
      width: 70%;
    };
    &-bnr {

     img {
      width: 100%;
    }
    }
  }
}
// .mv {
//   width: 100%;
//   height: 250px;
//   display: flex;
//   justify-content: flex-end;
//   margin: 13px 0;
//   &__inner {
//     width: 50%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     &-ttl {
//       font-size: 38px;
//       display: block;
//     }
//     &-lead {
//       font-size: 28px;
//       display: block;
//     }
//   }
// }
</style>
