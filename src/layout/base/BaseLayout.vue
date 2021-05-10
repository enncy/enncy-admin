<template>
  <!--基础上中下布局-->
  <a-layout>
    <a-layout-header :style="headerStyle" >
      <slot name="header"></slot>
    </a-layout-header>

    <a-layout-content class="padding-large-x">
      <slot name="content"></slot>
    </a-layout-content>

    <a-layout-footer class="text-center">
      <slot name="footer"></slot>
    </a-layout-footer>
  </a-layout>
</template>

<script>

export default {
  name: 'BaseLayout',
  props: {
    headerStyle: Object
  },
  components: {},
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