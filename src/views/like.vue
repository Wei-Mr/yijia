<template>
  <div class="like">
    <van-sticky>
      <van-nav-bar title="我的收藏" left-arrow :fixed="true" />
    </van-sticky>
    <div class="likebox clearfix">
      <div class="likegoods clearfix fl" v-for="(item, index) in imgs" :key="index">
        <img :src="item.img" class=".auto-img imgs" alt />
        <p class="fl">{{item.name}}</p>
        <img src="../assets/delet.png" class=".auto-img fr imgsmall" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        {
          img: "http://api.jisuapi.com/recipe/upload/20160719/115215_95144.jpg",
          name: "大煮干丝"
        },
        {
          img: "http://api.jisuapi.com/recipe/upload/20160719/115241_22969.jpg",
          name: "双耳炒黄瓜"
        },
        {
          img: "http://api.jisuapi.com/recipe/upload/20160719/115251_79664.jpg",
          name: "虾米拌芹菜"
        },
        {
          img: "http://api.jisuapi.com/recipe/upload/20160719/115149_81427.jpg",
          name: "木瓜粥"
        },
        {
          img: "http://api.jisuapi.com/recipe/upload/20160719/115405_36218.jpg",
          name: "酒酿猪蹄"
        },
        {
          img: "http://api.jisuapi.com/recipe/upload/20160719/115404_54653.jpg",
          name: "牛奶蒸鸡蛋羹"
        },
        {
          img: "http://api.jisuapi.com/recipe/upload/20160719/122213_52503.jpg",
          name: "韭菜炒虾仁"
        },
        {
          img: "http://api.jisuapi.com/recipe/upload/20160719/120732_60811.jpg",
          name: "玉米粥"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.like {
  position: relative;
}
.likebox {

  // height: 100%;
  // overflow-y: auto;
  margin: 50px 0;
  .likegoods {
    width: 50%;
    margin-bottom: 20px;
    .imgs {
      width: 80%;
      display: block;
      right: 0;
      left: 0;
      margin: 0 auto;
    }
    .imgsmall {
      width: 30px;
      margin-right: 10%;
    }
    p {
      margin-left: 12%;
      display: inline-block;
      height: 30px;
      line-height: 30px;
      font-size: 18px;
      color: #666666;
    }
  }
}
</style>