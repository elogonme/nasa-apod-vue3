<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useTheme } from "vuetify";

const theme = useTheme();
const switchDarkMode = () =>
  (theme.global.name.value = theme.global.current.value.dark
    ? "light"
    : "dark");
</script>

<template>
  <v-container>
    <nav>
      <v-icon icon="mdi-home-outline" />
      <RouterLink to="/" class="nav-link"> Home</RouterLink>
      <v-icon icon="mdi-information-outline" />
      <RouterLink to="/about" class="nav-link">About</RouterLink>
      <v-btn flat text size="sm" class="float-right" @click="switchDarkMode">
        <v-icon icon="mdi-theme-light-dark"></v-icon>
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