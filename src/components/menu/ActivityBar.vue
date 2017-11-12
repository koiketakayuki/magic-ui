<template>
  <div>
    <d-flex-box :style="{ background: theme.gray700 }"
                flexDirection="column"
                alignItems="center"
                height="100%">
      <slot></slot>
    </d-flex-box>
  </div>
</template>

<script>
import Theme from '~/Theme'
import DIconButton from '~/button/IconButton'
import DFlexBox from '~/layout/FlexBox'

export default {
  mixins: [Theme],
  components: {
    DIconButton,
    DFlexBox
  }
}
</script>