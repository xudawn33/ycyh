const state = {
  token: '12',
  userInfo: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  }
}

const actions = {

}

export default {
  state,
  mutations,
  actions
}