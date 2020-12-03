<template>
  <div class="loader">
    <div class="loader__circle" v-if="loading">
      <div class="loader__circle-image">
        <svg class="spinner" viewBox="0 0 50 50">
          <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
        </svg>
      </div>
    </div>
    <div class="loader__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Frame',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.loader {
  position: relative;
  padding-bottom: 16px;
  &__content {
    margin-bottom: 16px;
  }
  &__circle {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
    &-image {
      width: 150px;
      height: 150px;
    }
  }
}

.spinner {
  animation: rotate 2s linear infinite;
  z-index: 2000;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;

  & .path {
    stroke: #3d65c0;
    stroke-linecap: round;
    animation: load 1.5s ease-in-out infinite;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes load {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -45;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>
