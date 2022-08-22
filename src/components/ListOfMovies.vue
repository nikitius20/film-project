<template>
  <div class="list-of-movies">
    <movie-card v-for="movie in movies" :movie="movie" :key="movie.id" />
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";
export default {
  components: { MovieCard },
  data() {
    return {};
  },
  computed: {
    movies() {
      return this.$store.getters.getMovies;
    },
  },
};
</script>

<style scoped>
.list-of-movies {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
