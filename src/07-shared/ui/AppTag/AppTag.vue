<template>
  <div
      class="app_tag"
      :style="tagStyles"
  >
    <span class="app_tag_text">
      {{ title }}
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
    id: {
      type: Number,
      require: true
    },
    title: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    textColor: {
      type: String,
      require: true,
    },
    bgColor: {
      type: String,
      require: true,
    },
  },
  computed: {
    tagStyles() {
      return {
        color: this.textColor,
        'background-color': this.bgColor,
      }
    },
    svgStyle() {
      return {
        fill: this.textColor
      }
    }
  }
}
</script>

<style scoped>
.app_tag {
  padding: 4px 8px;
  border-radius: 4px;
  margin: 0 4px;
  display: inline-block;
}
.app_tag_text {
  display: flex;
  align-items: center;
}
.app_tag_text svg {
  margin-left: 4px;
  cursor: pointer;
}
</style>