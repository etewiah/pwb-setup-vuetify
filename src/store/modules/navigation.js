// import shop from '../../api/shop'
// import * as types from '../mutation-types'
import axios from 'axios'

// initial state
const state = {
  mainNavItems: [{
      icon: "fa fa-home",
      tabTitleKey: "adminSections.start",
      tabRoute: "admin.setup"
      // tabRoute: "admin.inicio"
    }, {
      icon: "fa fa-building-o",
      tabTitleKey: "adminSections.properties",
      tabRoute: "admin.propiedades",
      subMenuItems: [{
        icon: "fa fa-list",
        tabTitleKey: "adminSections.list",
        tabRoute: "admin.propiedades.list.default"
        // tabRoute: "admin.inicio"
      }, {
        icon: "fa fa-tags",
        tabTitleKey: "adminSections.labels",
        tabRoute: "admin.propiedades.settings"
      }, {
        icon: "fa fa-plus",
        tabTitleKey: "newProperty",
        tabRoute: "admin.propiedades.nuevo"
        // tabRoute: "admin.inicio"
      }, ]
    },
    {
      icon: "fa fa-desktop",
      tabTitleKey: "adminSections.content",
      tabRoute: "admin.website",
      subMenuItems: [{
        icon: "fa fa-gear",
        tabTitleKey: "adminSections.websiteSettings",
        tabRoute: "admin.website.settings"
      }, {
        icon: "fa fa-keyboard-o",
        tabTitleKey: "webContentSections.footer",
        tabRoute: "admin.website.details.footer"
      }]
    }, {
      icon: "fa fa-newspaper-o",
      tabTitleKey: "adminSections.pages",
      tabRoute: "admin.pages",
      subMenuItems: []
    }, {
      icon: "fa fa-exchange",
      tabTitleKey: "adminSections.import",
      tabRoute: "admin.io"
    }, {
      icon: "fa fa-user",
      tabTitleKey: "adminSections.agencyDetails",
      tabRoute: "admin.agency"
    }, {
      icon: "fa fa-info-circle",
      tabTitleKey: "adminSections.about",
      href: 'about',
      router: true

    },

    {
      action: 'local_activity',
      title: 'Attractions',
      isGroupHeader: true,
      items: [
        { title: 'List Item' }
      ]
    }, {
      icon: 'money',
      text: 'Currencies',
      href: 'currencies',
      router: true
    }, {
      icon: 'pages',
      text: 'Pages',
      href: 'pages',
      router: true
    }, {
      action: 'local_activity',
      title: 'Properties',
      isGroupHeader: true,
      items: [{
        icon: 'domain',
        text: 'List',
        href: 'propertiesList',
        router: true
      }, {
        icon: 'domain',
        text: 'New Property',
        href: 'newProperty',
        router: true
      }]
    }, {
      icon: 'domain',
      text: 'Properties',
      href: 'properties',
      router: true
    }, {
      icon: 'contacts',
      text: 'Contacts',
      href: 'contacts',
      router: true
    }, {
      icon: 'contacts',
      text: 'Create contact',
      href: 'CreateContact',
      router: true
    }
  ],
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
}

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
