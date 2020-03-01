<template>
  <div class="exercise-editor-ace-editor" id="editor">

  </div>
</template>

<script>
import ace from 'ace-builds/src-noconflict/ace'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/webpack-resolver'

export default {
  mounted () {
    this.editor = ace.edit('editor')
    this.editor.setTheme('ace/theme/monokai')
    this.editor.session.setMode(`ace/mode/${this.lang}`)
  }
}
</script>

<style scoped>
.exercise-editor-ace-editor {
  position: relative;
  min-height: 20rem;
}
</style>
