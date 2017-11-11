<script>
import themeProvider from '../theme/themeProvider'

export default {
  data () {
    return {
      theme: themeProvider.getTheme()
    }
  },
  methods: {
    getTheme (type) {
      return this.theme[type]
    }
  }
}
</script>