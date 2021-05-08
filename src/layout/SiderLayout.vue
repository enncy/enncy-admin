<template>

  <!--侧边栏布局-->
  <base-sider-layout>
    <!--菜单栏-->
    <slot name="menu" slot="menu"></slot>

    <!--内容-->
    <template slot="content">
      <base-layout>
        <slot name="header" slot="header"></slot>
        <template slot="content">
          <center-layout>
            <slot name="content"></slot>
          </center-layout>
        </template>

        <slot name="footer" slot="footer"></slot>
      </base-layout>
    </template>
  </base-sider-layout>
</template>

<script>


import BaseLayout from "@/layout/base/BaseLayout";
import BaseSiderLayout from "@/layout/base/BaseSiderLayout";
import CenterLayout from "@/layout/flex/CenterLayout";

export default {
  name: "SiderLayout",
  components: {CenterLayout, BaseSiderLayout, BaseLayout},
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