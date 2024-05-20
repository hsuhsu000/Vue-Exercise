<template>
  <div class="">
    <h3 class="text-center bg-info p-3">Todo List</h3>
    <div class="container">
      <div class="row my-5">
        <div class="col">
          <input type="text" class="form-control" />
        </div>
        <div class="col">
          <button class="btn btn-primary">Add</button>
        </div>
      </div>
      <div class="row">
        <div class="col"><h4>Tasks</h4></div>
        <div class="col-2"><h4>Status</h4></div>
      </div>
      <div class="row" v-for="(task, index) in filterTask" :key="index">
        <div class="col" :class="task.status ? 'delete' : ''">
          {{ task.action }}
        </div>
        <div class="col-2">
          <input type="checkbox" v-model="task.status" />
        </div>
      </div>
      <div class="row col-6 rounded-3 shadow-sm bg-info py-2 mt-3">
        <div class="col-10">Hide Complete Tasks</div>
        <div class="col">
          <input type="checkbox" v-model="hideCompleteTask" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    title: "To Do List",
    hideCompleteTask: false,
    tasks: [
      { action: "to buy new phone", status: false },
      { action: "to study vue.js", status: false },
      { action: "to have breakfast", status: true },
    ],
  }),
  computed: {
    filterTask() {
      return this.hideCompleteTask
        ? this.tasks.filter((v) => !v.status)
        : this.tasks;
    },
  },
};
</script>

<style>
.delete {
  text-decoration: line-through;
}
</style>
