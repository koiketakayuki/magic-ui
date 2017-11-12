<script>
import Theme from '~/Theme'

export default {
  mixins: [Theme],
  props: {
    duration: {
      type: String,
      default: '3s'
    }
  },
  computed: {
    color () {
      return this.theme.primary
    }
  }
}
</script>
