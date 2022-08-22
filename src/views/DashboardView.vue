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
};
</script>

<style scoped>
.dashboard-component {
  height: 1000px;
}
</style>
