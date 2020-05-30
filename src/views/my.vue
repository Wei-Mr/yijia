<template>
  <div>
    <div class="personal">
      <img src="../assets/user.jpg" alt />
      <div class="right">
        <span @click="goStart">登录</span>
        <span>/</span>
        <span @click="goStart">注册</span>
      </div>
    </div>
    <van-cell title="账号管理" is-link to="login" />
    <van-cell title="安全中心" is-link to />
  </div>
</template>

<script>
export default {
  methods: {
    goStart() {
      this.$router.push({ name: "Start" });
    }
  }
};
</script>

<style lang="less" scoped>
.personal {
  width: 100%;
  height: 160px;
  background: #eee;

  position: relative;
  img {
    width: 80px;
    height: 80px;
    position: absolute;
    top: 40px;
    left: 20px;
    border-radius: 50%;
  }
  .right {
    position: absolute;
    top: 60px;
    right: 70px;
    font-size: 24px;
    height: 40px;
    line-height: 40px;
    color: #666666;
    span {
      padding: 5px;
    }
  }
}

.van-cell {
  font-size: 16px;
  border-bottom: 1px solid #efefef;
}
</style>