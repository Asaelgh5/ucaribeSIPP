<template>
  <div class="column" :class="sizeClass">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Column',
  props: {
    size: {
      type: String,
      default: '12',
    },
  },
  data() {
    return {};
  },
  mounted() {
  },
  methods: {},
  computed: {
    sizeClass() {
      return 'column--size-' + this.size;
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.column {
  min-height: 1px;
  box-sizing: border-box;
  &--size-12 {
    width: 100%;
  }
  &--size-11 {
    width: 91.6666666%;
  }
  &--size-10 {
    width: 83.33333333%;
  }
  &--size-9 {
    width: 75%;
  }
  &--size-8 {
    width: 66.6666666%;
  }
  &--size-7 {
    width: 58.33333333%;
  }
  &--size-6 {
    width: 50%;
  }
  &--size-5 {
    width: 41.6666666%;
  }
  &--size-4 {
    width: 33.33333333%;
  }
  &--size-3 {
    width: 25%;
  }
  &--size-2 {
    width: 16.6666666%;
  }
  &--size-1 {
    width: 8.333333333%;
  }
}
</style>
