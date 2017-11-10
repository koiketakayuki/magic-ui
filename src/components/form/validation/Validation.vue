<template>
  <div>
    <mu-error-message v-if="show && message">{{ message }}</mu-error-message>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'valid',
    event: 'validate'
  },
  mounted () {
    this.validate()
  },
  props: {
    value: {
      required: true
    },
    validation: {
      type: Boolean,
      default: true
    },
    valid: {
      type: Boolean,
      default: true
    },
    validator: {
      type: Function
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value () {
      this.validate()
    }
  },
  computed: {
    show () {
      return true
    },
    message () {
      if (this.required && this.isEmptyValue(this.value)) {
        return '必須項目です'
      }

      if (this.validator) {
        const result = this.validator(this.value)
        return result
      }

      return null
    }
  },
  methods: {
    validate () {
      if (this.validation) {
        this.$emit('validate', this.isEmptyValue(this.message))
      }
    },
    isEmptyValue (value) {
      if (Array.isArray(value) && value.length === 0) {
        return true
      }

      return value === null || value === undefined || value === ''
    }
  }
}
</script>

