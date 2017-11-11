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
    background: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    style () {
      return {
        background: this.getTheme(this.background),
        color: this.theme.white
      }
    }
  }
}
</script>

<style scoped>
.panel-header {
  position: relative;
  flex-shrink: 0;
  font-weight: bold;
  font-size: 18px;
  padding: 6px 16px;
}
</style>
