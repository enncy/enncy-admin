<template>
  <!--自适应布局-->
  <side-layout v-if="layoutName==='side'" >
    <slot name="logo" slot="logo"></slot>
    <slot name="menu" slot="menu"></slot>
    <slot name="header" slot="header"></slot>
    <slot name="content" slot="content"></slot>
    <slot name="footer" slot="footer"></slot>
  </side-layout>
  <navigation-layout v-else-if="layoutName==='navigation'">
    <slot name="logo" slot="logo"></slot>
    <slot name="menu" slot="menu"></slot>
    <div :style="{color:screenWidth>600?'ghostwhite':'black'}" slot="header">
      <slot name="header" ></slot>
    </div>
    <slot name="content" slot="content"></slot>
    <slot name="footer" slot="footer"></slot>
  </navigation-layout>
</template>

<script>

import SideLayout from "@/layout/SideLayout";
import NavigationLayout from "@/layout/NavigationLayout";

export default {
  name: "AdaptLayout",
  components: {NavigationLayout, SideLayout},
  props: {
    layout: {
      type: String,
      default: 'side'
    }
  },
  data() {
    return {
      //屏幕尺寸
      screenWidth: null,
      //布局名
      layoutName: this.layout
    };
  },
  methods: {},

  watch: {
    //如果屏幕小于 600px 则强制转换布局
    screenWidth(value) {
      this.$store.dispatch('setting/setScreenWidthAction', value);
      if (value < 600 ) {
        this.layoutName = 'side';
      }else{
        this.layoutName = this.layout;
      }
    }
  },
  mounted() {
    //监听屏幕变化
    this.screenWidth = document.body.clientWidth
    this.$store.dispatch('setting/setScreenWidthAction', document.body.clientWidth);
    window.onresize = () => {   //屏幕尺寸变化就重新赋值
      this.$emit('resize', document.body.clientWidth);
      this.screenWidth = document.body.clientWidth
    }
  },
  destroyed() {
  },
}
</script>
<style scoped>
</style>