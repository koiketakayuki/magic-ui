<template>
  <div class="loading-container">
    <div class="square-loading"
         :style="{
            background: color,
            'animation-duration': duration
          }">
    </div>
  </div>
</template>

<script>
import LoadingBase from '~/loading/LoadingBase'

export default {
  mixins: [LoadingBase]
}
</script>

<style scoped>
.loading-container {
  text-align: center;
  width: 100%;
  min-height: 100px;
}

.square-loading {
  width: 100px;
  height: 100px;
  display: inline-block;
  background: #fff;
  animation-name: square-spin;
  animation-timing-function: cubic-bezier(.09, .57, .49, .9);
  animation-iteration-count: infinite;
}

@keyframes square-spin {
  25% {
    transform: perspective(100px) rotateX(180deg) rotateY(0);
  }
  50% {
    transform: perspective(100px) rotateX(180deg) rotateY(180deg);
  }
  75% {
    transform: perspective(100px) rotateX(0) rotateY(180deg);
  }
  100% {
    transform: perspective(100px) rotateX(0) rotateY(0);
  }
}
</style>