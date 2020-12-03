<template>
  <Loader :loading="loading">
    <div class="login">

      <div class="login-logo">
        <img src="@/assets/logo-sipp.png" />
      </div>
      <div class="login-container">
        <Box size="4" elementSpacing>
          <UcInput placeholder="Matrícula" v-model="userForm.account"/>
          <UcInput placeholder="Contraseña" type="password" v-model="userForm.password"/>
          <Button @click="onLogin">Iniciar sesión</Button>
        </Box>
      </div>
    </div>
  </Loader>
</template>

<script>
import UcInput from '@/components/Input';
import Button from '@/components/Button';
import Loader from '@/components/Loader';
import Box from '@/components/Box';
import { mapActions } from "vuex";

export default {
  name: 'Login',
  components: {
    Box,
    UcInput,
    Button,
    Loader,
  },
  data() {
    return {
      loading: false,
      userForm: {
        account: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async onLogin() {
      this.loading = true;
      await new Promise(resolve => setTimeout(resolve, 400));
      if (this.userForm.account === '' || this.userForm.password === '') {
        this.loading = false;
        console.log('username and password are required');
        return;
      }

      await new Promise(resolve => setTimeout(resolve, 1000));

      await this.LogIn(this.userForm);
      this.$root.$emit('login');
      return this.$router.push({ name: 'students' });
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;
  &-logo {
    text-align: center;
    width: 20%;
    margin: -24px 0 -48px;

    object-fit: cover;
    img {
      max-width: 100%;
    }
  }
  &-container {
    width: 100%;

    display: flex;
    justify-content: center;
    &-form {
      padding: 32px;
      stroke: rgba(0, 0, 0, 1);
      stroke-width: 3;
      width: 25%;
      background-color: rgb(231, 231, 231);
      box-shadow:10px 12px rgba(85, 85, 91, 0.5);
    }
  }
}

.login-container-form > * {
  margin-bottom: 24px;
}
</style>
