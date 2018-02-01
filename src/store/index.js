import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    pages: [],
    currencies: []
  },
  actions: {
    loadSetupInfo: function ({ commit }) {
      axios.get('/api/v1/agency').then((response) => {
        commit('SET_PROJECT_LIST', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    }
  },
  mutations: {
    SET_PROJECT_LIST: (state, { list }) => {
      state.pages = list.website.admin_page_links
      state.currencies = list.setup.currencyFieldKeys
    }
  },
  getters: {

  }
})
export default store