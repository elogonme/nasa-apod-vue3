import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import { createI18n, useI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";

// import "./assets/main.css";

// Import vuetify component messaages translations
import { fr, en } from "vuetify/locale";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

// Import custom translations from csv file, parse and load
const parsed = await import("./translations.csv");
const enTranslations = parsed.default
  .map((i) => ({ [i.key]: i.en }))
  .reduce(function (result, current) {
    return Object.assign(result, current);
  }, {});

const frTranslations = parsed.default
  .map((i) => ({ [i.key]: i.fr }))
  .reduce(function (result, current) {
    return Object.assign(result, current);
  }, {});

const messages = {
  en: {
    ...enTranslations,
    $vuetify: en,
  },
  fr: {
    ...frTranslations,
    $vuetify: fr,
  },
};

const i18n = new createI18n({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: "en",
  fallbackLocale: "en",
  messages,
});

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "dark",
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }, { useScope: "global" }),
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(vuetify);
app.mount("#app");
