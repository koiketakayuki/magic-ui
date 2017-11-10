<script>
import themeProvider from '../theme/themeProvider'

export default {
  data () {
    return {
      theme: themeProvider.getTheme()
    }
  },
  methods: {
    getTheme (color) {
      return this.theme[color]
    }
  }
}
</script>