import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'
import store from './store'

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
