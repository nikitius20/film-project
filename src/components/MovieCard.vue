<template>
  <div class="movie-card">
    <img :src="url" />
    <span>{{ movie.title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      require: true,
    },
  },
  computed: {
    url() {
      return "https://image.tmdb.org/t/p/original" + this.movie.poster_path;
    },
  },
};
</script>

<style scoped>
.movie-card {
  height: 200px;
  width: 150px;
  background-color: tomato;
}
img {
  height: 150px;
  width: 150px;
}
</style>
