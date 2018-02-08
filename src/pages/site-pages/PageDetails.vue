<template>
  <v-container>
    <v-tabs>
      <v-tabs-bar class="cyan" dark>
        <template v-for="(tab, index) in pageTabs">
          <v-tabs-item :to="{name: 'site-page-details', params: {tabName: tab.page_part_key}}" ripple>
            {{ $t(tab.editor_setup.tabTitleKey) }} {{tab.page_part_key}}
          </v-tabs-item>
        </template>
        <v-tabs-slider color="yellow"></v-tabs-slider>
      </v-tabs-bar>
      <v-tabs-items>
      </v-tabs-items>
    </v-tabs>


    <v-layout>
      <v-flex xs12 class="text-xs-center">
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        details: {{ currentPage.page_title_en }} dsfsdfdsdsdfds
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <p>Our awesome pages!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      // pages: [],
      loading: true
    }
  },
  computed: {
    pageTabs() {
      return this.$store.state.pagesStore.currentPage.page_parts
    },
    currentPage() {
      return this.$store.state.pagesStore.currentPage
    }
  },
  watch: {
    '$route' (to, from) {
      this.$store.dispatch('loadPage', to.params.pageName)
    }
  },
  mounted: function() {
    this.$store.dispatch('loadPage', this.$route.params["pageName"])
  },
  methods: {}
}

</script>
<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
  padding: 20px;
}

</style>
