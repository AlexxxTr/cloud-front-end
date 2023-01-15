import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toast, { type PluginOptions } from "vue-toastification";

import "./assets/main.css";
import "vue-toastification/dist/index.css";

const app = createApp(App);

app.use(router);

const options: PluginOptions = {};

app.use(Toast, options);

app.mount("#app");
