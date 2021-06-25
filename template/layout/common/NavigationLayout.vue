<template>
  <!--顶部导航通栏布局-->
  <a-layout  >
    <!--头部-->
    <a-layout-header :style="{backgroundColor:getBackgroundColor}">
      <a-row class="d-flex full-parent flex-center">
        <a-col :span="24" :lg="18" class="d-flex">
          <!--logo图标-->
          <div style="min-width: 200px" >
            <slot name="logo"></slot>
          </div>
          <div class="full-parent d-flex">
            <!--菜单栏-->
            <slot name="menu"></slot>
            <div style="float: right" class="full-parent"  >
              <!--头部内容-->
              <slot name="header"></slot>
            </div>
          </div>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content class="padding-large">
      <a-row class="d-flex full-parent flex-center">
        <a-col :span="24" :lg="18" >
          <!--内容区域-->
          <slot name="content"></slot>
        </a-col>
      </a-row>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      <!--底部区域-->
      <slot name="footer"></slot>
    </a-layout-footer>
  </a-layout>
</template>

<script>


export default {
  name: "NavigationLayout",
  components: { },
  data() {
    return {};
  },
  methods: {},
  computed: {
    getBackgroundColor() {
      return this.$store.state.setting.setting.menu.theme==='dark'?'#001529':'#fff'
    },

  },
  destroyed() {
  },
}
</script>
<style scoped>
</style>