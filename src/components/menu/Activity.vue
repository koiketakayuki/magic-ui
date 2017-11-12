<template>
  <d-icon-button class="activity fa fa-2x"
                 :title="name"
                 :class="{ 'activity--active': active }"
                 :active="active"
                 default="gray500"
                 type="white"
                 @click="onClick"></d-icon-button>
</template>

<script>
import DIconButton from '~/button/IconButton'

export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick (e) {
      this.$emit('click', e)
    }
  },
  components: {
    DIconButton
  }
}
</script>

<style scoped>
.activity {
  padding: 16px;
}
</style>


