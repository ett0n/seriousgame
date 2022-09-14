import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.scss";
import App from "./App.vue";

const app = createApp(App);
app.use(createPinia());
app.mount("#app");

import { useGameStore } from "./store/game";
export const store = useGameStore();
