<template>
  <div class="drop-down" v-click-outside="hide">
    <slot></slot>
    <transition name="fade">
      <div v-if="show" class="drop-down__content" :style="style">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import Theme from '~/Theme'

export default {
  mixins: [Theme],
  model: {
    prop: 'show'
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    style () {
      if (this.align === 'right') {
        return { right: 0, color: this.theme.font }
      }

      return { left: 0, color: this.theme.font }
    }
  },
  methods: {
    hide () {
      this.$emit('input', false)
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}

.fade-enter, .fade-leave-to {
  opacity: 0
}

.drop-down {
  position: relative;
  display: inline-block;
}

.drop-down__content {
  position: absolute;
  top: 100%;
  z-index: 10;
}

</style>
