<template>
  <button class="button"
          :style="style"
          :class="{
            'button--disabled': disabled,
            'button--medium': size === 'medium',
            'button--large': size === 'large'
          }"
          @click="onClick"
          @mouseenter="hover = true"
          @mouseleave="hover = false">
    <slot></slot>
  </button>
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
    background: {
      type: String,
      default: 'white'
    },
    type: {
      type: String,
      default: 'primary'
    },
    font: {
      type: String,
      default: 'font'
    },
    activeFont: {
      type: String,
      default: 'white'
    },
    size: {
      type: String,
      default: 'medium'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonColor () {
      if (this.active) {
        return this.getTheme(this.activeFont)
      }

      if (this.disabled) {
        return this.theme.gray700
      }

      if (this.hover) {
        return this.getTheme(this.type)
      }

      return this.getTheme(this.font)
    },
    buttonBackground () {
      if (!this.active) {
        if (this.disabled) {
          return this.theme.gray400
        }
        return this.getTheme(this.background)
      }

      return this.getTheme(this.type)
    },
    style () {
      return {
        color: this.buttonColor,
        background: this.buttonBackground
      }
    }
  },
  methods: {
    onClick (event) {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    }
  }
}
</script>

<style>
.button {
  display: inline-block;
  border: 1px solid #ddd;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
}

.button:hover {
  opacity: 0.7;
}

.button--disabled {
  filter: grayscale(50%);
  opacity: 0.7;
  cursor: not-allowed !important;
}

.button--medium {
  padding: 6px 8px;
  font-size: 14px;
}

.button--large {
  padding: 8px 16px;
  font-size: 16px;
}
</style>
