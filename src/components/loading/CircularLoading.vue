<template>
  <div class="loading" :style="{ color, borderColor: color}">
    <div class="loading__spinner"></div>
    <div class="loading__text">Loading...</div>
  </div>
</template>

<script>
import LoadingBase from '~/loading/LoadingBase'

export default {
  mixins: [LoadingBase]
}
</script>

<style scoped>
.loading {
  position: relative;
  width: 100%;
  min-height: 100px;
}

.loading * {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
  width: 100px;
  height: 100px;
}

.loading__spinner {
  border: 1px solid;
  border-right-color: transparent;
  border-radius: 50%;
  content: "";
  animation: fa-spin 1.5s infinite linear;
}
.loading__text {
  line-height: 100px;
  text-align: center;
  white-space: nowrap;
}
</style>