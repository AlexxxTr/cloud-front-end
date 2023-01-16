import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toast, { type PluginOptions } from "vue-toastification";
import NoLoginComponent from "@/components/global/NoLoginComponent.vue";
import "vue-toastification/dist/index.css";
import "./assets/main.css";

const app = createApp(App);
app.component("NoLoginComponent", NoLoginComponent);

app.use(router);

const options: PluginOptions = {};

app.use(Toast, options);

app.mount("#app");
