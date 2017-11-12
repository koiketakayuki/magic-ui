<template>
  <div class="resizable" :style="style">
    <div v-if="top" class="sash-top" :style="{ height: sashSize, background }" @mousedown="startResizeY($event, false)"></div>
    <div v-if="right" class="sash-right" :style="{ width: sashSize, background }" @mousedown="startResizeX($event, true)"></div>
    <div v-if="bottom" class="sash-bottom" :style="{ height: sashSize, background }" @mousedown="startResizeY($event, true)"></div>
    <div v-if="left" class="sash-left" :style="{ width: sashSize, background }" @mousedown="startResizeX($event, false)"></div>
    <div v-if="top && right" class="sash-top-right" :style="{ width: sashSize, height: sashSize, background }" @mousedown="startResizeX($event, true);startResizeY($event, false);"></div>
    <div v-if="bottom && right" class="sash-bottom-right" :style="{ width: sashSize, height: sashSize, background }" @mousedown="startResizeX($event, true);startResizeY($event, true);"></div>
    <div v-if="bottom && left" class="sash-bottom-left" :style="{ width: sashSize, height: sashSize, background }" @mousedown="startResizeX($event, false);startResizeY($event, true);"></div>
    <div v-if="top && left" class="sash-top-left" :style="{ width: sashSize, height: sashSize, background }" @mousedown="startResizeX($event, false);startResizeY($event, false);"></div>
    <div :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Theme from '~/Theme'

export default {
  mixins: [Theme],
  mounted () {
    document.body.addEventListener('mousemove', this.resize)
    document.body.addEventListener('mouseup', this.finishResize)
  },
  beforeDestroy () {
    document.body.removeEventListener('mousemove', this.resize)
    document.body.removeEventListener('mouseup', this.finishResize)
  },
  props: {
    top: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    },
    sashSize: {
      type: String,
      default: '3px'
    },
    sashColor: {
      type: String,
      default: 'gray300'
    },
    initialWidth: {
      type: String,
      default: 'auto'
    },
    initialHeight: {
      type: String,
      default: 'auto'
    }
  },
  data () {
    return {
      previousX: 0,
      previousY: 0,
      isResizingX: false,
      isResizingY: false,
      isPositiveDirectionX: true,
      isPositiveDirectionY: true,
      width: null,
      height: null
    }
  },
  computed: {
    style () {
      const width = this.width === null ? this.initialWidth : `${this.width}px`
      const height = this.height === null ? this.initialHeight : `${this.height}px`

      return {
        width,
        height
      }
    },
    background () {
      return this.getTheme(this.sashColor)
    },
    contentStyle () {
      const style = { 'height': '100%' }

      if (this.top) {
        style['padding-top'] = this.sashSize
      }

      if (this.right) {
        style['padding-right'] = this.sashSize
      }

      if (this.bottom) {
        style['padding-bottom'] = this.sashSize
      }

      if (this.left) {
        style['padding-left'] = this.sashSize
      }

      return style
    }
  },
  methods: {
    resize (e) {
      if (this.isResizingX) {
        this.resizeX(e)
      }

      if (this.isResizingY) {
        this.resizeY(e)
      }
    },
    resizeX (e) {
      const x = e.clientX
      const diff = this.isPositiveDirectionX ? (x - this.previousX) : (this.previousX - x)
      const newWidth = this.width + diff
      this.previousX = x
      this.width = newWidth
    },
    resizeY (e) {
      const y = e.clientY
      const diff = this.isPositiveDirectionY ? (y - this.previousY) : (this.previousY - y)
      const newHeight = this.height + diff
      this.previousY = y
      this.height = newHeight
    },
    startResizeX (e, isPositiveDirectionX) {
      document.body.style.userSelect = 'none'
      this.isResizingX = true
      this.isPositiveDirectionX = isPositiveDirectionX
      this.previousX = e.clientX
    },
    startResizeY (e, isPositiveDirectionY) {
      document.body.style.userSelect = 'none'
      this.isResizingY = true
      this.isPositiveDirectionY = isPositiveDirectionY
      this.previousY = e.clientY
    },
    finishResize (e) {
      document.body.style.userSelect = null
      this.isResizingX = false
      this.isResizingY = false
    }
  }
}
</script>
<style scoped>
.resizable {
  position: relative;
}

.sash-top {
  position: absolute;
  top: 0;
  width: 100%;
  cursor: ns-resize;
}

.sash-right {
  position: absolute;
  right: 0;
  height: 100%;
  cursor: ew-resize;
}

.sash-bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  cursor: ns-resize;
}

.sash-left {
  position: absolute;
  left: 0;
  height: 100%;
  cursor: ew-resize;
}

.sash-top-right {
  position: absolute;
  top: 0;
  right: 0;
  cursor: nesw-resize;
  z-index: 2;
}

.sash-bottom-right {
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: nwse-resize;
  z-index: 2;
}

.sash-bottom-left {
  position: absolute;
  bottom: 0;
  left: 0;
  cursor: nesw-resize;
  z-index: 2;
}

.sash-top-left {
  position: absolute;
  top: 0;
  left: 0;
  cursor: nwse-resize;
  z-index: 2;
}
</style>
