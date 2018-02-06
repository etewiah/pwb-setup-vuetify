<template>
  <v-app>
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app>
      <v-list>
        <template v-for="(item, index) in mainNavItems">
          <template v-if="item.isGroupHeader">
            <v-list-group :value="item.active" v-bind:key="item.title">
              <v-list-tile slot="item" @click="">
                <v-list-tile-action>
                  <v-icon>{{ item.action }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-icon>keyboard_arrow_down</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <v-list-tile v-for="subItem in item.items" v-bind:key="subItem.title" :href="subItem.href" :to="{name: subItem.href}">
                <v-list-tile-action>
                  <v-icon light v-html="subItem.icon"></v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title v-html="subItem.text"></v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-content>
                  <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-icon>{{ subItem.action }}</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list-group>
          </template>
          <v-list-tile v-else :href="item.href" :to="{name: item.href}">
            <v-list-tile-action>
              <v-icon light v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.text"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :clipped-left="clipped" fixed dark :class="theme">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      {{ $t('message.hello', { msg: 'hello' }) }}
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <v-btn icon dark slot="activator">
          <v-icon dark>language</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="lang in locales" :key="lang" @mouseover.native="changeLocale(lang)">
            <v-list-tile-title>
              {{lang}}
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>



      <v-menu offset-y>
        <v-btn icon dark slot="activator">
          <v-icon dark>format_paint</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="n in colors" :key="n" :class="n" @mouseover.native="theme = n">
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-menu offset-y>
        <v-btn icon @click.stop="rightDrawer = !rightDrawer">
          <v-icon dark>language</v-icon>
        </v-btn>
      </v-menu>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      theme: 'primary',
      mini: false,
      locales: ['en-US', 'zh-CN', 'es-ES'],
      colors: ['blue', 'green', 'purple', 'red'],
      clipped: false,
      drawer: true,
      fixed: false,
      mainNavItems: [{
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
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  name: 'App',
  methods: {
    changeLocale(to) {
      global.helper.ls.set('locale', to)
      this.$i18n.locale = to
    },
  },
  mounted: function() {
    this.$store.dispatch('loadSetupInfo')
  },
}

</script>
