<template>
  <a-menu
      :default-selected-keys="[1]"
      :default-open-keys="[1]"
      :mode="mode"
      :theme="theme"
      :inline-collapsed="inlineCollapsed && mode==='inline'"
      :style="{ lineHeight: '64px' }"
  >
    <template v-for="item in data">
      <a-menu-item  v-if="!item.children"  :key="item.key">
        <a-icon  v-if="item.icon"  :type="item.icon" />
        <span>{{ item.title }}</span>
      </a-menu-item>
      <nested-sub-menu v-else :key="item.key" :menu-info="item" />
    </template>
  </a-menu>
</template>

<script>

import NestedSubMenu from "@/components/menu/NestedSubMenu";
export default {
  components: {NestedSubMenu},
  props:{
    mode:{
      type: String,
      required:true,
      validate:(value)=>value.find(i=>i in ["vertical","vertical-right","horizontal","inline"])
    },
    theme:{
      type: String,
      default:'dark'
    },
    inlineCollapsed:{
      type: Boolean,
      default:true
    },
    // data:Array
  },
  data() {
    return {
      data: [
        {
          key: '1',
          title: 'Option 1',
        },
        {
          key: '2',
          title: 'Option 1',
        },
        {
          key: '3',
          title: 'Option 1',
        },
        {
          key: '4',
          title: 'Option 1',
        },
        {
          key: '5',
          title: 'Option 1',
        },
        {
          key: '6',
          title: 'Navigation 2',
          children: [
            {
              key: '2.1',
              title: 'Navigation 3',
              children: [{ key: '2.1.1', title: 'Option 2.1.1' }],
            },
          ],
        },
      ],
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