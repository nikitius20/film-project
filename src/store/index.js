import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { movies: [] },
  getters: { getMovies: (state) => state.movies },
  mutations: {
    setMovies(state, payload) {
      state.movies = payload;
    },
  },
  actions: {
    async setMovies(state) {
      const movies = await Axios.get(
        "https://api.themoviedb.org/3/movie/popular/?api_key=6d9b599441ba19181a6c214d56c931fc"
      );
      console.log(movies.data.results);
      state.commit("setMovies", movies.data.results);
    },
  },
  modules: {},
});
