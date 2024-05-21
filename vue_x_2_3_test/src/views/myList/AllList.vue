<template>
  <div>
    <h1>To Do List Page</h1>
    <li class="list-group-item col-6 offset-3">
      <SingleList></SingleList>
      <SingleList></SingleList>
    </li>
  </div>
</template>

<script>
import SingleList from "./SingleList.vue";
export default {
  name: "AllList",
  components: { SingleList },
};
</script>

<style></style>
