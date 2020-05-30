<template>
  <div class="detail">
    <van-icon name="arrow-left" color="#FFB2A6" @click="back" />
    <img :src="detailData.pic" class="auto-img" alt />
    <p>{{detailData.name}}</p>
    <div class="like"></div>
    <ul class="clearfix">
      <li class="clearfix">
        <div class="moudle">
          <img src="../assets/时间.png" class="icons" alt />
          <div class="right fl">
            <p class="col">10分钟</p>
            <p>{{detailData.preparetime}}</p>
          </div>
        </div>
      </li>
      <li class="clearfix">
        <div class="moudle clearfix">
          <img src="../assets/cooker.png" class="icons" alt />
          <div class="right fl">
            <p class="col">10分钟</p>
            <p>{{detailData.cookingtime}}</p>
          </div>
        </div>
      </li>
      <li class="clearfix">
        <div class="moudle">
          <img src="../assets/餐厅.png" class="icons" alt />
          <div class="right fl">
            <p class="col">10分钟</p>
            <p>{{detailData.peoplenum}}</p>
          </div>
        </div>
      </li>
    </ul>
    <div class="text">
      <span>{{detailData.content}}</span>
    </div>
    <div class="material">
      <h1>需要材料</h1>
      <ul class="clearfix">
        <li class="clearfix" v-for="(item,index) in detailData.material" :key="index">
          <p>{{item.mname}}</p>
          <p>{{item.amount}}</p>
        </li>
      </ul>
    </div>
    <div class="practice">
      <h1>烹饪做法</h1>
      <div class="particulars" v-for="(item,index) in detailData.process" :key="index">
        <p>{{item.pcontent}}</p>
        <img :src="item.pic" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    //商品类型数据
    detailData() {
      return this.$store.state.detailModule.detailData;
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
    let id = this.$route.params.id;
    // console.log("id ==>", id);

    //获取菜单
    this.axios({
      method: "GET",
      url: "/detail",
      params: {
        appkey: this.appkey,
        id
      }
    })
      .then(result => {
        // console.log("detail result ==>", result);

        let types = result.data.result;

        this.$store.commit("detailModule/changedetailData", types);

        // console.log("this.detailData ==>", this.detailData);
        // 关闭加载提示
        this.$toast.clear();
      })
      .catch(err => {
        //关闭加载提示
        this.$toast.clear();
        // console.log("detail 出错了");
      });
  },

  destroyed() {
    // 当组件被销毁时候，修改导航数据
    this.$store.state.vanTabbar = true;
  },

  methods: {
    //返回上一级
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.detail {
  position: relative;
}

.like {
  width: 30px;
  height: 30px;
  background: url(../assets/like.png) no-repeat center center;
  background-size: cover;

  position: absolute;
  top: 263px;
  right: 30px;

  &.active {
    background-image: url("../assets/like-active.png");
  }
}

//返回
.van-icon {
  position: fixed;
  top: 15px;
  left: 15px;
}

//菜品图
img {
  width: 100%;
  height: 250px;
}

//菜名
p {
  margin: 14px 0;
  text-align: center;
  color: #666666;
  font-size: 22px;
}

//图标
ul {
  li {
    float: left;
    width: 33%;
    .moudle {
      padding: 0 14px;
      .icons {
        width: 36px;
        height: 36px;
        float: left;
        display: block;
      }
      .right {
        height: 36px;
        p {
          font-size: 12px;
          margin: 0;
        }
      }
    }
  }
}
.col {
  color: #ff976a;
}

//描述
.text {
  margin-top: 20px;
  border-bottom: 5px solid #dcdee0;
  padding-bottom: 20px;
  span {
    padding: 0 10px;
    font-size: 14px;
    color: #666666;
    display: inline-block;
  }
}

//material材料
.material {
  margin-top: 20px;
  border-bottom: 5px solid #dcdee0;
  h1 {
    padding: 0 10px;
    font-size: 16px;
    color: #ff976a;
  }
  ul {
    li {
      width: 100%;
      p {
        width: 50%;
        display: block;
        float: left;
        font-size: 15px;
      }
    }
  }
}

//practice烹饪操作
.practice {
  margin-top: 20px;
  h1 {
    padding: 0 10px;
    font-size: 16px;
    color: #ff976a;
  }
  //详细操作
  .particulars {
    p {
      font-size: 14px;
      color: #666666;
      padding: 10px;
    }
  }
  &:last-child {
    padding-bottom: 20px;
  }
}

.van-icon {
  width: 40px;
  height: 40px;
  background: #f0f0f0;
  border-radius: 50%;
  opacity: 0.8;
}
</style>