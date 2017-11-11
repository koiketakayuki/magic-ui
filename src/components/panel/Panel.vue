<template>
  <div class="panel" :style="style">
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
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
    },
    border: {
      type: String,
      default: 'gray400'
    },
    width: {
      type: String,
      default: 'auto'
    },
    height: {
      type: String,
      default: 'auto'
    }
  },
  computed: {
    computedBorder () {
      return this.isError ? this.type : this.border
    },
    background () {
      return this.isError ? this.theme.errorBackground : this.theme.white
    },
    style () {
      return {
        width: this.width,
        height: this.height,
        background: this.background,
        'border-color': this.getTheme(this.computedBorder)
      }
    },
    isError () {
      return this.type === 'error'
    }
  }
}
</script>

<style>
.panel {
  display: flex;
  flex-flow: column;
  border: 1px solid;
  box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.12), 0 3px 3px 0px rgba(0, 0, 0, 0.2);
}
</style>
