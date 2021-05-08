<template>
  <a-row class="full-parent">
    <a-col class="d-flex flex-center flex-align-center  padding-30 full-parent">
      <slot></slot>
    </a-col>
  </a-row>
</template>

<script>

export default {
  name: "CenterLayout",
  components: {},
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