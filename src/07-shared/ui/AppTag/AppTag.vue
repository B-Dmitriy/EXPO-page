<template>
  <div
      class="app_tag"
      :style="tagStyles"
      @click="$emit('tag-click', tag.id)"
  >
    <span class="app_tag_text" :title="tag.description">
      {{ tag.title }}
      <info-icon :style="svgStyle" />
    </span>
  </div>
</template>

<script>
import InfoIcon from '@ICONS/info.svg?component'

export default {
  components: {InfoIcon},
  name: "app-tag",
  props: {
    tag: {
      type: Object,
      require: true,
    }
  },
  computed: {
    tagStyles() {
      return {
        color: this.tag.textColor,
        'background-color': this.tag.bgColor,
      }
    },
    svgStyle() {
      return {
        fill: this.tag.textColor
      }
    }
  }
}
</script>

<style scoped>
.app_tag {
  padding: 4px 8px;
  border-radius: 8px;
  margin: 0 4px;
  display: inline-block;
  position: relative;
  cursor: pointer;
}
.app_tag_text {
  display: flex;
  align-items: center;
}
.app_tag_text svg {
  margin-left: 4px;
}
</style>