import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Login from '@/views/Login';
import Students from '@/views/Students';
import Projects from '@/views/Projects';
import store from './store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { guest: true },
    },
    {
      path: '/students',
      name: 'students',
      component: Students,
      meta: { requiresAuth: true },
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/students");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;
