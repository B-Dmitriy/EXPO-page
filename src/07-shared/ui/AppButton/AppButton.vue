<template>
  <button class="app_button" :class="buttonClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "app-button",
  props: {
    view: {
      type: String,
      default: 'filled',
      validator(value) {
        return ['filled', 'outline'].includes(value)
      }
    }
  },
  computed: {
    buttonClass() {
      return {
        filled: this.view === 'filled',
        outline: this.view === 'outline'
      }
    }
  }
}
</script>

<style scoped>
.app_button {
  border-radius: 4px;
  padding: 4px 8px;
}

.app_button:hover {
  opacity: 0.8;
}

.app_button:active {
  opacity: 0.6;
}


.filled {
  background: seagreen;
  border: 1px seagreen solid;
}

.outline {
  background: none;
  border: 1px seagreen solid;
}
</style>