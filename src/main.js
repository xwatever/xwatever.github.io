/* default */
// import { createApp } from 'vue'
// import App from './App_.vue'

// createApp(App).mount('#app')

/* v1 */
// import { createApp } from "vue";
// import App from "./VOneApp.vue";
// import router from "./router/v1";
// import store from "./store/v1";

// const app = createApp(App);
// app.config.devtools = true;
// app.use(router).use(store).mount("#app");

/* v2 */

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/v2";
import i18n from "./i18n";

const app = createApp(App);
app.use(router);
app.use(i18n);

app.mount("#app");
