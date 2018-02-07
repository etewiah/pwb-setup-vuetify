import Vue from 'vue'
import helper from './helper'
global.helper = helper
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'
import store from './store'
import VueI18n from 'vue-i18n'
import i18n from './i18n/'



// let token = document.getElementsByName('csrf-token')[0].getAttribute('content')

// below needed for rails to recognise request.xhr?
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.headers.common['X-CSRF-Token'] = token
// axios.defaults.headers.common['Accept'] = 'application/json'


// import validator from 'indicative'
import validator from 'Validator'
global.validator = validator


import VForm from './components/adminify/Form.vue'
// import VGrid from './components/Grid.vue'
import VField from './components/adminify/Field.vue'

// import Modal from './components/Modal'
// Vue.use(Modal)

Vue.component('a-form', VForm)
// Vue.component('v-grid', VGrid)
Vue.component('v-field', VField)



// Vue.use(axios)

Vue.use(Vuetify, { theme: {
  primary: '#ee44aa',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})

Vue.config.productionTip = false

/* eslint-disable no-new */
global.mainVm = new Vue({
  el: '#app',
  router,
  axios,
  i18n,
  store,
  methods: {
    getJokes() {
      this.loading = true;
      axios.get("http://api.icndb.com/jokes/random/10")
        .then((response) => {
          this.loading = false;
          this.jokes = response.data.value;
        }, (error) => {
          this.loading = false;
        })
    }
  },
  render: h => h(App),

})
