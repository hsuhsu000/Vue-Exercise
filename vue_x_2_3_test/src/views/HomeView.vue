<template>
  <div>
    <h1>Home Page</h1>
    <h1>{{ $store.state.name }}</h1>
    <button class="btn btn-primary" @click="showStateName()">
      Show State Name
    </button>
    <h1>Fruits in State</h1>
    <li v-for="(f, index) in myFruits" :key="index">{{ f }}</li>
    <h1>{{ getMyName }}</h1>
    <!-- <h1>Getters {{ $store.getters.getUserCount }}</h1>
    <h1>{{ $store.getters.doneJob[0].name }}</h1>
    <h1>{{ $store.getters.undoneJob }}</h1> -->
    <h1>{{ getUserCount }}</h1>
    <h1>{{ doneJob[0].name }}</h1>
    <h1>{{ undoneJob }}</h1>
    <h1>Action with Dispatch</h1>
    <h1>{{ $store.dispatch("changeName") }}</h1>
    <button class="btn btn-primary" @click="changeName()">ChangeName</button>

    <div>
      <input
        type="text"
        class="form-control"
        placeholder="Enter Change Name With VueX actioin"
        v-model="changeText"
        v-on:keyup.enter="changeTextbtn()"
      />
      <button class="btn btn-success" @click="changeTextbtn()">Save</button>
    </div>
    <h1>{{ $store.state.name }}</h1>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      changeText: "",
      myFruits: this.$store.state.fruits,
    };
  },
  computed: {
    ...mapState(["name", "nickname"]),
    ...mapGetters(["getUserCount", "doneJob", "undoneJob"]),
    getMyName() {
      return this.name + " (" + this.nickname + ")";
    },
  },
  methods: {
    showStateName() {
      alert(this.$store.state.name);
    },
    changeName() {
      // alert(this.$store.dispatch("changeName"));
      alert(this.$store.state.name);
    },
    changeTextbtn() {
      this.$store.dispatch("changeNameDync", this.changeText);
      console.log(this.$store.state.name);
      this.changeText = "";
    },
  },
};
</script>

<style></style>
