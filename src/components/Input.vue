<template>
  <div class="input-parent">
    <input
      :type="type"
      class="uc-input"
      ref="input"
      :value="computedValue"
      @input="onInput"
      :placeholder="placeholder"
      v-on="$listeners"
    />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [Number, String],
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    placeholder: String,
  },
  data() {
    return {
      newValue: this.value,
    };
  },
  mounted() {
    if (this.autofocus) {
      setTimeout(() => this.$refs.input.focus(), 20);
      this.$root.$on('setAutoFocus', () => {
        this.$refs.input.focus();
      });
    }
  },
  methods: {
    onInput(event) {
      this.$nextTick(() => {
        const { value } = event.target;
        this.computedValue = value;
      });
    },
  },
  computed: {
    computedValue: {
      get() {
        return this.newValue;
      },
      set(value) {
        this.$emit('input', value);
        this.newValue = value;
      },
    },
  },
  watch: {
    value(value) {
      this.newValue = value;
    },
  },
};
</script>

<style lang="scss">
.uc-input {
  box-sizing: border-box;
  height: 48px;
  width: 100%;
  border: 1px solid #bdc6cc !important;
  border-radius: 10px;
  font-size: 18px;
  color: #333;
  outline: none;

  background-color: rgb(219, 219, 219);
  box-shadow: 2px 6px rgba(0, 0, 0, 0.22);

  font-family: Helvetica, Arial, sans-serif;
  padding: 4px 8px;
  &:focus {
    border-color: #041741;
  }
  &::placeholder {
    color: rgb(192, 192, 192);
    text-transform: none;
  }
}
.input-parent {
  display: block;
  z-index: 99;
  position: relative;
  width: 100%;
}
</style>
