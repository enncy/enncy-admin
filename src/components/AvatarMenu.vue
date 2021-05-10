<template>
  <!--用户头像菜单栏-->

  <a-dropdown placement="bottomRight"  class="cursor-pointer" v-child-margin.right="20">
    <a-row class="d-flex  flex-center flex-align-center" v-child-margin.right="10">
      <a-col>
        <a-avatar icon="user"/>
      </a-col>
      <a-col>
        user
      </a-col>
    </a-row>
    <a-menu slot="overlay" >
      <a-menu-item>
        <user-menu-item title="个人中心" icon="user"/>
      </a-menu-item>
      <a-menu-item>
        <user-menu-item title="个人设置" icon="setting"/>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item>
        <user-menu-item title="退出" icon="logout"/>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>

var UserMenuItem = {
  name: "UserMenuItem",
  template: `
    <a-row class="d-flex" :gutter="10">
      <a-col><a-icon :type="icon"/></a-col>
      <a-col>{{title}}</a-col>
    </a-row>
            `,
  props:{
    title: String,
    icon:String,
  }
}

export default {
  name: "AvatarMenu",
  components: {UserMenuItem},
  data() {
    return {};
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