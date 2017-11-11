<template>
  <mu-flex-box :justifyContent="justifyContent">
    <mu-inline-list gap="10px">
      <slot></slot>
    </mu-inline-list>
  </mu-flex-box>
</template>

<script>
import MuFlexBox from '~/layout/FlexBox'
import MuInlineList from '~/layout/InlineList'

export default {
  props: {
    position: {
      type: String,
      default: 'right'
    }
  },
  computed: {
    justifyContent () {
      if (this.position === 'left') {
        return 'flex-start'
      }

      if (this.position === 'center') {
        return 'center'
      }

      return 'flex-end'
    }
  },
  components: {
    MuFlexBox,
    MuInlineList
  }
}
</script>