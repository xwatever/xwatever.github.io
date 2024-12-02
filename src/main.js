import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/main.css";
import "./assets/css/page.css";
import "./assets/css/diff_resolution.css";
import "./assets/css/animation.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// createApp(App).mount("#app");

const app = createApp(App);
app.config.devtools = true;
app.use(router).use(store).mount("#app");
