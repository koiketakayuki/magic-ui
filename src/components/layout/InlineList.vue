<script>
import { reduce } from 'lodash'

export default {
  render (createElement) {
    const self = this
    let slot = this.$slots.default

    if (slot) {
      const length = slot.length
      slot = reduce(slot, (result, element, i) => {
        if (element.tag === undefined) {
          return result
        }

        result.push(createElement('div', {
          attrs: {
            'class': 'inline-block'
          },
          style: {
            marginRight: (i < length - 1) ? self.gap : '0px'
          }
        }, [element]))
        return result
      }, [])
    }

    return createElement('div', {
      attrs: {
        'class': 'inline-block'
      }
    }, slot)
  },
  props: {
    gap: {
      type: String,
      default: '5px'
    }
  }
}
</script>
