<template>
  <div class="application-header"
       :style="{ background: theme.primary, color: theme.white }">
    <div class="logo">
      <slot name="logo"></slot>
    </div>
    <div class="navigation">
      <mu-inline-list gap="28px">
        <slot name="navigation"></slot>
      </mu-inline-list>
    </div>
    <div class="tooltip">
      <slot name="tooltip"></slot>
    </div>
  </div>
</template>

<script>
import Theme from '~/Theme'
import MuInlineList from '~/layout/InlineList'

export default {
  mixins: [Theme],
  components: {
    MuInlineList
  }
}
</script>

<style scoped>
.application-header {
  display: flex;
  align-items: center;
  min-height: 32px;
  top: 0;
  width: 100%;
  z-index: 80;
  padding: 4px 20px;
  flex-shrink: 0;
}

.logo {
  width: 80px;
}

.navigation {
  flex-grow: 2;
}

.tooltip {
  width: 200px;
}
</style>

