<template>
  <v-container>
    details: {{ property.attributes.title }}
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onUpdateProperty">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="title" label="Title" id="title" v-model="property.attributes.title" required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn class="primary" :disabled="!formIsValid" type="submit">Update</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
    property() {
      return this.$store.state.property
    },
    formIsValid() {
      return this.title !== '' &&
        this.location !== '' &&
        this.imageUrl !== '' &&
        this.description !== ''
    },
  },
  mounted: function() {
    this.$store.dispatch('loadProperty', this.$route.params["id"])
  },
  methods: {
    onUpdateProperty() {
      if (!this.formIsValid) {
        return
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: this.submittableDateTime
      }
      debugger
      // this.$store.dispatch('createMeetup', meetupData)
      // this.$router.push('/meetups')
    }

  }
}

</script>
