<script setup>
import DateSelector from "../components/DateSelector.vue";
import NasaImage from "../components/NasaImage.vue";
</script>

<template>
  <div class="home">
    <h1>{{ $t("views.home_view.nasa_daily") }}</h1>
    <date-selector />
    <nasa-image />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    align-items: center;
  }
}
</style>