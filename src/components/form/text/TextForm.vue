<template>
  <div class="text-form-wrap">
    <template v-if="readOnly">{{ value }}</template>
    <input v-else
           type="text"
           class="text-form"
           :class="{
             'text-form--disabled': disabled,
             'text-form--read-only': readOnly
           }"
           :style="style"
           :value="value"
           :maxLength="maxLength"
           :disabled="disabled"
           @mouseenter="hover = true"
           @mouseleave="hover = false"
           @focus="focus = true"
           @blur="focus = false"
           @input="updateValue($event.target.value)">
  </div>
</template>

<script>
import FormBase from '~/form/FormBase'

export default {
  mixins: [FormBase],
  data () {
    return {
      hover: false,
      focus: false
    }
  },
  props: {
    width: {
      type: String,
      default: '100%'
    },
    maxLength: {
      type: Number,
      default: 100
    }
  },
  computed: {
    font () {
      if (this.disabled || this.valid) {
        return this.theme.font
      }

      return this.theme.error
    },
    background () {
      if (this.disabled) {
        return this.theme.gray200
      }

      if (!this.valid) {
        return this.theme.errorBackground
      }

      return this.theme.white
    },
    border () {
      if (!this.disabled && !this.valid) {
        return this.theme.error
      }

      if (!this.disabled && (this.hover || this.focus)) {
        return this.getTheme(this.color)
      }

      return this.theme.gray400
    },
    style () {
      return {
        color: this.font,
        background: this.background,
        'border-color': this.border
      }
    }
  }
}
</script>

<style scoped>
.text-form-wrap {
  display: inline-block;
}

.text-form {
  padding: 6px 10px 8px 10px;
  border: solid 1px;
  font-size: 14px;
  line-height: 1.6;
  box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.1) inset;
}

.text-form--disabled {
  cursor: not-allowed !important;
}

.text-form--read-only {
  cursor: default;
}
</style>

