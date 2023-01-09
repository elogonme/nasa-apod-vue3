import { defineStore } from "pinia";
import NasaService from "../services/nasa.service";

export const useNasaImage = defineStore("nasaImage", {
  state: () => ({
    image: "",
    description: "",
    date: "",
    title: "",
    hdurl: "",
    loading: false,
  }),
  actions: {
    getImage(date) {
      this.loading = true;
      NasaService.getPicture(date)
        .then((res) => {
          this.title = res.data.title;
          this.image = res.data.url;
          this.hdurl = res.data.hdurl;
          this.description = res.data.explanation;
          this.date = res.data.date;
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },
  },
});
