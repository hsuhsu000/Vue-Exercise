<template>
  <div class="">
    <h3 class="text-center bg-info p-3">Todo List</h3>
    <div class="container">
      <div class="row my-5">
        <div class="col">
          <input
            type="text"
            class="form-control"
            v-model="newTask"
            v-on:keyup.enter="addTask()"
          />
        </div>
        <div class="col">
          <button class="btn btn-primary me-2" v-on:click="addTask()">
            Add
          </button>
          <button class="btn btn-danger" v-on:click="deleteTask()">
            Delete
          </button>
        </div>
      </div>
      <div v-if="filterTask.length > 0">
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
      </div>

      <div
        class="col-4 alert alert-warning text-center"
        v-else-if="filterTask.length == 0"
      >
        There is no task!
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
    newTask: "",
    tasks: [],
  }),
  computed: {
    filterTask() {
      return this.hideCompleteTask
        ? this.tasks.filter((v) => !v.status)
        : this.tasks;
    },
  },
  methods: {
    addTask() {
      if (this.newTask === "") {
        return alert("Plase add a task!");
      }
      this.tasks.push({
        action: this.newTask,
        status: false,
      });
      this.stroreData();
      this.newTask = "";
    },
    deleteTask() {
      this.tasks = this.tasks.filter((v) => !v.status);
      this.stroreData();
    },
    stroreData() {
      localStorage.setItem("myLocalTasks", JSON.stringify(this.tasks));
    },
  },
  mounted() {
    let data = localStorage.getItem("myLocalTasks");
    if (data !== null) {
      this.tasks = JSON.parse(data);
    }
  },
};
</script>

<style>
.delete {
  text-decoration: line-through;
}
</style>
