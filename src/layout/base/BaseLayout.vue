<template>
  <!--基础上中下布局-->
  <a-layout>
    <a-layout-header style="background-color: white">
      <slot name="header"></slot>
    </a-layout-header>

    <a-layout-content class="padding-40">
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