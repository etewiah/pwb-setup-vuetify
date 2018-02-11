<template>
  <div class="mr-4">
    <template v-if="fieldDetails.inputType == 'number'">
      <v-text-field name="title" :label="$t(fieldDetails.labelTextTKey) + ' ' + $t(fieldDetails.suffixTKey)" id="title" v-model="currentField"></v-text-field>
    </template>
    <template v-else-if="fieldDetails.inputType == 'trueFalse'">
      <div class="text-xs-left">
        {{$t(fieldDetails.labelTextTKey) }}
      </div>
      <v-flex xs12>
        <v-switch v-bind:label="`${resourceModel[fieldDetails.fieldName]}`" @change="booleanFieldHandler" v-model="resourceModel[fieldDetails.fieldName]"></v-switch>
      </v-flex>
    </template>
    <template v-else>
      <v-text-field name="title" :label="$t(fieldDetails.labelTextTKey) + ' ' + $t(fieldDetails.suffixTKey)" id="title" v-model="currentField"></v-text-field>
    </template>
  </div>
</template>
<script>
import _ from 'lodash';
export default {
  props: ["resourceModel", "fieldDetails"],
  data() {
    return {}
  },
  computed: {
    // localizedFieldGroups() {}
    currentField: {
      get() {
        if (this.fieldDetails.inputType == "trueFalse") {
          if (this.resourceModel[this.fieldDetails.fieldName]) {
            return true
          } else {
            return false
          }
          debugger
        }
        return _.clone(this.resourceModel[this.fieldDetails.fieldName])
      },
      // // setter
      set(newValue) {
        this.fieldDetails.newValue = newValue
        this.$store.dispatch('updatePendingChanges', this.fieldDetails, newValue)
      }
    }
  },
  methods: {
    booleanFieldHandler(newValue) {
      // if I was to bind v-switch to currentField, the setter would trigger
      // but the UI would not trigger
      this.fieldDetails.newValue = newValue
      this.$store.dispatch('updatePendingChanges', this.fieldDetails, newValue)
    }
  }
}

</script>
