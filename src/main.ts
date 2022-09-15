import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.scss";
import App from "./App.vue";
import { useGameStore } from "./store/game";

const app = createApp(App);
app.use(createPinia());
app.mount("#app");

export const store = useGameStore();
