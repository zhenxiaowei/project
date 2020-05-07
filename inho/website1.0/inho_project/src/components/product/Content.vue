<template>
  <div class="product">
    <div class="banner">
      <img src="/static/img/product/banner_product.png" alt="">
    </div>
    <div class="container" v-html="this.$route.query.describe">
<!--      <div class="row">
        <h2>
          多源融合智能区域警戒系统
        </h2>
        <p>可应用于国界边防、机场、电站、重要场所围界、军事基地围界、敏感卡口等复杂场景、空旷场所或具有高安防价值的重要场所。</p>
      </div>
      <div class="row">
        <h2>
          <span></span>系统概述：
        </h2>
        <p>通过多源融合，实现对监测区域360度全方位监控，并对区域内目标进行跟踪、抓拍、识别，实现对全区域实时监控预警。</p>
      </div>
      <div class="row">
        <h2>
          <span></span>系统组成：
        </h2>
        <p> 系统分为数据采集系统和系统显控终端两大部分，数据采集系统部分由TOF三维传感器、光电系统（摄像机）、视频编码器、网络交换机组成</p>
        <div class="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6">
          <img src="/static/img/solution/solution_img3.png" alt="">
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "product"
  }
</script>

<style scoped lang="less">
  .product{
    .banner{
      width: 100%;
    }
    .container{
      padding-top: 88px;
      div{
        text-align: center;
        padding-bottom: 88px;
        h2{
          line-height: 50px;
          font-size: 22px;
          text-align: left;
          span{
            display: inline-block;
            border: 5px solid #01d08c;
            border-radius: 50%;
            margin-right: 10px
          }
        }
        p{
          text-align: left;
          color: #85888e;
          font-size: 16px;
          text-indent: 20px;
          line-height: 30px;
        }
        div{
          padding: 30px 0;
        }
      }
    }
    img{
      width: 100%;
      height: 100%;
    }
  }








</style>
