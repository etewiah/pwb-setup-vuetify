<template>
  <v-container>
    <v-layout>
      <v-flex xs12 class="text-xs-center">
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>

        <v-list two-line subheader>
          <v-subheader inset>Pages</v-subheader>
          <v-list-tile avatar v-for="item in pages" v-bind:key="item.title" @click="">
            <v-list-tile-avatar>
              <v-icon v-bind:class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.slug }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.link_path }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

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
    pages() {
      return this.$store.state.pages
    }
  },
  methods: {
  }
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
