<template>
  <v-container fluid>
    <h1 align="center" justify="center"> Exercises </h1>
    <v-btn block color="secondary" dark @click="getExerecices()">Create</v-btn>
    <div id="list">
      <div v-for="exercise in listExercises" :key="exercise.id">
        {{ exercise.title }}
      </div>
    </div>
  </v-container>
</template>

<script>
import ace from 'ace-builds/src-noconflict/ace'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/webpack-resolver'
import axios from 'axios'

export default {
  name: 'list',
  data: () => ({
    return: {
      listExercises: []
    }
  }),

  methods: {
    async getExerecices () {
      const res = axios.get('http://localhost:3000/api/v1/exercises')
      try {
        this.listExercises = res.data
      } catch (err) {
        console.log(err)
      }
    },

    mounted () {
      this.editor = ace.edit('editor')
      this.editor.setTheme('ace/theme/monokai')
      this.editor.session.setMode(`ace/mode/${this.lang}`)
    }

  }
}
</script>
