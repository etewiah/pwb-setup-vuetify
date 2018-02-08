<template>
  <v-layout class="ma-3" row>
    <template v-if="fieldDetails.inputType == 'number'">
      <v-text-field name="title" :label="$t(fieldDetails.labelTextTKey) + ' ' + $t(fieldDetails.suffixTKey)" id="title" v-model="resourceModel[fieldDetails.fieldName]"></v-text-field>
    </template>
    <template v-else-if="fieldDetails.inputType == 'trueFalse'">
      <v-layout :wrap="false" row>
        <v-subheader>{{$t(fieldDetails.labelTextTKey) }}</v-subheader>
        <v-flex >{{$t(fieldDetails.labelTextTKey) }}</v-flex>
      </v-layout>
      <br>
      <v-layout :wrap="false" row>
        <v-switch v-bind:label="`${resourceModel[fieldDetails.fieldName]}`" v-model="resourceModel[fieldDetails.fieldName]"></v-switch>
      </v-layout>
    </template>
    <template v-else>
      <v-text-field name="title" :label="$t(fieldDetails.labelTextTKey) + ' ' + $t(fieldDetails.suffixTKey)" id="title" v-model="resourceModel[fieldDetails.fieldName]"></v-text-field>
    </template>
  </v-layout>
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
