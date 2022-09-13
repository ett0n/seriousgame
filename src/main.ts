import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.scss";
import App from "./App.vue";

App.use(createPinia);
createApp(App).mount("#app");
