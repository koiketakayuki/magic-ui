<script>
import Theme from '~/Theme'

export default {
  mixins: [Theme],
  model: {
    prop: 'value'
  },
  props: {
    value: {
      required: true
    },
    valid: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateValue (value) {
      if (!this.disabled && !this.readOnly) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
