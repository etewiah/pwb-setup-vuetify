<template>
  <v-container>
    details: {{ property.title }}
  </v-container>
</template>
<script>
export default {
  props: ["property"],
  data() {
    return {
    }
  },
  // computed: {
  //   property() {
  //     return this.$store.state.property
  //   }
  // },
  // mounted: function() {
  //   this.$store.dispatch('loadProperty', this.$route.params["id"])
  // },
  methods: {

  }
}

</script>
