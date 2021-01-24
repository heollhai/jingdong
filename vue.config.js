module.exports = {
  //webpack扩展
  configureWebpack: {
    devServer: {
      port: 8080, //端口号
      open: true, //启动打开浏览器
      //mock接口编写的地方
      before(app) {
        //注册接口
        // 用户信息
        let userPoor = [
          { username: "jeck", password: "123456" },
          { username: "jeck1", password: "123456" }
        ];
        // 注册
        app.get("/api/reguster", (req, res) => {
          const username = req.query;
          // 过滤下注册的  用户名是不是在   用户信息里面有
          const userLength = userPoor.filter(res => res.username === username)
            .length;
          // 如果有，，那么提示
          if (userLength > 0) {
            res.json({
              code: 20000,
              success: false,
              message: "用户名已存在"
            });
          } else {
            // 没有  提示
            res.json({
              code: -1,
              success: true,
              message: "注册成功"
            });
          }
        });

        // 登录
        let tokenKey = "qwerty";
        app.get("/api/login", (req, res) => {
          const { username, password } = req.query;
          if (
            (username === "jeck" && password === "123456") ||
            (username === "jeck1" && password === "123456")
          ) {
            res.json({
              code: 20000,
              message: "登录成功",
              token:
                tokenKey +
                "-" +
                username +
                "-" +
                (new Date().getTime() + 60 * 60 * 1000)
            });
          } else {
            res.json({
              code: -1,
              message: "账号或密码错误"
            });
          }
        });
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"]
      }
    }
  },
  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: true
    }
  }
};
