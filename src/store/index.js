import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import propertiesStore from './modules/properties'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    propertiesStore
  },
  state: {
    newProperty: "",
    pages: [],
    currencies: [],
    propertyTabs: [{
      tabValue: "general",
      tabTitleKey: "propertySections.general",
      componentName: "GeneralPropertyDetails",
    }, {
      tabValue: "text",
      tabTitleKey: "propertySections.text",
      componentName: "TextPropertyDetails",
    }, {
      tabValue: "venta",
      tabTitleKey: "propertySections.sale",
      componentName: "GeneralPropertyDetails",
    }, {
      tabValue: "situacion",
      tabTitleKey: "propertySections.location",
      componentName: "GeneralPropertyDetails",
    }, {
      tabValue: "extras",
      tabTitleKey: "propertySections.extras",
      componentName: "ExtrasPropertyDetails",
    }, {
      tabValue: "fotos",
      tabTitleKey: "propertySections.photos",
      componentName: "GeneralPropertyDetails",
    }],
    tabs: ['tab-1', 'tab-2', 'tab-3'],
  },
  actions: {
    loadSetupInfo: function({ commit }) {
      axios.get('/api/v2/agency').then((response) => {
        let token = response.headers["x-csrf-token"]
        axios.defaults.headers.common['X-CSRF-Token'] = token
        commit('setSiteData', { result: response.data })
      }, (err) => {
        console.log(err)
      })
    },
  },
  mutations: {
    setSiteData: (state, { result }) => {
      state.pages = result.website.admin_page_links
      state.currencies = result.setup.currencyFieldKeys
    }
  },
  getters: {

  }
})
export default store
