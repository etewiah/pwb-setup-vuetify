import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'
import store from './store'
import VueI18n from 'vue-i18n'

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

Vue.use(VueI18n)


// Ready translated locale messages
const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'ja', // set locale
  messages, // set locale messages
})


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
new Vue({
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
