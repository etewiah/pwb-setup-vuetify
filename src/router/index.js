import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ContactDetails from '@/components/ContactDetails'
import CreateContact from '@/components/contacts/CreateContact'
import AdminPagesList from '@/pages/admin-pages/PagesList'
import SitePageDetails from '@/pages/site-pages/PageDetails'
import CurrenciesList from '@/components/CurrenciesList'
import PropertyDetails from '@/components/properties/PropertyDetails'
import SingleProperty from '@/components/properties/SingleProperty'
import NewProperty from '@/pages/properties/NewProperty'
import PropertiesList from '@/pages/properties/PropertiesList'
import GenericContainer from '@/pages/GenericContainer'


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
      path: '/admin-pages',
      name: 'admin-pages-list',
      components: {
        default: AdminPagesList,
        detail: AdminPagesList
      },
      props: {
        detail: true
      }
    }, {
      path: '/site-pages/:pageName',
      name: 'site-page',
      component: GenericContainer,
      // redirect: { name: 'single-page-tab' },
      children: [{
          path: '',
          name: 'site-page-details-default',
          component: SitePageDetails,
        },
        {
          path: ':tabName',
          name: 'site-page-details',
          component: SitePageDetails,
          // children: [{
          //   name: 'single-page-tab',
          //   path: ':tabName',
          //   component: SitePageDetails
          // }]
        }
      ]
    }, {
      path: '/properties',
      name: 'properties',
      redirect: { name: 'propertiesList' }
    }, {
      path: '/properties/view',
      component: GenericContainer,
      children: [{
        path: '',
        name: 'propertiesList',
        component: PropertiesList
      }, {
        path: ':id',
        name: 'singleProperty',
        component: SingleProperty,
        children: [{
          path: '',
          redirect: to => {
            const { hash, params, query } = to
            // This will not trigger if I route to 'singleProperty' within app
            return { name: 'singlePropertyTab', params: { tabName: 'general', id: params.id } }
            // if (query.to === 'foo') {
            //   return { path: '/foo', query: null }
            // }
          } // redirect: { name: 'singlePropertyTab', params: {tabName: 'general'} }
        }, {
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
