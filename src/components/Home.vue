<template>
  <v-container fluid>
    <h1 align="center" justify="center"> Exercises </h1>
    <v-row>
      <div v-for="exercise in listExercises" :key="exercise.id">
          <v-col cols="12">
            <v-card>
              <v-card-title>Title: {{ exercise.title }}</v-card-title>
              <v-card-subtitle> Langage: {{ exercise.lang }}</v-card-subtitle>
              <v-card-text>
                Instructions: {{ exercise.instructions }}<br>
                Unit Tests: {{ exercise.tests }}<br>
                Date: {{ exercise.creation_date }}<br>
              </v-card-text>
            </v-card>
          </v-col>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
  }),

  computed: {
    ...mapState('modules', ['modules']),
    ...mapState('sessions', ['sessions']),
    ...mapState('exercises', ['exercises']),
    ...mapGetters('sessions', ['getSessionsByModuleId']),
    ...mapGetters('exercises', ['getExercisesByModuleId'])
  },

  async mounted () {
    await this.fetchModule()
    await Promise.all(
      this.module.map(m => this.fetchSessionForModule({ moduleId: m.id }))
    )
    await Promise.all(
      this.module.map(s => this.fetchExercisesForSession({ sessionId: s.id }))
    )
  },

  methods: {
    ...mapActions('modules', ['fetchModules']),
    ...mapActions('sessions', ['fetchSessionsForModule']),
    ...mapActions('exercises', ['fetchExercisesForSession']),
    getFirstExerciseIdOfSession  (sessId) {
      const exos = this.getExercisesByModuleId(sessId)
      if (exos.length) {
        return exos[0].id
      } else {
        return 0
      }
    }
  }

  /*  mounted () {
    axios.get('http://localhost:3000/api/v1/exercises')
      .then((response) => {
        this.listExercises = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  } */
}
</script>
