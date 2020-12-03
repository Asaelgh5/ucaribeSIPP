<template>
  <div class="layout" :class="`align-${align}`">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Layout',
  props: {
    align: {
      type: String,
      default: 'left',
    },
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-wrap: wrap;

  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>
