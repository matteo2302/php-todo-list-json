console.log("Vue ok", Vue);
const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      tasks: ["leggere il libro", "pulire casa", "mangiare un gelato"],
    };
  },
});
app.mount("#root");
