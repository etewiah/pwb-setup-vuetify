<template>
  <v-container>
    details: {{ property.attributes.title }}
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
