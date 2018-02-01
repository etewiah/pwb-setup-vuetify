import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ContactDetails from '@/components/ContactDetails'
import CreateContact from '@/components/contacts/CreateContact'
import PagesList from '@/components/PagesList'

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
      path: '/contacts/create',
      name: 'CreateContact',
      component: CreateContact
    }, {
      path: '/contacts',
      name: 'contacts',
      component: ContactDetails
    }, {
      path: '/pages',
      name: 'pages',
      component: PagesList
    }
  ]
})
