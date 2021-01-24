<template>
  <div>
    <img
      src="
https://xdvideo-file.oss-cn-shenzhen.aliyuncs.com/video/%E5%AE%98%E7%BD%91%E8%BD%AE%E6%92%AD%E5%9B%BE/2020%E5%B9%B412%E6%9C%88/lbt-yzx.jpeg"
      alt="aaa"
    />
    <cube-popup type="my-popup" :mask="false" ref="myPopup">
      {{ message }}</cube-popup
    >
    <cube-form
      :model="model"
      :schema="schema"
      @submit="submitHandler"
    ></cube-form>
  </div>
</template>

<script>
import { Reguster } from "../../api/login/login.js";
export default {
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      message: "",
      schema: {
        fields: [
          // 登录  用户名配置
          {
            type: "input",
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "请输入账号"
            },
            rules: {
              required: true,
              type: "string",
              min: 3,
              max: 16
            },
            trigger: "blur",
            messages: {
              required: "用户名不能为空",
              min: "不少于3个字符",
              max: "不超过16个字符"
            }
          },
          // 密码配置
          {
            type: "input",
            modelKey: "password",
            label: "密码",
            props: {
              placeholder: "请输入密码",
              type: "password", //  类型是密码类型
              // autocomplete: "new-password",
              //密码后面的小眼睛
              eye: {
                open: false
              }
            },
            rules: {
              required: true //检测不能为空
            },
            trigger: "blur", //失去焦点是检测
            messages: {
              required: "用户名不能为空",
              min: "不少于3个字符",
              max: "不超过16个字符"
            }
          },
          {
            type: "submit",
            label: "注册"
          }
        ]
      }
    };
  },
  methods: {
    submitHandler() {
      // e.preventDefault(); //阻止冒泡
      Reguster(this.model)
        .then(res => {
          this.message = res.data.message;
          const component = this.$refs["myPopup"];
          component.show();
          setTimeout(() => {
            component.hide();
          }, 1000);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss">
.cube-popup-content {
  background-color: #4a4c5b;
  color: #fff;
  padding: 0.37037rem 0.37037rem;
}
</style>
<style lang="scss" scoped="scoped">
img {
  width: 100%;
  height: 100%;
}
</style>
