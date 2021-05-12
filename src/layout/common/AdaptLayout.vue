<template>
  <!--自适应布局  如果屏幕小于600则选择手机布局-->
  <small-layout v-if="screenWidth<=600">
    <slot name="logo" slot="logo"></slot>
    <slot name="menu" slot="menu"></slot>
    <slot name="header" slot="header"></slot>
    <slot name="content" slot="content"></slot>
    <slot name="footer" slot="footer"></slot>
  </small-layout>

  <side-layout v-else-if="layoutName==='side'" >
    <slot name="logo" slot="logo"></slot>
    <slot name="menu" slot="menu"></slot>
    <slot name="header" slot="header"></slot>
    <slot name="content" slot="content"></slot>
    <slot name="footer" slot="footer"></slot>
  </side-layout>

  <navigation-layout v-else>
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

import SideLayout from "@/layout/common/SideLayout";
import NavigationLayout from "@/layout/common/NavigationLayout";

import SmallLayout from "@/layout/common/SmallLayout";

export default {
  name: "AdaptLayout",
  components: {SmallLayout, NavigationLayout, SideLayout},
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
      layoutName: this.layout,
      //手机布局的侧边栏是否可见
      visible:false
    };
  },

  watch: {
    //如果屏幕小于 600px 则强制转换布局
    screenWidth(value) {
      this.$store.dispatch('setting/setScreenWidthAction', value);
      if (value < 600) {
        this.layoutName = 'side';
      } else {
        this.layoutName = this.layout;
      }
    },
    layout(value){
      this.layoutName = value;
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