<template>
  <div>
    <h1>{{ title }}</h1>
    <h1>
      <SingleListVue titleText="title1" :paraText="1"></SingleListVue>
    </h1>
  </div>
</template>

<script>
import SingleListVue from "./SingleList.vue";
export default {
  name: "AllList",
  components: { SingleListVue },
};
</script>

<style></style>
