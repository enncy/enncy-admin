<template>
  <a-row class="full-parent flex-center d-flex"  >
    <a-col class="d-flex flex-center flex-align-center " style="padding: 32px 0" :span="23" :lg="22">
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