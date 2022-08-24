const user = {
  state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
    userInfo: {
      name: ''
    }
  },

  getters: {
    getUser(state) {
      return state.userInfo
    }
  },

  mutations: {
    updateUser(state, user) {
      state.userInfo = user
    }
  },

  actions: {
    asyncUpdateUser(context, user) {
      context.commit('updateUser', user)
    }
  }
}

export default user
