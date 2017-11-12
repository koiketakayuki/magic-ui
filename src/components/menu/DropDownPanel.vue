<template>
  <div class="drop-down-panel"
      :style="{ background: theme.white, 'border-color': theme.gray400 }">
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
.drop-down-panel {
  border: 1px solid;
  box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.5);
}
</style>
