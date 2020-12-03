<template>
  <div class="dashboard">
    <Navbar />
    <div class="all-content">
      <slot />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
export default {
  name: 'Dashboard',
  components: {Navbar},
  data() {
    return {};
  },
  mounted() {
  },
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.all-content {
  transition: all 0.3s ease-in-out;
  margin-top: 55px;
  padding: 32px 40px 50px;
  box-sizing: border-box;
  overflow-y: unset;
  margin-bottom: 10px;
}
</style>
