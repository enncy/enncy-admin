<template>
  <a-layout>
    <a-layout-sider breakpoint="sm" collapsed-width="0" width="240">
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
    name:"BaseSideLayout",
  data(){
      return{
      }
  },

}
</script>

<style scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>