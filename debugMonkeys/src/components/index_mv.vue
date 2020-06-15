<template>
  <section class="mv">
    <div class="mv__inner">
      <h2 class="mv__inner-ttl">Debug Monkeys</h2>
      <p class="mav__inner-lead">新作ゲーム販売中！</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "mv",
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.mv {
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: flex-end;
  margin: 13px 0;
  &__inner {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &-ttl {
      font-size: 38px;
      display: block;
    }
    &-lead {
      font-size: 28px;
      display: block;
    }
  }
}
</style>
