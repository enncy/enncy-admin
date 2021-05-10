<template>
  <!--设置面板-->

  <div class=" d-flex flex-align-center">
    <a-icon type="setting" class="font-size-24 cursor-pointer " @click="clickDrawer" :spin="spin"/>
    <a-drawer
        title="设置"
        placement="right"
        width="300"
        :closable="true"
        @close="close"
        :visible="visible"
        :after-visible-change="afterVisibleChange"
    >
      <simple-card title="通用主题颜色">
        <div class="d-flex">
          <div v-for="(color,index) in colors" class="color-input" :style="{backgroundColor:color}"
               @click="updateTheme(color)" :key="index"/>
        </div>
      </simple-card>

      <simple-card title="自定义主题颜色">
        <input type="color" :value="color" class="color-picker" @change="handleChangeColor"/>
      </simple-card>

      <simple-card title="布局管理">
        <div  v-child-margin.right="10">
          <img class="cursor-pointer" src="https://gw.alipayobjects.com/zos/antfincdn/XwFOFbLkSM/LCkqqYNmvBEbokSDscrm.svg">
          <img class="cursor-pointer"   src="https://gw.alipayobjects.com/zos/antfincdn/URETY8%24STp/KDNDBbriJhLwuqMoxcAr.svg">
        </div>
      </simple-card>

    </a-drawer>
  </div>

</template>

<script>

import SimpleCard from "@/components/common/card/SimpleCard";

export default {
  name: "SettingDrawer",
  components: {SimpleCard},
  data() {
    return {
      visible: false,
      spin: false,
      color: '#1890ff',
      colors: ['#1890ff', '#f5222d', '#fa541c', '#faad14', '#52c41a', '#2f54eb', '#722ed1'],
    };
  },

  methods: {
    clickDrawer() {
      this.visible = true;
      this.spin = true;
    },
    afterVisibleChange() {
      this.spin = false;
    },
    close() {
      this.visible = false;
      this.spin = true;
    },
    //处理颜色
    handleChangeColor(e) {
      console.log(e.target.value)
      this.updateTheme(e.target.value);
    },
    updateTheme(color) {
      this.color = color;
      window?.less?.modifyVars({
        "@primary-color": color,
      })
    }
  },
  mounted() {

  },
  destroyed() {
  },
}
</script>
<style>
.color-input {
  border: 1px solid white;
  border-radius: 4px;
  width: 24px;
  height: 24px;
  background: white;
  margin: 0px 2px 0px 2px;
  cursor: pointer;
}

.color-picker {
  border: 1px solid white;
  border-radius: 4px;
  width: 90%;
  height: 32px;
  background: white;
}
</style>