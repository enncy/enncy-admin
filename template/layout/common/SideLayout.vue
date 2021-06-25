<template>
  <!--侧边栏布局-->
  <a-layout>
    <a-layout-sider
        v-model="collapsed" :trigger="null" collapsible
        width="240px"
        :theme="getSettingTheme"
    >
      <!--logo-->
      <div    style=" padding: 16px 0" >
        <slot name="logo"></slot>
      </div>
      <!--菜单栏-->
      <slot name="menu"></slot>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background-color: #fff; " >
        <div class="d-flex flex-align-center full-parent">
          <div class="full-parent">
            <!--收回侧边栏的图标按钮-->
            <a-icon
                style="font-size: 20px;"
                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="collapsed = !collapsed"
            />
          </div>
          <!--头部-->
          <div class="full-parent">
            <slot name="header"></slot>
          </div>
        </div>
      </a-layout-header>
      <a-layout-content  >
        <!--内容区域-->
        <center-layout>
          <slot name="content"></slot>
        </center-layout>
      </a-layout-content>
      <!--底部区域-->
      <a-layout-footer style="text-align: center">
        <slot name="footer"></slot>
      </a-layout-footer>
    </a-layout>
  </a-layout>

</template>

<script>




import CenterLayout from "@/layout/flex/CenterLayout";
export default {
  name: "SideLayout",
  components: {CenterLayout  },

  data() {
    return {
      //是否收回侧边栏
      collapsed:false
    };
  },
  computed: {
    getSettingTheme() {
      return this.$store.state.setting.setting.menu.theme
    }
  },

  mounted() {
  },
  destroyed() {
  },
}
</script>
<style scoped>

</style>