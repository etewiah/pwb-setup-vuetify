<template>
  <v-container>
    <v-layout>
      <v-flex xs12 class="text-xs-center">
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>

dsfsdfdsdsdfds
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
    // currentProperty() {
    //   debugger
    //   return this.$store.state.propertiesStore.currentProperty
    // }
  },
  mounted: function() {
    debugger
    this.$store.dispatch('loadProperty', this.$route.params["pageName"])
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
