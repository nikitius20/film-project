<template>
  <div class="list-of-movies">
    <movie-card v-for="movie in getMovies" :movie="movie" :key="movie.id" />
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";
export default {
  components: { MovieCard },
  data() {
    return {
      movies: [
        { name: "test", index: Math.random() * 10000 },
        { name: "test", index: Math.random() * 10000 },
        { name: "test", index: Math.random() * 10000 },
        { name: "test", index: Math.random() * 10000 },
      ],
    };
  },
  computed: {
    getMovies() {
      return this.movies;
    },
  },
};
</script>

<style scoped>
.list-of-movies {
  display: flex;
}
</style>
