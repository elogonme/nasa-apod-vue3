import { defineStore } from "pinia";
import NasaService from "../services/nasa.service";

export const useNasaImage = defineStore("nasaImage", {
  state: () => ({
    image: "",
    description: "",
    date: "",
    title: "",
    hdurl: "",
  }),
  actions: {
    getImage(date) {
      NasaService.getPicture(date)
        .then((res) => {
          this.title = res.data.title;
          this.image = res.data.url;
          this.hdurl = res.data.hdurl;
          this.description = res.data.explanation;
          this.date = res.data.date;
        })
        .catch((error) => console.log(error));
    },
  },
});
