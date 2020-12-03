<template>
  <button
    @click="onClick"
    class="button"
    :class="{ 'button__light': light }"
  >
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    light: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    onClick(e) {
      this.$emit('click', e);
    },
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss">
.button {
  position: relative;
  padding: 0.6rem 3rem;
  border-radius: 10px;
  border: 1px solid transparent;

  background-color: rgb(12, 21, 58);
  color: rgb(46, 219, 215);
  font-size: 16px;
  line-height: 1.25;
  font-weight: 500;
  font-family: Helvetica, Arial, sans-serif;
  cursor: pointer;
  outline: none;

  &__light {
    padding: 0.4rem 2rem;
    background-color: #eee;
    color: rgb(12, 21, 58);
    font-size: 14px;

    &:hover {
      background-color: #ccc;
    }
  }
}

@keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}
</style>
