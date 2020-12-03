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

<style lang="scss">
@import '~@fortawesome/fontawesome-free/css/all.css';

::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #a9a9a9;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #696969;
}
</style>
