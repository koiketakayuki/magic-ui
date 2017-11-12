<template>
  <div class="panel" :style="style">
    <slot name="header"></slot>
    <div class="panel__content">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import Theme from '~/Theme'

export default {
  mixins: [Theme],
  props: {
    background: {
      type: String,
      default: 'white'
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
    style () {
      return {
        width: this.width,
        height: this.height,
        background: this.getTheme(this.background),
        'border-color': this.getTheme(this.border)
      }
    }
  }
}
</script>

<style scoped>
.panel {
  display: flex;
  overflow: hidden;
  flex-flow: column;
  border: 1px solid;
}

.panel__content {
  flex-grow: 1;
}
</style>
