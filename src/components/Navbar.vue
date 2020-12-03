<template>
  <div>
    <div class="navbar">
      <div class="navbar__logo">
        <a href="/">
          <img width="310" height="85" src="@/assets/logo-20-blanco.png" />
        </a>
      </div>
      <div class="navbar__title" v-if="$route.name === 'login'">
        <span>Sistema Integral de Prácticas Profesionales</span>
      </div>
      <div class="navbar__routes" v-else>
        <template v-for="(route, index) in routes">
          <div
            :key="index"
            class="navbar__routes-item"
            :class="{ 'is-selected': $route.name === route.routeName }"
            @click="onClickRoute(route.routeName)"
          >
            <span>{{ route.title }}</span>
          </div>
        </template>
      </div>
      <div class="userTimer" v-if="isLoggedIn">
        <div>
          Noh Cocom / Brian Asael
        </div>
        <div class="countdown">
          Tiempo restante de sesión: {{ timeLeft }}
        </div>
      </div>
    </div>
    <div class="footer" v-if="isLoggedIn">
      <button class="logout-button" @click="logout">
        CERRAR SESIÓN
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      routes: [
        {
          title: 'INICIO',
          routeName: 'home',
        },
        {
          title: 'ESTUDIANTES',
          routeName: 'students',
        },
        {
          title: 'OFERTAS DE PROYECTOS',
          routeName: 'projects',
        },
      ],
      timeLimit: parseInt(process.env.APP_SESSION_TIME),
      timePassed: 0,
      timerInterval: null,
    };
  },
  mounted() {
    console.log('time env');
    console.log(process.env);
    if (this.isLoggedIn) {
      this.startTimer();
    }
    this.$root.$on('login', () => {
      if (this.timerInterval === null) {
        this.startTimer();
      }
    });
  },
  methods: {
    startTimer() {
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
    },
    stopTimer() {
      clearInterval(this.timerInterval)
      this.timerInterval = null;
      this.timePassed = 0;
    },
    onClickRoute(routeName) {
      this.$router.push({name: routeName});
    },
    async logout() {
      this.loading = true;
      this.stopTimer();
      await this.$store.dispatch('LogOut');
      this.$router.push('login');
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated
    },
    timeLeft() {
      let left = this.timeLimit - this.timePassed;

      let minutes = Math.floor(left / 60);
      let seconds = left - (minutes * 60);
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    },
  },
  watch: {
    timeLeft() {
      if ((this.timeLimit - this.timePassed) <= 0) {
        this.logout();
      }
    },
  },
};
</script>

<style lang="scss">

.navbar {
  transition: all 0.3s ease-in-out;
  height: 60px;
  margin-left: 0;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: calc(100% - 0px);
  box-sizing: border-box;
  background: #0e153b;
  padding: 0 12px;
  display: flex;
  align-items: center;

  &__logo {
    overflow: hidden;
    margin-right: 24px;

    img {
      transition: none;
      position: relative;
      width: 146px !important;
      height: 40px !important;
      vertical-align: top;
      margin-top: 6px;
    }
  }

  &__title {
    margin-left: auto;
    margin-right: 24px;
    color: rgb(50, 210, 206);
    font-family: Helvetica, Arial, sans-serif;
    font-size: 26px;
    font-weight: 400;
    vertical-align: middle;
    text-align: right;
    padding: 0;
  }

  &__routes {
    color: #eee;
    display: flex;
    font-weight: bold;
    margin-left: 32px;
    height: 100%;
    font-size: .85rem;
    line-height: 20px;

    &-item {
      align-items: center;
      display: flex;
      height: 100%;
      top: 50%;
      cursor: pointer;
      padding-left: 24px;
      padding-right: 24px;
      &:hover {
        background-color: #0F7282;
      }
    }
    .is-selected {
      background-color: #10cfc9;
    }
  }
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: #0e153b;
  color: white;
  display: flex;
  justify-content: flex-end;
}
.logout-button {
  position: absolute;
  height: 32px;
  color: #eee;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-right: 24px;
  background-color: transparent;
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}
.userTimer {
  text-align: left;
  position: absolute;
  right: 24px;
  color: #eee;
}
</style>
