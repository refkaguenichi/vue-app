import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createI18n } from "vue-i18n";
import en_phrase from "./assets/locales/en.json";
import fr_phrase from "./assets/locales/fr.json";
import ja_phrase from "./assets/locales/ja.json";

const messages = {
  en: {
    message: en_phrase,
  },
  fr: {
    message: fr_phrase,
  },
  ja: {
    message: ja_phrase,
  },
};
const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en", // set fallback locale
  messages,
});
const app = createApp(App);
app.use(i18n);
app.use(store);
app.use(router);
app.mount("#app");
