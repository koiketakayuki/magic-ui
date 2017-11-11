<template>
  <div class="panel" :style="style">
    <slot></slot>
  </div>
</template>

<script>
import Theme from '~/Theme'

export default {
  mixins: [Theme],
  computed: {
    style () {
      return {
        'border-color': this.theme.gray400
      }
    }
  }
}
</script>

<style>
.panel {
  display: block;
  border: 1px solid;
  box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.12), 0 3px 3px 0px rgba(0, 0, 0, 0.2);
}
</style>
