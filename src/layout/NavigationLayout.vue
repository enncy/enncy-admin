<template>

  <!--导航栏布局-->
  <base-navigation-layout>
    <!--菜单栏-->
    <slot name="logo" slot="logo"></slot>

    <template slot="header">

      <a-row class="d-flex ">
        <!--菜单栏-->
        <a-col  :span="19">
          <slot name="menu"></slot>
        </a-col>
        <!--头部-->
        <a-col  :span="4" :offset="1">
          <a-row class="d-flex flex-right flex-align-center" :gutter="20">
            <slot name="header"></slot>
          </a-row>
        </a-col>
      </a-row>
    </template>

    <!--内容-->
    <slot name="content" slot="content"></slot>
    <slot name="footer" slot="footer"></slot>
  </base-navigation-layout>
</template>

<script>

import BaseNavigationLayout from "@/layout/base/BaseNavigationLayout";

export default {
  name: "NavigationLayout",
  components: {BaseNavigationLayout},
  data() {
    return {};
  },
  methods: {},

  destroyed() {
  },
}
</script>
<style scoped>
</style>