<template>
  <h1>Work</h1>
  <app-button v-on:click="clickHandler">Click</app-button>
  <app-tag
      v-for="tag in this.tags"
      key="tag.id"
      :id="tag.id"
      :description="tag.description"
      :title="tag.title"
      :textColor="tag.textColor"
      :bgColor="tag.bgColor"
  />
</template>

<script>

export default {
  data() {
    return {
      tags: [
        {"id": 1, "title": "build", "description": "Test text", textColor: "#8f1818", bgColor: "#ff6f6f"},
        {"id": 2, "title": "ui", "description": "UI tools and libraries", textColor: "#3f7200", bgColor: "#94ff9a"},
        {"id": 3, "title": "config", "description": "", textColor: "#8f1818", bgColor: "#ff6f6f"},
        {"id": 4, "title": "webpack", "description": "", textColor: "#8f1818", bgColor: "#ff6f6f"},
        {"id": 5, "title": "react env", "description": "", textColor: "#8f1818", bgColor: "#ff6f6f"},
        {"id": 1686290012, "title": "Golang", "description": "Programm language", textColor: "#8f1818", bgColor: "#ff6f6f"}]
    }
  },
  methods: {
    clickHandler() {
      alert('click')
    },
    fetchTags() {
      /** CORS ERROR */
      // fetch('http://localhost:8011/api/tags')
      //     .then((res) => res.json())
      //     .then((json) => this.tags = json)
      //     .catch((err) => console.warn(err))
    }
  },
  mounted() {
    // this.fetchTags()
  }
}
</script>

<style scoped>

</style>