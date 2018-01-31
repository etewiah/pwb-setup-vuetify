import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ContactDetails from '@/components/ContactDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/setup/',
  routes: [{
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/contacts',
      name: 'contacts',
      component: ContactDetails,
    }
  ]
})
