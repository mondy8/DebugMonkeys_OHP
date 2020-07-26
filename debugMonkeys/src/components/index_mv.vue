<template>
  <section class="mv">
    <div class="mv__inner">
      <!-- <h2 class="mv__inner-ttl">Debug Monkeys</h2>
      <p class="mav__inner-lead">新作ゲーム販売中！</p>-->
      <slick ref="slick" :options="slickOptions">
        <a href="http://placehold.it/700x100">
          <img src="http://placehold.it/700x100" alt />
        </a>
        <a href="http://placehold.it/700x100">
          <img src="http://placehold.it/700x100" alt />
        </a>
        <a href="http://placehold.it/700x100">
          <img src="http://placehold.it/700x100" alt />
        </a>
      </slick>
    </div>
  </section>
</template>

<script>
import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";
export default {
  name: "mv",
  components: {
    Slick
  },
  data() {
    return {
      slickOptions: {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2
            }
          }
        ]
      }
    };
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    }
  }
};
</script>

<style scoped lang="scss">
.mv {
  margin-top: 130px;
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
