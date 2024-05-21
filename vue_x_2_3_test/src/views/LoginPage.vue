<template>
  <div class="col-6 offset-3">
    <h1>Login Page</h1>
    <label for="">Email</label>
    <input type="email" class="form-control" v-model="user.email" />
    <label for="">Password</label>
    <input type="password" class="form-control" v-model="user.password" />
    <button class="btn btn-primary mt-2" @click="loginPage()">Login</button>
    <button class="btn btn-primary mt-2" @click="logoutPage()">Logout</button>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    loginPage() {
      if (this.user.email != "" && this.user.password != "") {
        localStorage.setItem("vueAuth", true);
        this.$router.push("/");
      } else {
        alert("Please fill Email and Password!");
      }
    },
    logoutPage() {
      localStorage.setItem("vueAuth", false);
    },
  },
};
</script>

<style></style>
