<template>
  <!--简单的卡片组件，没有边框，没有阴影，也没有标题栏的分隔线-->
  <a-row class="padding-medium margin-medium" :gutter="[0,10]">
    <a-col v-if="!!title"  style="font-weight: bold">
      {{title}}
    </a-col>
    <a-col>
      <slot></slot>
    </a-col>
  </a-row>
</template>

<script>

export default {
  name: "SimpleCard",
  components: {},
  props: {
    title:String
  },
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