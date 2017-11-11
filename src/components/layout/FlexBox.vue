<template>
  <div class="flex-box" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    flexDirection: {
      type: String,
      default: 'row'
    },
    flexWrap: {
      type: String,
      default: 'nowrap'
    },
    alignItems: {
      type: String,
      default: 'stretch'
    },
    justifyContent: {
      type: String,
      default: 'flex-start'
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
        'flex-direction': this.flexDirection,
        'flex-wrap': this.flexWrap,
        'align-items': this.alignItems,
        'justify-content': this.justifyContent,
        width: this.height,
        height: this.height
      }
    }
  }
}
</script>

<style scoped>
.flex-box {
  display: flex;
}
</style>