<template>
  <div>
    <h1>{{ title }}</h1>
    <h2 v-for="(task, index) in tasks" :key="index">{{ task.name }}</h2>
  </div>
</template>

<script>
export default {
  name: "AllList",
  data() {
    return {
      title: "This is Single list page",
      tasks: [
        {
          name: "Task One",
          status: false,
        },
        {
          name: "Task Two",
          status: true,
        },
      ],
    };
  },
};
</script>

<style></style>
