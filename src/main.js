import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { Axios } from "axios";
const app = createApp(App);
// Axios.interceptors.request.use((config) => {
//   console.log(config);
// });
app.use(store);
app.use(router);
app.mount("#app");
