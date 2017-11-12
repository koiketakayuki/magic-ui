<template>
  <div class="navigation-item"
       :class="{ 'navigation-item--active': active }"
       @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>


<style scoped>
.navigation-item {
  display: inline-block;
  cursor: pointer;
  font-size: 14px;
  opacity: 0.8;
}

.navigation-item:hover {
  opacity: 1.0;
}
.navigation-item--active {
  opacity: 1.0;
}
</style>

