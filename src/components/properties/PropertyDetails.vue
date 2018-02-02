<template>
  <v-container>
    <v-layout>
      <v-flex xs12 class="text-xs-center">
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>

details:  {{ property.attributes.title }}

      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center">
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    property() {
      return this.$store.state.property
    }
  },
  mounted: function() {
    this.$store.dispatch('loadProperty', this.$route.params["id"])
  },
  methods: {

  }
}

</script>
