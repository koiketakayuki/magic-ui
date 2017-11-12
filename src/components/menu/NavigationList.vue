<template>
  <d-drop-down v-model="show" :align="align">
    <d-navigation-item @click="show = !show" :active="show || active">
      <i class="navigation-list__icon fa fa-chevron-circle-down"
         :class="{ 'navigation-list__icon--show': show }">
      </i>
      <slot></slot>
    </d-navigation-item>
    <d-drop-down-panel slot="content">
      <slot name="items"></slot>
    </d-drop-down-panel>
  </d-drop-down>
</template>

<script>
import DDropDown from '~/menu/DropDown'
import DDropDownPanel from '~/menu/DropDownPanel'
import DNavigationItem from '~/menu/NavigationItem'

export default {
  props: {
    align: {
      type: String,
      default: 'left'
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
  },
  components: {
    DDropDown,
    DDropDownPanel,
    DNavigationItem
  }
}
</script>

<style scoped>
.navigation-list__icon {
  transition: transform 0.2s;
}

.navigation-list__icon--show {
  transform: rotate(180deg)
}
</style>
