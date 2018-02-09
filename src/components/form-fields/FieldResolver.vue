<template>
  <div class="mr-4">
    <template v-if="fieldDetails.inputType == 'number'">
      <v-text-field name="title" :label="$t(fieldDetails.labelTextTKey) + ' ' + $t(fieldDetails.suffixTKey)" id="title" v-model="resourceModel[fieldDetails.fieldName]"></v-text-field>
    </template>
    <template v-else-if="fieldDetails.inputType == 'trueFalse'">
      <div class="text-xs-left">
        {{$t(fieldDetails.labelTextTKey) }}
      </div>
      <v-flex xs12>
        <v-switch v-bind:label="`${resourceModel[fieldDetails.fieldName]}`" v-model="resourceModel[fieldDetails.fieldName]"></v-switch>
      </v-flex>
    </template>
    <template v-else>
      <v-text-field name="title" :label="$t(fieldDetails.labelTextTKey) + ' ' + $t(fieldDetails.suffixTKey)" id="title" v-model="resourceModel[fieldDetails.fieldName]"></v-text-field>
    </template>
  </div>
</template>
<script>
// import _ from 'lodash';
export default {
  props: ["resourceModel", "fieldDetails"],
  data() {
    return {}
  },
  computed: {
    localizedFieldGroups() {}
  },
  methods: {

  }
}

</script>
