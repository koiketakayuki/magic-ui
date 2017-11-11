<template>
  <div class="container" :style="{ padding, width, height }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: 'auto'
    },
    height: {
      type: String,
      default: 'auto'
    },
    padding: {
      type: String,
      default: '20px'
    }
  }
}
</script>

<style scoped>
.container {
  transition: padding 0.375s;
}
</style>