<template>
  <v-container>
    <!-- basic -->
  </v-container>
</template>
<script>
import GeneralPropertyDetails from '@/components/properties/details/GeneralPropertyDetails'
import TextPropertyDetails from '@/components/properties/details/TextPropertyDetails'
import ExtrasPropertyDetails from '@/components/properties/details/ExtrasPropertyDetails'
export default {
  data() {
    return {}
  },
  components: {
    GeneralPropertyDetails,
    TextPropertyDetails,
    ExtrasPropertyDetails
  },
  computed: {
    property() {
      return this.$store.state.currentProperty
    }
  },
  mounted: function() {
    this.$store.dispatch('loadProperty', this.$route.params["id"])
  },
  methods: {
    findBy: function(list, value, column) {
      return list.filter(function(item) {
        return item[column].includes(value)
      })
    },
    orderBy: function(list, order, column) {
      return list.sort(function(a, b) {
        return order * (a[column] - b[column])
      })
    }
  },
}

</script>
