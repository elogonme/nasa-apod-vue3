<script setup>
import { ref, computed, onMounted, watchEffect } from "vue";
import { useNasaImage } from "../stores/nasaImage";
import { useLocale } from "vuetify";

const { t } = useLocale();
import moment from "moment";

const store = useNasaImage();
const title = ref(t("component.date_selector.select_date"));
const dateToGet = ref("");

const isDateToday = computed(
  () => moment().format("YYYY-MM-DD") === dateToGet.value
);

onMounted(() => {
  dateToGet.value = moment().format("YYYY-MM-DD");
  //   store.getImage(dateToGet.value);
});

watchEffect(() => {
  store.getImage(dateToGet.value);
});

const decrementDate = () => {
  dateToGet.value = moment(dateToGet.value)
    .subtract(1, "days")
    .format("YYYY-MM-DD");
};
const incrementDate = () => {
  if (isDateToday.value) return;
  dateToGet.value = moment(dateToGet.value).add(1, "days").format("YYYY-MM-DD");
};
</script>

<template>
  <h3>{{ title }}</h3>
  <form>
    <v-btn
      class="mx-4"
      icon="mdi-chevron-left"
      small
      @click.prevent="decrementDate"
    ></v-btn>
    <input class="date-picker" type="date" v-model="dateToGet" />
    <v-btn
      class="mx-4"
      icon="mdi-chevron-right"
      small
      @click.prevent="incrementDate"
      :disabled="isDateToday"
    >
    </v-btn>
  </form>
</template>

<style scoped>
.btn {
  margin: 0 5px;
}
.date-picker {
  height: 32px;
}
</style>