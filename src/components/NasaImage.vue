<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useNasaImage } from "../stores/nasaImage";

const store = useNasaImage();
const { image, description, title, date } = storeToRefs(store);

onMounted(() => {
  store.getImage();
});
</script>

<template>
  <div class="container">
    <h3>{{ title }}</h3>
    <div class="image-container">
      <div class="date">{{ date }}</div>
      <img :src="image" class="image" />
    </div>
    <p class="description">{{ description }}</p>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  text-align: center;
}
.image {
  max-width: 800px;
  max-height: 700px;
  margin: 10px 0;
}
.date {
  position: absolute;
  top: 15px;
  left: 10px;
  z-index: 1;
}
.description {
  text-align: start;
}
</style>