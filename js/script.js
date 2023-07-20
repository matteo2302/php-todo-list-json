console.log("Vue ok", Vue);
const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    axios
      .get("http://localhost:80/php-todo-list-json/api/tasks/")
      .then((res) => {
        this.tasks = res.data;
      });
  },
});
app.mount("#root");
