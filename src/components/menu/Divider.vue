<template>
  <div class="divider" :style="{ background: theme.gray400 }"></div>
</template>

<script>
import Theme from '~/Theme'

export default {
  mixins: [Theme]
}
</script>


<style scoped>
.divider {
  height: 1px;
  overflow: hidden;
}
</style>
