/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Amanda",
      showInfo: false,
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "Whoa...";
    },
  },
};

Vue.createApp(App).mount("#app");
