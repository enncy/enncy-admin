<template>
  <!--用户头像菜单栏-->

  <a-dropdown placement="bottomRight" class="cursor-pointer" :style="{color:getAdaptTextColor}">
    <!--子元素每个右边间隔 10px-->
    <a-row v-child-margin.right="10" class="d-flex  flex-center flex-align-center">
      <a-col>
        <a-avatar icon="user"/>
      </a-col>
      <a-col>
        user
      </a-col>
    </a-row>

    <!--下拉菜单 , 遍历 list-->
    <a-menu slot="overlay" style="width:160px;">
      <template v-for="(item,index) in list">
        <!--分隔线-->
        <a-menu-divider :key="index+'-divider'" v-if="item.divider"/>
        <!--选项-->
        <a-menu-item :key="index">
          <a-row class="d-flex" :gutter="10">
            <a-col>
              <a-icon :type="item.icon"/>
            </a-col>
            <a-col>{{ item.title }}</a-col>
          </a-row>
        </a-menu-item>
      </template>

    </a-menu>
  </a-dropdown>
</template>

<script>


export default {
  name: "AvatarMenu",
  components: {},
  computed: {
    getAdaptTextColor() {
      return this.$store.getters['setting/getAdaptTextColor'];
    }
  },

  data() {
    return {
      list: [
        {
          title: '个人中心',
          icon: 'user',
        },
        {
          title: '个人设置',
          icon: 'setting',
        },
        {
          //在组件上方显示分隔线
          divider: true,
          title: '退出',
          icon: 'logout',
        },
      ]
    };
  },

  methods: {},
  mounted() {
  },
  destroyed() {
  },
}
</script>
<style scoped>
</style>