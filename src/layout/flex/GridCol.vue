<template>
  <a-col :xs="xs" :sm="sm" :md="md" :lg="lg" :xl="xl">
    <slot></slot>
  </a-col>
</template>

<script>

export default {
  name: "GridCol",
  props: {
    xs: {type: Number, default: 22},
    sm: {type: Number, default: 16},
    md: {type: Number, default: 12},
    lg: {type: Number, default: 6},
    xl: {type: Number, default: 4},
  },

}
</script>
<style scoped>
</style>