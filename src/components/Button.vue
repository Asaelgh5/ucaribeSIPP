<template>
  <button
    @click="onClick"
    class="button"
  >
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'Button',
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
