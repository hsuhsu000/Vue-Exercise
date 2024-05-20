<template>
  <div class="">
    <h3 class="text-center bg-info p-3">Todo List</h3>
    <div class="container">
      <div class="row">
        <div class="col"><h4>Tasks</h4></div>
        <div class="col-2"><h4>Status</h4></div>
      </div>
      <div class="row" v-for="(task, index) in tasks" :key="index">
        <div class="col" :class="task.status ? 'delete' : ''">
          {{ task.action }}
        </div>
        <div class="col-2">
          <input type="checkbox" v-model="task.status" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    name: "To Do List",
    tasks: [
      { action: "to buy new phone", status: false },
      { action: "to study vue.js", status: false },
      { action: "to have breakfast", status: true },
    ],
  }),
};
</script>

<style>
.delete {
  text-decoration: line-through;
}
</style>
