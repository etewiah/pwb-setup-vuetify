<template>
  <v-container>
    <!-- basic -->
    <keep-alive>
      <component :is="propertyDetailsComponent" v-bind:property="property"></component>
    </keep-alive>
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
    propertyDetailsComponent() {
      let currentTabName = this.$route.params["tabName"]
      let currentPropertyTab = this.findBy(this.$store.state.propertyTabs, currentTabName, 'tabValue')
      return currentPropertyTab[0].componentName
    },
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
