<template>
  <div class="index">
    <mv />
    <contents />
  </div>
</template>

<script>
// @ is an alias to /src
import mv from "@/components/index_mv.vue";
import contents from "@/components/index_contents.vue";

export default {
  name: "index",
  components: {
    mv,
    contents
  }
};
</script>
