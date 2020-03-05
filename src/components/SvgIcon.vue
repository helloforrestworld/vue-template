<template>
  <svg class="svg-icon">
    <use :xlink:href="'#icon-' + name"></use>
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>
