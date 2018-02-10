<template>
  <div class="mr-4">
    <template v-if="fieldDetails.inputType == 'number'">
      <v-text-field name="title" :label="$t(fieldDetails.labelTextTKey) + ' ' + $t(fieldDetails.suffixTKey)" id="title" v-model="currentField" ></v-text-field>
    </template>
    <template v-else-if="fieldDetails.inputType == 'trueFalse'">
      <div class="text-xs-left">
        {{$t(fieldDetails.labelTextTKey) }}
      </div>
      <v-flex xs12>
        <v-switch v-bind:label="`${currentField}`"  v-model="resourceModel[fieldDetails.fieldName]"></v-switch>
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
        return _.clone(this.resourceModel[this.fieldDetails.fieldName])
      },
      // // setter
      set(newValue) {
        debugger
      }
    }
  },
  methods: {
    // changeHandler2(param1, param2, param3) {
    //   // debugger
    // },
    // changeHandler(param1, param2, param3) {
    //   // debugger
    // }
  }
}

</script>
