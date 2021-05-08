<template>
  <a-layout>
    <a-layout-sider breakpoint="lg" collapsed-width="0">
      <slot name="logo">
        <!--默认logo-->
        <div class="logo" />
      </slot>
      <!--菜单栏-->
      <slot name="menu"></slot>
    </a-layout-sider>
    <!--内容区域-->
    <slot name="content"></slot>
  </a-layout>
</template>
 
<script>
export default {
    name:"BaseSiderLayout"
}
</script>

<style scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>