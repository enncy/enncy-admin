<template>

  <!--侧边栏布局-->
  <base-side-layout>
    <!--logo-->
    <div class="padding-large" slot="logo">
      <slot name="logo" ></slot>
    </div>
    <!--菜单栏-->
    <slot name="menu" slot="menu"></slot>

    <!--内容-->
    <template slot="content">
      <base-layout :header-style="{backgroundColor:'white'}">
        <!--头部-->
        <slot name="header" slot="header"></slot>
        <!--内容-->
        <center-layout  slot="content">
          <slot name="content" ></slot>
        </center-layout>

        <!--底部-->
        <slot name="footer" slot="footer"></slot>
      </base-layout>
    </template>
  </base-side-layout>
</template>

<script>


import BaseLayout from "@/layout/base/BaseLayout";
import BaseSideLayout from "@/layout/base/BaseSideLayout";
import CenterLayout from "@/layout/flex/CenterLayout";

export default {
  name: "SideLayout",
  components: {CenterLayout, BaseSideLayout, BaseLayout},
  data() {
    return {
      BaseSideLayout
    };
  },
  methods: {

  },
  mounted() {
  },
  destroyed() {
  },
}
</script>
<style scoped>

</style>