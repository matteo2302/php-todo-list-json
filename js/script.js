console.log("Vue ok", Vue);
const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      tasks: [],
      newTask: "",
    };
  },
  methods: {
    addTask() {
      const data = { task: this.newTask };
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      axios
        .post("http://localhost:80/php-todo-list-json/api/tasks/", data, config)
        .then((res) => {
          this.tasks.push(res.data);
          this.newtask = "";
        });
    },
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
