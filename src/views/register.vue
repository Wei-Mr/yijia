<template>
  <div>
    <h1>注册</h1>
    <h4>请认证信息注册</h4>
    <van-form @submit="onSubmit">
      <van-field
        label-width="70px"
        v-model="username"
        name="用户名"
        placeholder="用户名"
        autocomplete="off"
      />
      <van-field
        label-width="70px"
        v-model="phone"
        name="手机号"
        placeholder="手机号"
        autocomplete="off"
      />
      <van-field
        label-width="70px"
        v-model="password"
        type="password"
        name="密码"
        placeholder="密码"
        autocomplete="off"
      />
      <div class="btn">
        <van-button round block color="#FF644D" type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <p class="jump" @click="goHome">不想注册</p>
    <!-- <div class="footer">

    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      phone: "",
      password: ""
    };
  },
  created() {
    this.$store.state.vanTabbar = false;
  },

  destroyed() {
    // 当组件被销毁时候，修改导航数据
    this.$store.state.vanTabbar = true;
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
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
  bottom: 90px;
  border: 2px solid #eeeeee ;
  padding: 5px;
  border-radius: 15px;
  color: #dcdee0;
}
</style>