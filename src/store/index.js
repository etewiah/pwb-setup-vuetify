import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    properties: [],
    pages: [],
    currencies: []
  },
  actions: {
    loadSetupInfo: function({ commit }) {
      axios.get('/api/v1/agency').then((response) => {
        commit('setProjectList', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    },
    loadProperties: function({ commit }) {
      axios.get('/api/v1/lite-properties', {
        headers: {
          'Content-Type': 'application/vnd.api+json',
          'Accept': 'application/vnd.api+json'
        }
      }).then((response) => {
        commit('setProperties', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    }
  },
  mutations: {
    setProperties: (state, { list }) => {
      state.properties = list.data
    },
    setProjectList: (state, { list }) => {
      state.pages = list.website.admin_page_links
      state.currencies = list.setup.currencyFieldKeys
    }
  },
  getters: {

  }
})
export default store
