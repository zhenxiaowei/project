<template>
    <div class="perception">
      <div class="row">
        <h2>
          <span></span>目标识别
        </h2>
        <p>
          基于深度学习方法，将优化的目标检测、识别算法广泛的应用于道路、桥梁、障碍物等目标的检测和人员、车辆、动物等动目标的跟踪、识别。
        </p>
        <div class="col-xs-12 col-sm-6 col-md-6 img">
          <img src="/static/img/technology/tech01.png" alt="">
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 img">
          <img src="/static/img/technology/tech02.png" alt="">
        </div>
      </div>

      <div class="row">
        <h2>
          <span></span>图像处理
        </h2>
        <p>
          通过对图像进行去除噪声、增强、复原、分割、提取特征等处理，增强图像的质量，广泛应用于消除复杂天气条件对光学成像的影响，如去雾处理等。
        </p>
        <div class="col-xs-12 col-sm-6 col-md-6 img">
          <img src="/static/img/technology/tech03.png" alt="">
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 img">
          <img src="/static/img/technology/tech04.png" alt="">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Perception"
    }
</script>

<style scoped lang="less">
  .perception{
    text-align: center;
    padding-top: 30px;
    padding-bottom: 60px;
    div{
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
    }
    p{
      text-align: left;
      color: #85888e;
      font-size: 16px;
      text-indent: 20px;
    }
    .img{
      padding: 30px 10px 30px 0;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }

</style>
