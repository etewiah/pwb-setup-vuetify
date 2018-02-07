<template>
  <v-app>
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app>
      <MainNav></MainNav>
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
import MainNav from '@/components/MainNav'
import axios from 'axios'
export default {
  components: {
    MainNav,
  },
  computed: {
    // mainNavItems() {
    //   return this.$store.state.navigationStore.mainNavItems
    // },
  },
  data() {
    return {
      theme: 'primary',
      mini: false,
      locales: ['en-US', 'zh-CN', 'es'],
      colors: ['blue', 'green', 'purple', 'red'],
      clipped: false,
      drawer: true,
      fixed: false,
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
    // axios.get('/api/v1/translations/list/en', {
    //   headers: {
    //     'Content-Type': 'application/vnd.api+json',
    //     'Accept': 'application/vnd.api+json'
    //   }
    // }).then((response) => {
    //   console.log(axios)
    //   debugger
    //   self.mainVm.$i18n.messages = response.data
    //   // commit('setProperties', { result: response.data })
    // }, (err) => {
    //   console.log(err)
    // })

  },
}

</script>
