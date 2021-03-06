// import axios from 'axios';
const state = {
  user: null,
};

const getters = {
  isAuthenticated: state => !!state.user,
  StateUser: state => state.user,
};

const actions = {
  async LogIn({commit}, User) {
    // await axios.post('login', User)
    await commit('setUser', User['account'])
  },
  async LogOut({commit}){
    let user = null
    commit('logout', user)
  },
};

const mutations = {
  setUser(state, account){
    state.user = account
  },
  logout(state){
    state.user = null
    state.posts = null
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
