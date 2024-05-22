import { createStore } from "vuex";

export default createStore({
  state: {
    name: "Hsu",
    nickname: "Papi",
    fruits: ["apple", "orange", "mango"],
    users: [
      { id: 1, name: "Hsu", isDone: false },
      { id: 2, name: "Papi", isDone: true },
    ],
  },
  getters: {
    getUserCount: (state) => state.users.length,
    doneJob: (state) => state.users.filter((v) => v.isDone === true),
    undoneJob: (state, getters) =>
      getters.getUserCount - getters.doneJob.length,
  },
  mutations: {
    changeNameWithMutation: (state) => (state.name = "Mutation"),
    changeMutationDync: (state, value) => (state.name = value),
  },
  actions: {
    // changeName: ({ state }) => (state.name = "Update Hsu"),
    changeNameDync: ({ state }, value) => (state.name = value),
  },
  modules: {},
});
