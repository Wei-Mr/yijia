<template>
  <div>
    <van-sticky>
      <van-nav-bar title="列表" @click-left="back">
        <template #left>
          <van-icon color="ffb2a6" name="arrow-left" size="20" />
        </template>
      </van-nav-bar>
    </van-sticky>
    <!-- <div class="type-menu">
      <div class="menus clearfix">
        <img src="../assets/白菜.jpg" class="menus-imgs fl" alt />
        <div class="introduction fl">
          <p>酸甜白菜</p>
          <div class="text">
            醋溜白菜，是北方人经常吃的一道菜，
            尤其是在多年前的冬天。
            那时，没有大棚菜，冬天，
            家家每天佐餐的基本上都是冬储大白菜，
            聪明的家庭主妇总是想方设法将这单调的菜变成多种菜式，
            于是，醋溜白菜被频繁的端上餐桌。
            <br />美食不分贵贱
            ，用最平凡的原料、最简单的调料和最普通的手法做出美味的
            菜肴来才是美食的真谛。
            <br />这次，我做的醋溜白菜，近似
            鲁菜的做法，使个这道菜酸甜浓郁、开胃下饭、老少咸宜。
          </div>
        </div>
      </div>
    </div>-->

    <div class="type-menu">
      <div
        class="menus clearfix"
        v-for="(item,index) in goodsData.list"
        :key="index"
        @click="goDetail(item.id)"
      >
        <img :src="item.pic" class="menus-imgs fl" alt />
        <div class="introduction fl">
          <p>{{item.name}}</p>
          <div class="text">{{item.content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    //商品类型数据
    goodsData() {
      return this.$store.state.goodsModule.goodsData;
    }
  },

  created() {
    this.$store.state.vanTabbar = false;
    //加载提示
    this.$toast.loading({
      forbidClick: true,
      duration: 0,
      message: "加载中..."
    });

    //截取路由参数
    let classid = this.$route.params.classid;
    // console.log("classid ==>", classid);

    //获取菜单
    this.axios({
      method: "GET",
      url: "/byclass",
      params: {
        appkey: this.appkey,
        classid,
        num: 20
      }
    })
      .then(result => {
        // console.log("goods result ==>", result);

        let types = result.data.result;

        this.$store.commit("goodsModule/changegoodsData", types);

        // console.log("this.typeData ==>", this.goodsData);
        // 关闭加载提示
        this.$toast.clear();
      })
      .catch(err => {
        //关闭加载提示
        this.$toast.clear();
        // console.log("goods 出错了");
      });
  },

  methods: {
    //返回上一级
    back() {
      this.$router.go(-1);
    },
    //携带商品pid跳转详情页
    goDetail(id) {
      this.$router.push({ name: "Detail", params: { id } });
    }
  },
  destroyed() {
    // 当组件被销毁时候，修改导航数据
    this.$store.state.vanTabbar = true;
  }
};
</script>

<style lang="less" scoped>
.type-menu {
  .menus {
    padding: 10px;
    border-bottom: 1px solid #f0f0f0;
    .menus-imgs {
      width: 85px;
      height: 85px;
      border-radius: 6px;
    }
    .introduction {
      //   padding: 1px 0;
      p {
        width: 250px;
        padding: 0 10px;
        font-size: 18px;
        color: #ff644d;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .text {
        margin: 4px 10px;
        font-size: 14px;
        width: 250px;
        color: #666666;

        //多行溢出隐藏
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; //行数
        -webkit-box-orient: vertical;
      }
    }
  }
}
.type-menu:last-child {
  margin-bottom: 50px;
}
.van-icon-arrow-left {
  color: #ffb2a6;
}
</style>