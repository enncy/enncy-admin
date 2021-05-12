<template>
  <adapt-layout :layout="setting.layout">

    <template slot="logo">
      <ant-design-vue-logo title="Enncy Admin"/>
    </template>

    <template slot="menu">
      <nested-menu :mode="setting.menu.mode" :theme="setting.menu.theme" :list="list"></nested-menu>
    </template>



    <template slot="header">
      <a-row class="d-flex flex-right flex-align-center" :gutter="20">
        <!--头像-->
        <a-col>
          <avatar-menu></avatar-menu>
        </a-col>
        <!--设置面板抽屉-->
        <a-col>
          <setting-drawer/>
        </a-col>
      </a-row>
    </template>

    <template slot="content">
     <div class="full-parent">
       <a-card title="按钮组件" :bordered="false" size="small">
         <a-row  v-child-margin="{right:10,top:100}" >
           <a-button type="primary">
             Primary
           </a-button>
           <a-button>Default</a-button>
           <a-button type="dashed">
             Dashed
           </a-button>
           <a-button type="danger">
             Danger
           </a-button>
           <a-config-provider :auto-insert-space-in-button="false">
             <a-button type="primary">
               按钮
             </a-button>
           </a-config-provider>
           <a-button type="primary">
             按钮
           </a-button>
           <a-button type="link">
             Link
           </a-button>
         </a-row>
       </a-card>

     </div>
    </template>


    <template slot="footer">
      foot
    </template>
  </adapt-layout>
</template>

<script>


import NestedMenu from "@/components/common/menu/NestedMenu";
import SettingDrawer from "@/components/common/setting/SettingDrawer";
import AdaptLayout from "@/layout/common/AdaptLayout";
import AvatarMenu from "@/components/AvatarMenu";
import AntDesignVueLogo from "@/components/common/logo/AntDesignVueLogo";

export default {
  components: {AntDesignVueLogo, AvatarMenu, AdaptLayout, SettingDrawer, NestedMenu},
  computed: {
    setting(){
     return  this.$store.state.setting.setting
    },

  },

  data() {
    return {

      list:[
        {
          key: '1',
          title: '仪表盘',
          icon:'pie-chart'
        },
        {
          key: '2',
          title: '表单页',
          icon: 'form'
        },
        {
          key: '3',
          title: '列表页',
          icon:'table'
        },
        {
          key: '4',
          title: '详情页',
          icon:'info-circle'
        },
        {
          key: '5',
          title: '结果页',
          icon:'check-circle'
        },
        {
          key: '6',
          title: '个人管理',
          icon:'user',
          children: [
            {
              key: '6.1',
              title: '个人中心',

            },
            {
              key: '6.2',
              title: '个人设置',
            },
          ],
        },
      ],
    };
  },
}
</script>
<style scoped>
</style>