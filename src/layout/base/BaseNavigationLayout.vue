<template>
  <base-layout>

    <template slot="header">
      <!--logo-->
      <slot name="logo">
        <div class="logo" />
      </slot>
      <!--菜单栏-->
      <slot name="menu"></slot>
    </template>


    <!--内容-->
    <slot name="content"  slot="content"></slot>

    <!--底部-->
    <slot name="footer" slot="footer"></slot>

  </base-layout>

</template>

<script>
import BaseLayout from "@/layout/base/BaseLayout";
export default {
    name:"BaseNavigationLayout",
  components: {BaseLayout},
}
</script>

<style scoped>
.logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>