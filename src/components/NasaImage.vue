<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useNasaImage } from "../stores/nasaImage";

const store = useNasaImage();
const { image, description, title, date, hdurl } = storeToRefs(store);
const dialog = ref(false);
const loadingImage = ref(false);
const showHd = () => {
  loadingImage.value = true;
  dialog.value = true;
};

onMounted(() => {
  store.getImage();
});
</script>

<template>
  <v-container>
    <h3>{{ title }}</h3>
    <v-row no-gutters justify="center" class="img-row">
      <div class="date">{{ date }}</div>
      <v-img
        :src="image"
        class="ma-2"
        max-width="1000"
        max-height="800"
        @click="showHd"
      />
    </v-row>
    <p class="description">{{ description }}</p>
  </v-container>
  <v-dialog v-model="dialog" height="85vh">
    <v-card height="85vh">
      <v-card-text>
        <v-row no-gutters justify="center" class="fill-height img-row">
          <v-col cols="12">
            <v-img
              :src="hdurl"
              class="ma-2"
              @click="showHd"
              max-height="85vh"
              @load="loadingImage = false"
            />
          </v-col>
          <v-col cols="12" class="text-center loader" v-if="loadingImage">
            <v-progress-circular
              :size="70"
              :width="7"
              color="purple"
              indeterminate
            ></v-progress-circular>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary" @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
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
.loader {
  position: absolute;
  top: 40%;
}
.description {
  text-align: start;
}
</style>