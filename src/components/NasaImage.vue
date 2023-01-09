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
  <v-container>
    <h3>{{ title }}</h3>
    <v-row no-gutters justify="center" class="img-row">
      <div class="date">{{ date }}</div>
      <v-img :src="image" class="ma-2" max-width="1000" max-height="1000" />
    </v-row>
    <p class="description">{{ description }}</p>
  </v-container>
</template>

<style scoped>
.img-row {
  position: relative;
}
.date {
  position: absolute;
  top: 15px;
  left: 10px;
  z-index: 1;
  color: white;
}
.description {
  text-align: start;
}
</style>