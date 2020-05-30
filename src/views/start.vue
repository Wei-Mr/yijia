<template>
  <div>
    <img src="../assets/logo.png" alt />
    <div class="btn">
      <van-button color="#FF644D" block round size="large" type="primary" plain @click="goLogin">登录</van-button>
      <van-button color="#FF644D" block round size="large" type="primary" plain @click="goRegister">注册</van-button>
    </div>
    <div class="footer">
      <span class="bottom" @click=" goHome">游客试用</span>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.state.vanTabbar = false;
  },

  destroyed() {
    // 当组件被销毁时候，修改导航数据
    this.$store.state.vanTabbar = true;
  },
  methods: {
    goHome() {
      this.$router.push({ name: "Home" });
    },
    goLogin() {
      this.$router.push({ name: "Login" });
    },
    goRegister() {
      this.$router.push({ name: "Register" });
    }
  }
};
</script>

<style lang="less" scoped>
div {
  img {
    width: 100px;
    border-radius: 25px;

    //图片位置
    display: block;
    left: 0;
    right: 0;
    margin: 0 auto;
    margin-top: 25%;
  }
  .btn {
    width: 80%;

    left: 0;
    right: 0;
    margin: 20% auto;

    .van-button {
      height: 50px;
      margin: 30px 0;
      font-size: 20px;
    }
  }
  .footer {
    text-align: center;
    .bottom {
      color: #666666;
      font-size: 20px;
      font-weight: normal;
      border-bottom: 3px solid #666666;
    }
  }
}
</style>