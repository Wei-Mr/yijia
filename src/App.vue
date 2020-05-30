<template>
  <div id="app">
    <router-view></router-view>
    <!-- <van-tabbar v-model="active" active-color="#FF644D" v-show="$store.state.vanTabbar" route>
      <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="bar-chart-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="like-o" to="/like">收藏</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/my">个人</van-tabbar-item>
    </van-tabbar> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="less">
body {
  margin: 0;
}
#app {
  overflow: hidden;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.auto-img {
  width: 100%;
  display: block;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
input {
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
}
p,
h1,
h4 {
  margin: 0;
  font-weight: normal;
  color: #666666;
}
</style>
