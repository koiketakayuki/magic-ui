<template>
  <component :is="component"></component>
</template>

<script>
import LoadingBase from '~/loading/LoadingBase'
import CircularLoading from '~/loading/CircularLoading'
import SquareLoading from '~/loading/SquareLoading'

const types = {
  CircularLoading,
  SquareLoading
}

export default {
  mixins: [LoadingBase],
  props: {
    component: {
      type: String,
      default: 'CircularLoading'
    }
  },
  components: types,
  types
}
</script>
