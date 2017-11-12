<template>
  <div class="side-bar" :style="{ background: theme.white, width: `${computedWidth}px` }">
    <div class="side-bar__sash" :style="{ background: theme.gray400 }" @mousedown="startResize" v-if="show"></div>
    <slot name="header" v-if="show"></slot>
    <div class="side-bar__content">
      <slot v-if="show"></slot>
    </div>
  </div>
</template>

<script>
import Theme from '~/Theme'

const minWidth = 320

export default {
  model: {
    prop: 'show',
    event: 'resize'
  },
  mixins: [Theme],
  mounted () {
    document.body.addEventListener('mousemove', this.resize)
    document.body.addEventListener('mouseup', this.finishResize)
  },
  beforeDestroy () {
    document.body.removeEventListener('mousemove', this.resize)
    document.body.removeEventListener('mouseup', this.finishResize)
  },
  data () {
    return {
      previousX: 0,
      isResizing: false,
      width: minWidth
    }
  },
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    computedWidth () {
      return this.show ? this.width : 0
    }
  },
  methods: {
    resize (e) {
      if (this.isResizing) {
        const x = e.clientX
        const newWidth = this.width + (x - this.previousX)
        this.previousX = x
        this.width = newWidth

        if (newWidth < minWidth) {
          this.$emit('resize', false)
        } else {
          this.$emit('resize', true)
        }
      }
    },
    startResize (e) {
      document.body.style.userSelect = 'none'
      this.isResizing = true
      this.previousX = e.clientX
    },
    finishResize (e) {
      document.body.style.userSelect = null
      this.isResizing = false
    }
  }
}
</script>

<style scoped>
.side-bar {
  position: relative;
}

.side-bar__content {
  padding-right: 5px;
}

.side-bar__sash {
  position: absolute;
  right: 0;
  width: 5px;
  height: 100%;
  cursor: col-resize;
}
</style>
