<template>
  <div>
    <h1>{{ title }}</h1>
    <h1><About></About></h1>
    <h1><SingleListVue></SingleListVue></h1>
  </div>
</template>

<script>
import About from "../AboutView.vue";
import SingleListVue from "./SingleList.vue";
export default {
  name: "AllList",
  components: { About, SingleListVue },
};
</script>

<style></style>
