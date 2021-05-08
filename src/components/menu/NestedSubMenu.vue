<template>
  <a-sub-menu :key="menuInfo.key" v-bind="$props" v-on="$listeners">
    <!--设置菜单信息-->
    <span slot="title">
      <a-icon v-if="menuInfo.icon" :type="menuInfo.icon"/>
      <span>{{ menuInfo.title }}</span>
    </span>
    <!--遍历子菜单-->
    <template v-for="item in menuInfo.children">
      <!--<nested-menu-item v-if="!item.children" :key="item.key" :menu-info="item"/>-->
      <a-menu-item  v-if="!item.children"  :key="item.key">
        <a-icon  v-if="item.icon"  :type="item.icon" />
        <span>{{ item.title }}</span>
      </a-menu-item>
      <!--递归调用-->
      <nested-sub-menu v-else :key="item.key" :menu-info="item"/>
    </template>
  </a-sub-menu>
</template>

<script>
import {Menu} from 'ant-design-vue';
// import NestedMenuItem from "@/components/menu/NestedMenuItem";

export default {
  name: 'NestedSubMenu',
  // must add isSubMenu: true
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    // Cannot overlap with properties within Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  components: { },
  data() {
    return {};
  },
  methods: {},
  mounted() {
  },
  destroyed() {
  },
}
</script>
<style scoped>
</style>