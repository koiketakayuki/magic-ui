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
    <mu-flex-box justifyContent="flex-end" alignItems="center" width="200px" height="100%">
      <slot name="tooltip"></slot>
    </mu-flex-box>
  </div>
</template>

<script>
import Theme from '~/Theme'
import MuInlineList from '~/layout/InlineList'
import MuFlexBox from '~/layout/FlexBox'

export default {
  mixins: [Theme],
  components: {
    MuInlineList,
    MuFlexBox
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

