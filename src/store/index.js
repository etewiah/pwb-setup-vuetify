import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    property: {
      attributes: {}
    },
    properties: [],
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
        //   tabValue: "descripcion",
        //   tabTitleKey: "propertySections.description"
        // }, {
        tabValue: "extras",
        tabTitleKey: "propertySections.extras",
        componentName: "GeneralPropertyDetails",
      }, {
        tabValue: "fotos",
        tabTitleKey: "propertySections.photos",
        componentName: "GeneralPropertyDetails",
      }
    ],
    tabs: ['tab-1', 'tab-2', 'tab-3'],
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
    },
    loadProperty: function({ commit }, propertyId) {
      let apiUrl = '/api/v1/properties/' + propertyId
      axios.get(apiUrl, {
        headers: {
          'Content-Type': 'application/vnd.api+json',
          'Accept': 'application/vnd.api+json'
        }
      }).then((response) => {
        commit('setProperty', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    }
  },
  mutations: {
    setProperty: (state, { list }) => {
      state.property = list.data
    },
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
