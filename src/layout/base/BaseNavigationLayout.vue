<template>
  <base-layout>

    <template slot="header">
      <!--大屏幕只占比20，如果屏幕缩小，则占满24-->
      <a-row class="d-flex flex-center">
        <a-col :span="24" :lg="20">
          <!--logo-->
          <div   style="float: left;min-width: 210px">
            <slot name="logo">
              <div class="logo" />
            </slot>
          </div>
          <!--头部-->

          <div class="full-parent">
            <slot name="header"></slot>
          </div>
        </a-col>
      </a-row>

    </template>


    <a-row class="d-flex flex-center" slot="content">
      <a-col :span="24" :lg="20">
        <!--内容-->
        <slot name="content"  ></slot>
      </a-col>
    </a-row>



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