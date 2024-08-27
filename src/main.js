import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/css/main.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// createApp(App).mount("#app");

const app = createApp(App);
app.use(router).mount("#app");
