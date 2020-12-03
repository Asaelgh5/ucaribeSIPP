<template>
  <div id="app">
    <Dashboard>
      <router-view />
    </Dashboard>
  </div>
</template>

<script>
import Dashboard from '@/components/Dashboard';

export default {
  name: 'App',
  metaInfo: {
    title: 'SIPP',
  },
  components: {
    Dashboard,
  },
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 32px;
}
</style>
