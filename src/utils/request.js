import axios from "axios";
import store from "../store/index.js";
import router from "../router/index.js";
// 创建axios实例
const service = axios.create({
  baseURL: "/api/", // api 的 base_url
  timeout: 10000 // 请求超时时间,
});
// request拦截器
service.interceptors.request.use(
  config => {
    if (sessionStorage.getItem("token")) {
      config.headers.token = sessionStorage.getItem("token");
    }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
  }
);
// response 拦截器
service.interceptors.response.use(
  response => {
    if (response.status == 200) {
      console.log(1111111111111);
      const data = response.data;
      console.log(data, "lllllllllllll---");
      // 例如登录过期
      if (data.code == -1) {
        console.log(data.code, "lllllllllllll");
        store.commit("login/DELETE_TOKEN");
        router.replace({ path: "/login" });
      }
    }
    return response;
  },
  err => {
    console.log(err);
  }
);

export default service;
