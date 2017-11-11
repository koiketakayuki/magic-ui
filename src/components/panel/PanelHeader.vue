<template>
  <div class="panel-header" :style="style">
    <slot></slot>
  </div>
</template>

<script>
import Theme from '~/Theme'

export default {
  mixins: [Theme],
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    style () {
      return {
        background: this.getTheme(this.type),
        color: this.theme.white
      }
    }
  }
}
</script>

<style scoped>
.panel-header {
  flex-shrink: 0;
  font-weight: bold;
  font-size: 16px;
  padding: 6px 16px;
}
</style>
