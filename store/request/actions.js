// import moduleName from 'fwt'

export default {
  async get_movie({ commit }, payload) {
    try {
      const response = await this.$axios.$get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_MOVIES}&query=${payload}`)
      console.log(response);
      commit('SET_MOVIE', response);
    } catch (error) {
      console.log(error);
    }
  }
}