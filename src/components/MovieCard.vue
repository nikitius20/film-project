<template>
  <div class="movie-card">{{ movie.name }}</div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style scoped>
.movie-card {
  height: 100px;
  width: 100px;
  background-color: tomato;
}
</style>
