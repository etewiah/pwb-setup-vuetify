import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentProperty: {
      attributes: {}
    },
    newProperty: "",
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
    loadProperties: function({ commit }) {
      axios.get('/api/v2/properties', {
        headers: {
          'Content-Type': 'application/vnd.api+json',
          'Accept': 'application/vnd.api+json'
        }
      }).then((response) => {
        commit('setProperties', { result: response.data })
      }, (err) => {
        console.log(err)
      })
    },
    loadProperty: function({ commit }, propertyId) {
      let apiUrl = '/api/v2/properties/' + propertyId
      axios.get(apiUrl, {
        headers: {
          'Content-Type': 'application/vnd.api+json',
          'Accept': 'application/vnd.api+json'
        }
      }).then((response) => {
        commit('setCurrentProperty', { result: response.data })
      }, (err) => {
        console.log(err)
      })
    },
    updateProperty({ commit, state }) {
      let apiUrl = '/api/v2/properties/' + state.currentProperty.id
      axios.put(apiUrl, {
        property: state.currentProperty
      }, {
        headers: {
          'Content-Type': 'application/vnd.api+json',
          'Accept': 'application/vnd.api+json'
        }
      }).then(response => {
        commit('setCurrentProperty', { result: response.data })
      })
    },
    addProperty({ commit, state }) {
      if (!state.newProperty) {
        // do not add empty properties
        return
      }
      const property = {
        title: state.newProperty,
        completed: false,
        id: randomId()
      }
      axios.post('/properties', property).then(_ => {
        commit('setNewProperty', property)
      })
    },

  },
  mutations: {
    setNewProperty(state, todoObject) {
      state.todos.push(todoObject)
    },
    clearNewProperty(state) {
      state.newProperty = ''
    },
    setCurrentProperty: (state, { result }) => {
      state.currentProperty = result
    },
    setProperties: (state, { result }) => {
      state.properties = result
    },
    setSiteData: (state, { result }) => {
      state.pages = result.website.admin_page_links
      state.currencies = result.setup.currencyFieldKeys
    }
  },
  getters: {

  }
})
export default store
