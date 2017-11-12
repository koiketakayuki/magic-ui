<template>
  <div class="side-bar__header" :style="{ background: theme.gray200, color: theme.gray700, 'border-color': theme.gray400 }">
    <div class="side-bar__title">
      <h2 class="heading-lv02"><slot></slot></h2>
    </div>
    <div class="side-bar__delete-button">
      <mu-icon-button class="fa fa-remove fa-lg"
                      default="gray400"
                      type="error"
                      @click="close"></mu-icon-button>
    </div>
  </div>
</template>

<script>
import Theme from '~/Theme'
import MuIconButton from '~/button/IconButton'

export default {
  mixins: [Theme],
  methods: {
    close () {
      this.$emit('close')
    }
  },
  components: {
    MuIconButton
  }
}
</script>


<style scoped>
.side-bar__header {
  position: relative;
  padding: 16px;
}

.side-bar__delete-button {
  position: absolute;
  margin: auto;
  top: 50%;
  right: 12px;
  transform: translateY(-50%)
}

.side-bar__title {
  font-size: 14px;
}
</style>
