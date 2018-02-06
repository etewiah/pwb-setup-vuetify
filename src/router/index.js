import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ContactDetails from '@/components/ContactDetails'
import CreateContact from '@/components/contacts/CreateContact'
import PagesList from '@/components/PagesList'
import CurrenciesList from '@/components/CurrenciesList'
import PropertyDetails from '@/components/properties/PropertyDetails'
import SingleProperty from '@/components/properties/SingleProperty'
import NewProperty from '@/pages/properties/NewProperty'
import PropertiesContainer from '@/pages/properties/PropertiesContainer'
import PropertiesList from '@/pages/properties/PropertiesList'


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
      path: '/currencies',
      name: 'currencies',
      component: CurrenciesList
    }, {
      path: '/contacts',
      name: 'contacts',
      component: ContactDetails
    }, {
      path: '/pages',
      name: 'pages',
      components: {
        default: PagesList,
        detail: PagesList
      },
      props: {
        detail: true
      }
    }, {
      path: '/properties',
      name: 'properties',
      redirect: { name: 'propertiesList' }
    }, {
      path: '/properties/view',
      component: PropertiesContainer,
      children: [{
        path: '',
        name: 'propertiesList',
        component: PropertiesList
      }, {
        path: ':id',
        name: 'singleProperty',
        component: SingleProperty,
        children: [{
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          name: 'singlePropertyTab',
          path: ':tabName',
          component: PropertyDetails
        }]
      }]
    },
    {
      path: '/properties/new',
      name: 'newProperty',
      component: NewProperty,
    }
  ]
})
