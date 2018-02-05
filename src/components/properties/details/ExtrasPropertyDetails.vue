<template lang="pug">
v-layout
  v-flex(md8)
    a-form(v-model="model", v-bind="$data", method="patch", action="settings", @success="onSuccess")
      div(slot="buttons",class="my-4")
        v-btn(dark, class="grey",@click.native="$root.back()") 
          v-icon(dark, left) chevron_left 
          span Back
        v-btn(primary, dark, type='submit') Submit
          v-icon(right, dark) send
  v-flex(md4)
    p {{model}}
</template>
<script>
export default {

  computed: {
    isEdit() {
      return !!this.id
    }
  },
  mounted: function() {
  },

  data() {
    return {
    'model': {
      name: 'Adminify',
      logo: 'http://placeimg.com/128/128/any',
      date: null,

      type: 1,
      status: 1,

      tags: [],
      description: 'An Awesome Site',
      intro: ''
    },
      rules: {},
      messages: {},
      'fields': {
        'name': { label: 'Name' },
        'logo': { label: 'Logo', type: 'image' },
        'date': { label: 'Created At', type: 'datetime' },
        'type': {
          label: 'Type',
          type: 'select',
          options: [
            { text: 'Blog', value: 1 },
            { text: 'Company', value: 2 },
            { text: 'Game', value: 3 }
          ]
        },
        'status': {
          label: 'Status',
          type: 'radios',
          width: 'md3',
          options: [
            { text: 'Enabled', value: 1 },
            { text: 'Disabled', value: 2 }
          ]
        },
        'tags': {
          label: 'Tags',
          type: 'checkboxes',
          width: 'md3',
          options: [
            { text: 'Vue', value: 1 },
            { text: 'React', value: 2 },
            { text: 'Angular', value: 3 }
          ]
        },
        'description': { label: 'Description(Textarea)', type: 'textarea' },
        'intro': { label: 'Intro', type: 'html' }
      }
    }
  },
  watch: {
    '$route': 'fetch',
    'model': 'updateFields'
  },
  methods: {
    getFieldError(fieldName) {
      for (let k in this.errors) {
        let error = this.errors[k]
        if (error.field === fieldName) {
          return error.message
        }
      }
    },
    updateFields() {

    },
    fetch() {
      this.$http.get(`settings/form`, {
        params: { id: this.id }
      }).then(({ data }) => {
        this.model = data.model
        this.fields = data.fields
        this.rules = data.rules
        this.messages = data.messages
      })
    },
    onSubmit() {

    },
    onSuccess(data) {

    }
  },
  created() {

  },
}

</script>
