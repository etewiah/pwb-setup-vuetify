<template>
  <v-layout row>
    <v-flex xs12>
      <form @submit.prevent="onUpdateProperty">
        <LocalizedTextInputs v-bind:resourceModel="currentProperty"></LocalizedTextInputs>
        <v-layout row>
          <v-flex xs12 sm12 offset-sm0>
            <v-btn class="primary" type="submit">Update</v-btn>
          </v-flex>
        </v-layout>
      </form>
    </v-flex>
  </v-layout>
</template>
<script>
import LocalizedTextInputs from '@/components/form-fields/LocalizedTextInputs'
export default {
  components: {
    LocalizedTextInputs
  },
  props: ["currentProperty"],
  data() {
    return {
      // titleFields: [{
      //   labelTextTKey: "webContentLabels.suffixEn",
      //   fieldType: "simpleInput",
      //   fieldName: "title_en",
      //   inputType: "text",
      //   constraints: {
      //     inputValue: {}
      //   }
      // }, {
      //   labelTextTKey: "webContentLabels.suffixDe",
      //   fieldType: "simpleInput",
      //   fieldName: "title_de",
      //   inputType: "text",
      //   constraints: {
      //     inputValue: {}
      //   }
      // }],

    }
  },
  // computed: {
  // },
  // mounted: function() {
  //   this.$store.dispatch('loadProperty', this.$route.params["id"])
  // },
  methods: {
    onUpdateProperty() {
      this.$store.dispatch('updateProperty')
    }
  }
}

</script>
