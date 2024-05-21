<template>
  <div>
    <h1>{{ title }}</h1>
    <h1>{{ titleText }}</h1>
    <h1>{{ paraText }}</h1>
    <h2 v-for="(task, index) in tasks" :key="index">{{ task.name }}</h2>
  </div>
</template>

<script>
export default {
  name: "AllList",
  props: {
    titleText: { type: String, required: true, default: "this is default" },
    paraText: {
      type: Number,
      required: true,
      default: 1000,
      validator(value) {
        return value > 10;
      },
    },
  },
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
