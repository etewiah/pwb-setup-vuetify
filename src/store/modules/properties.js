// import shop from '../../api/shop'
// import * as types from '../mutation-types'
import axios from 'axios'

// initial state
const state = {
  all: [],
  properties: [],
  currentProperty: {
    attributes: {}
  },
}

// getters
const getters = {
  // allProducts: state => state.all
}

// actions
const actions = {
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
}

// mutations
const mutations = {
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
}

export default {
  state,
  getters,
  actions,
  mutations
}
