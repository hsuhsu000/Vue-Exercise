<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>{{ this.$route.params.x }}</h3>
    <h3>{{ this.$route.params.y }}</h3>
    <button class="btn btn-success" @click="home()">Go Home</button>
    <button class="btn btn-info" @click="list()">Go List</button>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  methods: {
    home() {
      this.$router.push("/");
    },
    list() {
      this.$router.push({ name: "allList" });
    },
  },
};
</script>
