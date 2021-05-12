<template>
  <!--小型侧边栏抽屉布局-->
  <a-layout>
    <!--抽屉侧边栏，因为小型屏幕如果缩放侧边栏会导致布局挤压-->
    <a-drawer
        placement="left"
        :closable="false"
        :visible="visible"
        :maskClosable="true"
        @close="visible = false"
        :bodyStyle="{padding:'0'}"
    >
      <!--侧边栏-->
      <a-layout-sider
          :trigger="null"
          breakpoint="lg"
          collapsed-width="0"
          width="256"
          class="full-parent"
          :theme="getSettingTheme"
          :collapsed="false"
          style="position: absolute"
      >
        <!--logo 和 菜单栏-->
        <div style=" padding: 16px 0">
          <slot name="logo"></slot>
        </div>
        <slot name="menu"></slot>
      </a-layout-sider>
    </a-drawer>

    <!--以下布局和侧边栏布局一样-->
    <a-layout>
      <a-layout-header style="background-color: #fff; ">
        <div class="d-flex flex-align-center full-parent">
          <div class="full-parent">
            <a-icon
                style="font-size: 20px;"
                :type="visible ? 'menu-unfold' : 'menu-fold'"
                @click="visible = !visible"
            />
          </div>
          <div class="full-parent">
            <slot name="header"></slot>
          </div>
        </div>
      </a-layout-header>
      <a-layout-content>
        <center-layout>
          <slot name="content"></slot>
        </center-layout>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        <slot name="footer"></slot>
      </a-layout-footer>
    </a-layout>
  </a-layout>

</template>

<script>

import CenterLayout from "@/layout/flex/CenterLayout";

export default {
  name: "SmallLayout",
  components: {CenterLayout},
  data() {
    return {
      //抽屉是否可视
      visible: false,

    };
  },
  computed: {
    getSettingTheme() {
      return this.$store.state.setting.setting.menu.theme
    }
  },
}
</script>
<style scoped>
</style>