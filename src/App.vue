<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useTheme } from "vuetify";
import { useLocale } from "vuetify";

const { current, t } = useLocale();

const theme = useTheme();
const switchDarkMode = () =>
  (theme.global.name.value = theme.global.current.value.dark
    ? "light"
    : "dark");
const changeLocale = () => {
  if (current.value === "en") {
    current.value = "fr";
  } else current.value = "en";
};
</script>

<template>
  <v-container>
    <p>{{ t("message.hello") }}</p>
    <nav>
      <v-icon icon="mdi-home-outline" />
      <RouterLink to="/" class="nav-link"> Home</RouterLink>
      <v-icon icon="mdi-information-outline" />
      <RouterLink to="/about" class="nav-link">About</RouterLink>
      <v-btn
        flat
        text
        size="sm"
        class="float-right mx-2"
        @click="switchDarkMode"
      >
        <v-icon icon="mdi-theme-light-dark"></v-icon>
      </v-btn>
      <v-btn flat text size="sm" class="float-right mx-2" @click="changeLocale">
        {{ current === "fr" ? "en" : "fr" }}
      </v-btn>
    </nav>
    <v-row justify="center">
      <v-col>
        <RouterView />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.nav-link {
  padding: 5px 10px 5px 5px;
  color: rgb(0, 189, 186);
}
</style>

<style lang="scss">
#app {
  text-align: center;
  // color: #adadad;
}
</style>