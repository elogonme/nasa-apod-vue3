<template>
  <div class="about">
    <v-row justify="center">
      <v-col cols="12">
        <!-- <h1>About</h1> -->
      </v-col>
      <v-col cols="12">
        <h2 class="my-5">Astronomy Picture of the Day Discover the cosmos!</h2>
        <p>
          Each day a different image or photograph of our fascinating universe
          is featured, along with a brief explanation written by a professional
          astronomer.
        </p>
      </v-col>
      <v-col cols="12">
        <a
          href="https://apod.nasa.gov/apod/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit NASA's Astronomy Picture of the Day
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    align-items: center;
  }
}
</style>
