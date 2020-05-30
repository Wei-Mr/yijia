<template>
  <div>
    <van-sticky>
      <van-search
        v-model="value"
        @focus="getSearch"
        shape="round"
        background="#FFB2A6"
        placeholder="请输入搜索关键词"
      />
    </van-sticky>
    <div class="menu-data">
      <ul class="conent">
        <li class="content-item" v-for="(item,index) in typeData" :key="index">
          <h1 class="tab">{{item.name}}</h1>
          <div
            class="lab"
            v-for="(num,ind) in item.list"
            :key="ind"
            @click="goGoods(num.classid)"
          >{{num.name}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },

  created() {
    //获取菜谱类型数据
    this.getType();
    //加载提示
    this.$toast.loading({
      forbidClick: true,
      duration: 0,
      message: "加载中..."
    });
  },

  computed: {
    //商品类型数据
    typeData() {
      return this.$store.state.categoryModule.typeData;
    }
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

    //获取菜谱类型
    getType() {
      this.axios({
        methods: "POST",
        url: "/class",

        //get请求携带的参数
        params: {
          appkey: this.appkey
        }
      })
        .then(result => {
          // console.log("getType result ==>", result);

          let types = result.data.result;

          this.$store.commit("categoryModule/changeTypeData", types);
          // console.log("this.typeData ==>", this.typeData);
          this.$toast.clear();
        })
        .catch(err => {
          // console.log("getType 出错了");
          this.$toast.clear();
        });
    },

    //携带商品pid跳转详情页
    goGoods(classid) {
      this.$router.push({ name: "Goods", params: { classid } });
    }
  }
};
</script>

<style lang="less" scoped>
.menu-data {
  display: flex;
  position: fixed;
  top: 53.94px;
  bottom: 49.99px;
  left: 0;
  right: 0;

  .conent {
    background-color: #fff;

    //滚动条效果
    height: 100%;
    overflow-y: auto;
  }
}
.aside-item {
  text-align: center;
  line-height: 44px;
  font-size: 20px;
  &.active {
    background-color: #fff;
    color: #ff644d;
  }
}
.content-item {
  h1 {
    text-align: center;
    font-size: 22px;
  }
  .lab {
    width: 82px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    display: inline-block;
    border: 1px solid #eee;
    border-radius: 20px;
    margin: 10px 0;
    margin-left: 7.5px;

    color: #666666;
  }
}

.tab {
  margin: 10px;
  color: #ffb2a6;
}
</style>