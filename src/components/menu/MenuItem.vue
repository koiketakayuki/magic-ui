<template>
  <div class="menu-item"
       @mouseleave="hover = false"
       @mouseover="hover = true"
       @click="$emit('click', $event)"
       :style="style">
    <slot></slot>
  </div>
</template>

<script>
import Theme from '~/Theme'

export default {
  mixins: [Theme],
  data () {
    return {
      hover: false
    }
  },
  computed: {
    style () {
      if (!this.hover) {
        return {}
      }

      return {
        opacity: 1,
        color: this.theme.primary,
        background: this.theme.gray200
      }
    }
  }
}
</script>


<style scoped>
.menu-item {
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  padding: 10px 20px;
  opacity: 0.8
}
</style>

