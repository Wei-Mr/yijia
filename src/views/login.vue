<template>
  <div>
    <h1>登录</h1>
    <h4>请认证信息登录</h4>
    <van-form @submit="login">
      <van-field
        label-width="70px"
        v-model="userInfo.phone"
        name="手机号"
        placeholder="手机号"
        autocomplete="off"
      />
      <van-field
        label-width="70px"
        v-model="userInfo.password"
        type="password"
        name="密码"
        placeholder="密码(6-16个字符)"
        autocomplete="off"
      />
      <div class="btn">
        <van-button round block color="#FF644D" type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>

    <p class="jump" @click="goHome">不想登录</p>
  </div>
</template>

<script>
//导入表单验证模块
import { valid } from "../utils/valid";

//导入公共方法模块
import { utils } from "../utils/utils";
export default {
  // data() {
  //   return {
  //     phone: "",
  //     password: ""
  //   };
  // },

  // destroyed() {
  // 当组件被销毁时候，修改导航数据
  //   this.$store.state.vanTabbar = true;
  // },
  computed: {
    userInfo() {
      return this.$store.state.loginModule.userInfo;
    }
  },

  methods: {
    // onSubmit(values) {
    //   console.log("submit", values);
    // },

    //登录
    login() {
      if (valid.validForm(this.userInfo, this)) {
        //发起ajax请求

        //加载提示
        this.$toast.loading({
          //是否禁止背景点击
          forbidClick: true,

          //禁止自动关闭
          duration: 0,

          message: "登录中..."
        });

        this.axios({
          method: "POST",
          url: "http://www.kangliuyong.com:10002/login",
          data: {
            appkey:'U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=',
            phone: this.userInfo.phone,
            password: this.userInfo.password
          },
          transformRequest: utils.transformRequest
        })
          .then(result => {
            //关闭加载提示
            this.$toast.clear();

            //如果登录成功后, 将token保存在cookie中
            if (result.data.code == 200) {
              //将token分段存储
              // let tokenData = result.data.token.split('.');
              //

              //cookie过期时间
              // let expires = 30 * 24 * 60 * 60;

              // tokenData.forEach((v, i) => {
              //   //v: 一个token分段
              //   this.$cookies.set('t' + i, v, expires);
              // })

              //存储token字符串
              localStorage.setItem("_t", result.data.token);

              //跳转页面
              this.$router.push({ name: "Home" });
            } else {
              this.$toast(result.data.msg);
            }
          })
          .catch(err => {
            this.$toast.clear();
          });
      }
    },

     goPage(routerName) {
      this.$router.push({name: routerName});
    },

    goHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style lang="less" scoped>
div {
  h1 {
    margin-left: 38px;
    margin-top: 40px;
    font-size: 36px;
    color: #666666;
  }
  h4 {
    margin-left: 38px;
    margin-top: 10px;
    font-size: 20px;
    color: #adacac;
  }
  .van-form {
    width: 80%;
    right: 0;
    left: 0;
    margin: 100px auto;
    .van-field {
      height: 60px;
      font-size: 20px;
    }
    .btn {
      margin: 50px 0;
      .van-button {
        height: 50px;
        font-size: 20px;
      }
    }
  }
}
.van-cell {
  line-height: 60px;
  border-bottom: 1px solid #666666;
  margin: 6px 0;
}

.jump {
  font-size: 15px;
  position: absolute;
  right: 25px;
  bottom: 100px;
  border: 2px solid #eeeeee;
  padding: 5px;
  border-radius: 15px;
  color: #dcdee0;
}
</style>