<template>
  <sider-layout>
    <template slot="menu">
      <nested-menu mode="vertical"></nested-menu>
    </template>
    <template slot="content">
      index
    </template>
    <template slot="footer">
      foot
    </template>
  </sider-layout>
</template>

<script>


import SiderLayout from "@/layout/SiderLayout";
import NestedMenu from "@/components/menu/NestedMenu";
export default {
    components: {NestedMenu, SiderLayout },
    data() {
        return {
        
        };
    },
    methods: {
    
    },
    mounted() {},
    destroyed() {}, 
}
</script>
<style scoped>
</style>