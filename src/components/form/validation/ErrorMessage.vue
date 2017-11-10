<template>
  <div :style="{ color: theme.error }">
    <slot></slot>
  </div>
</template>

<script>
import Theme from '~/Theme'

export default {
  mixins: [Theme]
}
</script>
