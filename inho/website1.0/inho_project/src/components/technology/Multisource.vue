<template>
    <div class="Multisource">
      <div class="row">
        <h2>
          <span></span>多源数据融合
        </h2>
        <p>
          通过TOF传感器、微波雷达、光电系统的数据融合，实现对监控区域目标信息的立体化、多维感知，实现准确、可靠的安防监控。
        </p>
        <div class="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6">
          <img src="/static/img/technology/duoyuan.png" alt="">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Multisource"
    }
</script>

<style scoped lang="less">
  .Multisource{
    text-align: center;
    padding-bottom: 60px;
    h2{
      line-height: 50px;
      font-size: 18px;
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
    }
    div{
      padding-top: 30px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }

</style>
