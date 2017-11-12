<template>
  <i class="icon-button"
     :class="{
       disabled
     }"
     :style="{ color }"
     @mouseenter="hover = true"
     @mouseleave="hover = false"
     @click="onClick">
  </i>
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
  props: {
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary'
    },
    default: {
      type: String,
      default: 'font'
    }
  },
  computed: {
    opacity () {
      if (this.disabled || (!this.active && this.hover)) {
        return 0.7
      }

      return 1
    },
    color () {
      if (this.disabled) {
        return this.theme.gray500
      }
      if (!this.disabled && (this.hover || this.active)) {
        return this.getTheme(this.type)
      }
      return this.getTheme(this.default)
    }
  },
  methods: {
    onClick (e) {
      if (!this.disbled) {
        this.$emit('click', e)
      }
    }
  }
}
</script>

<style scoped>
.icon-button {
  display: inline-block;
  cursor: pointer;
}
</style>