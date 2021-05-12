<template>
  <!--设置面板-->

  <div class=" d-flex flex-align-center" >
    <!--设置按钮，点击的时候旋转-->
    <a-icon type="setting" class="font-size-24 cursor-pointer " @click="clickDrawer" :spin="spin" :style="{color:getTextColor}"/>
    <a-drawer
        title="设置"
        placement="right"
        width="300"
        :closable="true"
        @close="close"
        :visible="visible"
        :after-visible-change="afterVisibleChange"
    >

      <!--默认的一些主题颜色-->
      <simple-card title="通用主题颜色">
        <div class="d-flex">
          <div v-for="(color,index) in colors" class="color-input" :style="{backgroundColor:color}"
               @click="updateTheme(color)" :key="index"/>
        </div>
      </simple-card>

      <!--自定义主色，也就是 @primary-color-->
      <simple-card title="自定义主题颜色">
        <input type="color" :value="color" class="color-picker" style="border: none" @change="handleChangeColor"/>
      </simple-card>


      <simple-card title="菜单栏颜色">
        <div class="d-flex">
          <div style="background-color: #fff;border: 1px solid gray" class="color-input" @click="updateMenuTheme('light')"/>
          <div style="background-color: #2c3e50" class="color-input" @click="updateMenuTheme('dark')"/>
        </div>
      </simple-card>


      <simple-card title="布局管理">
        <div v-child-margin.right="10">
          <img class="cursor-pointer" @click="updateLayout('side')"
               src="https://gw.alipayobjects.com/zos/antfincdn/XwFOFbLkSM/LCkqqYNmvBEbokSDscrm.svg">
          <img class="cursor-pointer" @click="updateLayout('navigation')"
               src="https://gw.alipayobjects.com/zos/antfincdn/URETY8%24STp/KDNDBbriJhLwuqMoxcAr.svg">
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
      //此组件是否可见
      visible: false,
      //设置按钮是否旋转
      spin: false,
      //默认主色
      color: '#1890ff',
      //默认颜色
      colors: ['#1890ff', '#f5222d', '#fa541c', '#faad14', '#52c41a', '#2f54eb', '#722ed1'],
    };
  },
  computed: {
    getTextColor() {
      // 如果在侧边栏模式，颜色不变
     if(this.getSettingState.setting.layout==='side'){
       return ''
     }
      return this.$store.state.setting.setting.menu.theme === 'dark' ? '#fff' : '#002140'
    },
    // 获取设置参数
    getSettingState() {
      return this.$store.state.setting
    }
  },

  methods: {
    //点击抽屉事件
    clickDrawer() {
      this.visible = true;
      this.spin = true;
    },
    //监听当抽屉可见状态发生改变
    afterVisibleChange() {
      this.spin = false;
    },
    //当抽屉关闭
    close() {
      this.visible = false;
      this.spin = true;
    },
    //处理颜色
    handleChangeColor(e) {
      console.log(e.target.value)
      this.updateTheme(e.target.value);
    },
    //修改主题颜色
    updateTheme(color) {
      this.color = color;
      window?.less?.modifyVars({
        "@primary-color": color,
      })
    },
    //修改布局
    updateLayout(layout) {
      this.$store.dispatch('setting/setLayoutAction', layout);
      //修改menu的 mode类型，并合并成新的数据
      this.$store.dispatch('setting/setMenuAction', Object.assign({},this.$store.state.setting.setting.menu,{mode: layout === 'navigation' ? 'horizontal' : 'inline'}));
      this.$message.success('修改主题成功!')
    },
    //修改 menu 的菜单栏颜色
    updateMenuTheme(theme){
      this.$store.dispatch('setting/setMenuAction', Object.assign({}, this.$store.state.setting.setting.menu, {theme}));
      this.$message.success('修改菜单颜色成功!')
    }
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
  /*border: 1px solid white;*/
  border-radius: 4px;
  width: 90%;
  height: 32px;
  border:none;
  background-color:transparent;
}
</style>