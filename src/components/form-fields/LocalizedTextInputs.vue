<template>
  <v-layout wrap row>
    <v-flex v-for="localizedFieldGroup in localizedFieldGroups" xs6 sm6>
      <v-layout column class="ma-3">
        <v-flex v-for="(field, index) in localizedFieldGroup.localizedFields" xs12 sm12 offset-sm0>
          <v-layout row>
            <v-text-field name="title" :label="$t(field.labelTextTKey) + ' ' + $t(field.suffixTKey)" id="title" v-model="resourceModel[field.fieldName]"></v-text-field>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
import _ from 'lodash';
export default {
  props: ["resourceModel"],
  data() {
    return {}
  },
  computed: {
    localizedFieldGroups() {
      let localeCodes = ["En", "Es", "Fr"]
      let fieldBases = [{
        suffixTKey: "webContentLabels.suffix",
        labelTextTKey: "fieldLabels.title",
        fieldType: "simpleInput",
        fieldName: "title_",
        inputType: "text",
        constraints: {
          inputValue: {}
        }
      }, {
        suffixTKey: "webContentLabels.suffix",
        labelTextTKey: "fieldLabels.description",
        fieldType: "simpleInput",
        fieldName: "description_",
        inputType: "text",
        constraints: {
          inputValue: {}
        }
      }]
      let tF = []
      let localizedFieldGroups = []
      localeCodes.forEach(function(localeCode) {
        localizedFieldGroups.push({
          localeCode: localeCode,
          localizedFields: []
        })
        fieldBases.forEach(function(fieldBase) {
          // easy way to make a copy:
          let localizedField = JSON.parse(JSON.stringify(fieldBase))
          localizedField.suffixTKey = fieldBase.suffixTKey + localeCode
          localizedField.fieldName = fieldBase.fieldName + localeCode.toLowerCase()
          console.log(localizedFieldGroups)
          console.log(fieldBase)
          tF.push(localizedField)
          // debugger
          let localizedFieldGroup = _.find(localizedFieldGroups, ["localeCode", localeCode])
          localizedFieldGroup.localizedFields.push(localizedField)
        })
      })
      // debugger
      // let tF = [ {
      //   labelTextTKey: "webContentLabels.suffixDe",
      //   fieldType: "simpleInput",
      //   fieldName: "title_de",
      //   inputType: "text",
      //   constraints: {
      //     inputValue: {}
      //   }
      // }]
      return localizedFieldGroups
    }
  },
  methods: {

  }
}

</script>
