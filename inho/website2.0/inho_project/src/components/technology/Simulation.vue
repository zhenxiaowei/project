<template>
  <div class="simulation">
<!--    <div class="row">
      <h2>
        <span></span>雷达系统建模仿真
      </h2>
      <p>
        基于仿真模型和数据库进行雷达系统的分布式建模仿真，真实反映目标与电磁散射特性在雷达传感器的响应。以信号为纽带实现反导预警雷达系统对不同目标的搜索、拦截、跟踪、识别和制导等过程的动态仿真。
      </p>
      <div class="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6">
        <img src="/static/img/technology/tech08.png" alt="">
      </div>
    </div>
    <div class="row">
      <h2>
        <span></span>红外目标建模仿真
      </h2>
      <p>
        针对仿真对象真实参数，结合对目标运动特性的计算结果，对目标和周围环境进行红外计算和仿真，并给出结合探测器响应参数，真实再现红外镜头中的三维场景红外图像。
      </p>
      <div class="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6">
        <img src="/static/img/technology/tech1.png" alt="">
      </div>
    </div>
    <div class="row">
      <h2>
        <span></span>雷达数据处理
      </h2>
      <p>
        雷达数据处理是对雷达获取的目标及环境的电磁散射特性数据进行处理，得到目标及环境的RCS值以及相关曲线图，并识别目标。雷达获取的数据具有数据量大、处理复杂的问题，公司对现有算法进行优化，实现了对雷达反射截面数据高速、有效的分析处理。
      </p>
      <div class="col-xs-12 col-sm-6 col-md-6 img">
        <img src="/static/img/technology/tech_03.png" alt="">
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 img">
        <img src="/static/img/technology/tech_04.png" alt="">
      </div>
    </div>-->
    <div v-html="detailed"></div>
  </div>
</template>

<script>
  export default {
    name: "Simulation",
    props:['detailed']
  }
</script>

<style scoped lang="less">
  .simulation {
    text-align: center;
    padding-bottom: 60px;
    h2 {
      line-height: 50px;
      font-size: 18px;
      text-align: left;
      span {
        display: inline-block;
        border: 5px solid #01d08c;
        border-radius: 50%;
        margin-right: 10px
      }
    }
    p {
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
    .img{
      padding-right: 10px;
    }
  }


</style>
