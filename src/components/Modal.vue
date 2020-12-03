<template>
  <transition name="zoom-out">
    <div class="modal" v-if="isActive">
      <div class="modal__overlay"></div>
      <div
        class="modal__modal-content modal__modal-content-overflow"
        ref="content"
      >
        <div class="modal__close" @click="close" role="button">
          <i class="fas fa-times"></i>
        </div>
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    active: Boolean,
  },
  data() {
    return {
      isActive: this.active || false,
    };
  },
  methods: {
    close() {
      this.$emit('close');
      this.$emit('update:active', false);
    },
  },
  computed: {},
  watch: {
    active(value) {
      this.isActive = value;
      if (value) {
        document.body.classList.add('body--no-scroll');
      } else {
        document.body.classList.remove('body--no-scroll');
      }
    },
  },
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1001;
  &__close {
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
    z-index: 100;
    color: #bdc6cc;
    font-size: 24px;
    &:hover {
      color: #a7b1b8;
    }
  }
  &__overlay {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.3);
  }
  &__modal-content {
    padding: 30px;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #fff;
    min-height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    max-height: 580px;
    width: 800px;
    &.modal__modal-content-overflow {
      max-height: 80%;
      overflow-y: auto;
    }
  }
  .frame {
    padding-bottom: 0px;
    &__content {
      margin-bottom: 0px;
    }
  }
}
</style>
