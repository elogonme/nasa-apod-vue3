import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import { createI18n, useI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";

// import "./assets/main.css";
import { fr, en } from "vuetify/locale";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

const messages = {
  en: {
    message: {
      hello: "Hello world!",
    },
    $vuetify: en,
  },
  fr: {
    message: {
      hello: "Bonjour le monde!",
    },
    $vuetify: fr,
  },
};

const i18n = new createI18n({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: "fr",
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
    // locale: "fr",
    // fallback: "en",
    // messages: { fr, en },
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(vuetify);
app.mount("#app");
