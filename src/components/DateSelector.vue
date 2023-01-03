<script setup>
import { ref, computed, onMounted, watchEffect } from "vue";
import { useNasaImage } from "../stores/nasaImage";
import moment from "moment";

const store = useNasaImage();
const title = ref("Select Date");
const isDateToday = computed(
  () => moment().format("YYYY-MM-DD") === dateToGet.value
);

const dateToGet = ref("");

onMounted(() => {
  dateToGet.value = moment().format("YYYY-MM-DD");
  //   store.getImage(dateToGet.value);
});

watchEffect(() => {
  store.getImage(dateToGet.value);
});

const formatDate = (d) => {
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  let year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

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
    <button class="btn" @click.prevent="decrementDate">Day Before</button>
    <input type="date" v-model="dateToGet" />
    <button class="btn" @click.prevent="incrementDate" :disabled="isDateToday">
      Next Day
    </button>
  </form>
</template>

<style scoped>
.btn {
  margin: 0 5px;
}
</style>