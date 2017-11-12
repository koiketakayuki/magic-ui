<template>
  <d-container>
    <h2 class="heading-lv02"
        v-if="name">
      {{ name }}
    </h2>
    <slot name="header"
          v-else></slot>
    <d-container padding="10px">
      <slot></slot>
    </d-container>
  </d-container>
</template>

<script>
import DContainer from '~/layout/Container'

export default {
  data () {
    return {
      collapse: false
    }
  },
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  components: {
    DContainer
  }
}
</script>
