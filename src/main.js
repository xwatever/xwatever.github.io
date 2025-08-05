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
import i18n, { loadLanguageAsync } from "./i18n";
import store from "./store/v2";

const app = createApp(App);

await loadLanguageAsync(store.getters.currentLocale);
i18n.global.locale.value = store.getters.currentLocale;

store.dispatch("theme/initTheme");

app.use(router);
app.use(i18n);
app.use(store);

app.mount("#app");
