<template>
  <div class="home">
    <van-sticky>
      <van-search
        v-model="value"
        @focus="getSearch"
        shape="round"
        background="#FFB2A6"
        placeholder="请输入搜索关键词"
      />
    </van-sticky>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
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
import { Toast } from "vant";
export default {
  data() {
    return {
      value: "",
      active: 0,
      images: [
        "https://img.ivsky.com/img/bizhi/pre/201405/04/shejianshangde_zhongguo-002.jpg",
        "https://img.ivsky.com/img/bizhi/pre/201405/04/shejianshangde_zhongguo.jpg",
        "https://img.ivsky.com/img/bizhi/pre/201907/26/dangao_mianbao-004.jpg",
        "https://img.ivsky.com/img/bizhi/pre/201510/14/cake-003.jpg",
        "https://img.ivsky.com/img/bizhi/pre/201604/05/qingzheng_pangxie-002.jpg",
        "https://img.ivsky.com/img/bizhi/pre/201908/13/shousi.jpg"
      ],
      menuData: []
    };
  },
  computed: {
    //商品类型数据
    goodsData() {
      return this.$store.state.goodsModule.goodsData;
    }
  },
  created() {
    //加载提示
    this.$toast.loading({
      forbidClick: true,
      duration: 0,
      message: "加载中..."
    });
    this.axios({
      method: "GET",
      url: "/byclass",
      params: {
        appkey: this.appkey,
        classid: 565,
        num: 20
      }
    })
      .then(result => {
        // console.log("goods result ==>", result);

        let types = result.data.result;

        this.$store.commit("goodsModule/changegoodsData", types);

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
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    },
    getSearch() {
      // 跳转路由
      this.$router.push("/search");
    },
    //携带商品pid跳转详情页
    goDetail(id) {
      this.$router.push({ name: "Detail", params: { id } });
    }
  }
};
</script>

<style lang="less" scoped>
//introduction介绍

//早餐562
//午餐563
//晚餐565

img {
  width: 100%;
  height: 180px;
  display: block;
}
.type-menu {
  .menus {
    padding: 10px;
    .menus-imgs {
      width: 100px;
      height: 100px;
      border-radius: 6px;
    }
    .introduction {
      padding: 9px 0;
      p {
        padding: 0 10px;
        font-size: 20px;
        color: #ff644d;
      }
      .text {
        margin: 4px 10px;
        font-size: 14px;
        width: 220px;
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

// .type-menu {
//   display: flex;
//   position: fixed;
//   top: 277.97px;
//   bottom: 49.99px;
//   left: 0;
//   right: 0;
//   height: 100%;
//   overflow-y: auto;
//   background: #eee;
// }

.type-menu:last-child {
  margin-bottom: 50px;
}
</style>