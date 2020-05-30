<template>
  <div>
    <!-- <van-button @click="$router.go(-1)" type="default">返回</van-button> -->
    <van-sticky>
      <div class="search-box clearfix">
        <van-icon class="fl back" name="arrow-left" size="30px" color="#ffb2a6" @click="back" />
        <input class="fl" type="text" placeholder="查询关键字" v-model="keyword" />
        <div class="fl search-btn" @click="search">查询</div>
      </div>
    </van-sticky>
    <div class="mune-list">
      <div
        class="menus clearfix"
        v-for="(item, index) in menuData"
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
    <!-- <div v-else>搜索不到喔</div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
      menuData: []
    };
  },
  methods: {
    search() {
      this.axios({
        method: "POST",
        url: "/search",
        data: {
          keyword: this.keyword,
          appkey: this.appkey,
          num: 20
        },
        transformRequest(params) {
          let str = "";
          for (let key in params) {
            str += key + "=" + params[key] + "&";
          }
          str = str.slice(0, -1);
          // console.log("str ==> ", str);
          return str;
        }
      })
        .then(result => {
          // console.log("result ==> ", result);

          if (result.data.result.list == "") {
            return;
          }
          this.menuData = result.data.result.list;
          // console.log("this.dreamData ==> ", this.menuData);
        })
        .catch(err => {
          // console.log("err ==> ", err);
        });
    },
    goDetail(id) {
      this.$router.push({ name: "Detail", params: { id } });
    },
    //返回上一级
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.search-box {
  padding: 5px;
  background-color: #fff;
  .search-btn {
    height: 44px;
    width: 100px;
    color: #fff;
    background-color: #ffb2a6;
    text-align: center;
    line-height: 44px;
    font-size: 20px;
  }
  .back {
    margin: 6px 5px 6px 2px;
  }

  [type="text"] {
    width: calc(100% - 100px - 44px);
    height: 44px;
    padding: 0 10px;
    box-sizing: border-box;
    border: 1px solid #eee;
    font-size: 18px;
  }
}
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
</style>