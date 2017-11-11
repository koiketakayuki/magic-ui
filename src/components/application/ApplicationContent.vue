<template>
  <div class="application-content">
    <slot></slot>
  </div>
</template>

<script>
import Theme from '~/Theme'

export default {
  mixins: [Theme]
}
</script>

<style scoped>
.application-content {
  display: flex;
  position: relative;
  flex-grow: 1;
}
</style>


