<template>
  <div
    class="box"
    :class="[
      sizeClass,
      { spacing: elementSpacing },
      { centered: centered },
      { bordered: bordered }
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Box',
  props: {
    size: {
      type: String,
      default: '12',
    },
    elementSpacing: {
      type: Boolean,
      default: false,
    },
    centered: {
      type: Boolean,
      default: false,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {
    sizeClass() {
      return 'box--size-' + this.size;
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.box {
  min-height: 1px;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 24px;
  width: 25%;
  background-color: rgb(231, 231, 231);
  box-shadow:6px 8px rgba(85, 85, 91, 0.5);
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

.spacing > *:not(:last-child) {
  margin-bottom: 24px;
}

.centered {
  display: flex;
  justify-content: center;
}
.bordered {
  border: 1px groove black;
  stroke: rgba(0, 0, 0, 1);
  stroke-width: 3;
}
</style>
