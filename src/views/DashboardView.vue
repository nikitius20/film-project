<template>
  <div class="dashboard-component">
    <list-of-movies />
  </div>
</template>

<script>
import ListOfMovies from "../components/ListOfMovies.vue";
export default {
  components: {
    ListOfMovies,
  },
  name: "DashboardView",
  mounted() {
    this.$store.dispatch("setMovies");
  },
};
</script>

<style scoped>
.dashboard-component {
  height: 1000px;
}
</style>
