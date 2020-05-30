<template>
  <div id="apps">
    <!-- 路由入口 一级路由-->
  <van-tabbar v-model="active" active-color="#FF644D" route>
      <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="bar-chart-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="like-o" to="/like">收藏</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/my">个人</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      active: 0
    };
  }
};
</script>


<style lang="less">
body {
  margin: 0 auto;
}
#apps{
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
// .bottomnull {
//   height: 50px;
//   width: 100%;
// }
</style>