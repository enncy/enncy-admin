<template>
  <!--自适应菜单栏，如果屏幕小于 600 则强制转化为 inline 模式-->
  <a-menu
      :default-selected-keys="[1]"
      :default-open-keys="[1]"
      :mode="adaptMode"
      :theme="theme"
      :style="{ lineHeight: '64px' }"

  >

    <template v-for="item in list">
      <a-menu-item v-if="!item.children" :key="item.key">
        <a-icon style="font-size: 18px" v-if="item.icon" :type="item.icon"/>
        <span>{{ item.title }}</span>
      </a-menu-item>
      <nested-sub-menu v-else :key="item.key" :menu-info="item"/>
    </template>
  </a-menu>
</template>

<script>

import NestedSubMenu from "@/components/common/menu/NestedSubMenu";

export default {
  components: {NestedSubMenu},
  props: {
    mode: {
      type: String,
      required: true,
      validate: (value) => value.find(i => i in ["vertical", "vertical-right", "horizontal", "inline"])
    },
    theme: {
      type: String,
      default: 'dark'
    },
    //菜单栏数据
    list:Array
  },
  computed: {
    screenWidth(){
      return this.$store.state.setting.screenWidth
    },
    adaptMode(){
      return this.$store.state.setting.screenWidth<600?'inline':this.mode
    },

  },

  data() {
    return {
      //是否折叠
      collapsed: false
    };
  },
  methods: {},
  destroyed() {
  },
}
</script>
<style scoped>
</style>