import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toast, { type PluginOptions } from "vue-toastification";
import NoLoginComponentVue from "@/components/global/NoLoginComponent.vue";
import "vue-toastification/dist/index.css";
import "./assets/main.css";

const app = createApp(App);
app.component("NoLoginComponent", NoLoginComponentVue);

app.use(router);

const options: PluginOptions = {};

app.use(Toast, options);

app.mount("#app");
