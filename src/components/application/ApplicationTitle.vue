<template>
  <div class="application-title" :style="{ background: theme.white, color: theme.gray700 }">
    <h1 class="heading-lv01"><slot></slot></h1>
  </div>
</template>

<script>
import Theme from '~/Theme'

export default {
  mixins: [Theme]
}
</script>


<style scoped>
.application-title {
  padding: 12px 0 12px 20px;
  flex-shrink: 0;
}
</style>
