export default {
  namespaced: true,
  state: {
    token: ""
  },
  mutations: {
    // 获取 token
    SET_TOKEN(state, val) {
      console.log(val, "token");
      state.token = val;
      sessionStorage.setItem("token", val);
    },
    // 删除 token
    DELETE_TOKEN(state) {
      console.log(111111, "删除");
      state.token = "";
      sessionStorage.removeItem("toekn");
    },
    // 获取token'
    GET_TOKEN(state) {
      state.token = sessionStorage.getItem("token");
    }
  }
};
