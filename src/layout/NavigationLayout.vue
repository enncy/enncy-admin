<template>

  <!--侧边栏布局-->
  <base-navigation-layout>
    <!--菜单栏-->
    <slot name="menu" slot="menu"></slot>

    <!--内容-->
    <template slot="content">
      <base-layout>
        <slot name="header" slot="header"></slot>
        <slot name="content" slot="content"></slot>
        <slot name="footer" slot="footer"></slot>
      </base-layout>
    </template>
  </base-navigation-layout>
</template>

<script>

import BaseLayout from "@/layout/base/BaseLayout";
import BaseNavigationLayout from "@/layout/base/BaseNavigationLayout";
export default {
  name: "NavigationLayout",
  components: {BaseNavigationLayout, BaseLayout},
  data() {
    return {

    };
  },
  methods: {

  },
  mounted() {},
  destroyed() {},
}
</script>
<style scoped>
</style>