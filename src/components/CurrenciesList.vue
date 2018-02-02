<template>
  <v-container>
    <v-layout>
      <v-flex xs12 class="text-xs-center">
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-list two-line subheader>
          <v-subheader inset>Currencies</v-subheader>
          <form>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field name="title" label="Title" id="title" v-model="title" required></v-text-field>
              </v-flex>
            </v-layout>
          </form>
          <v-list-tile avatar v-for="item in currencies" v-bind:key="item.title" @click="">
            <v-list-tile-avatar>
              <v-icon v-bind:class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.labelTextTKey }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.value }}</v-list-tile-sub-title>
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
        <p></p>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      loading: true
    }
  },
  computed: {
    currencies() {
      return this.$store.state.currencies
    }
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
