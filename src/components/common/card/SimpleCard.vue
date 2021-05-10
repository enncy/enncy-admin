<template>
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