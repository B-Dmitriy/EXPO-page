<template>
  <button class="app_button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "app-button",
}
</script>

<style scoped>
.app_button {
  background: none;
  border: 1px seagreen solid;
  border-radius: 4px;
  padding: 4px 8px;
}
</style>