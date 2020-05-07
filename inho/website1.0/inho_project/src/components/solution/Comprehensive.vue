<template>
  <div class="container Comprehensive">
    <div class="row conStyle">
      <h2>
        多源融合智能区域警戒系统
      </h2>
      <p>可应用于国界边防、机场、电站、重要场所围界、军事基地围界、敏感卡口等复杂场景、空旷场所或具有高安防价值的重要场所。</p>
    </div>
    <div class="row conStyle">
      <h2>
        <span></span>系统概述：
      </h2>
      <p>通过多源融合，实现对监测区域360度全方位监控，并对区域内目标进行跟踪、抓拍、识别，实现对全区域实时监控预警。</p>
    </div>
    <div class="row conStyle">
      <h2>
        <span></span>系统组成：
      </h2>
      <p> 系统分为数据采集系统和系统显控终端两大部分，数据采集系统部分由TOF三维传感器、光电系统（摄像机）、视频编码器、网络交换机组成</p>
      <div class="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6">
        <img src="/static/img/solution/solution_img3.png" alt="">
      </div>
    </div>
    <div class="row conStyle">
      <h2>
        <span></span>工作流程：
      </h2>
      <div class="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6">
        <img class="img" src="/static/img/solution/solution_img1.png" alt="">
      </div>
<!--      <div class="col-xs-12 col-sm-3 col-md-3 imgBox" style="padding: 12px 0;">
        <img class="img" src="/static/img/solution/solution_img2.png" alt="">
      </div>-->
    </div>
    <div class="row conStyle">
      <h2>
        <span></span>系统功能：
      </h2>
      <p>（1）实时监控</p>
      <p> 实现监控区域内活动目标的搜索探测、定位和识别，从而实现对目标区域的全方位、24小时实时监控。</p>
      <p> （2）跟踪识别
      </p>
      <p> 跟踪探测区域内的所有活动目标，实时显示防卫区域内报知的活动目标的运动轨迹，并对其进行图像识别、显示和存储。
      </p>
      <p> （3）定位报警
      </p>
      <p> 在电子地图实时显示目标的位置信息和实时运动轨迹，还可设置任意形状的多个报警区、报警线，对越过报警线的移动目标进行自动声光告警。
      </p>
      <p> （4）异常行为检测
      </p>
      <p> 通过分析目标运动轨迹，可以对目标进行滞留、徘徊、聚集等异常行为检测，可用于敏感区域的安防监控，提前准确的判断可疑目标。</p>
      <div class="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6">
        <img src="/static/img/solution/solution_img4.png" alt="">
      </div>
    </div>
    <div class="row conStyle">
      <h2>
        <span></span>系统特点：
      </h2>
      <p> 360°全方位检测，实现全局可靠监控 采用虚拟围界，实现警戒区的灵活配置
      </p>
      <p> 无视光线影响，实现全天时实时工作 目标跟踪处理，实现对目标的持续观测
      </p>
      <p> 自动智能分析处理，实现无人值守 质量性能可靠，基本实现免维护使用
      </p>
      <p> 融合人脸识别，实现人员精准监控 架设方便简单，实现最小工程量安装
      </p>
      <p> 光电配合联动，实现发现即看到 异常行为检测，提前预测可疑目标
      </p>
    </div>
    <div class="row conStyle">
      <h2>
        <span></span>应用场景：
      </h2>
      <p>
        军事基地是非常重要的安防目标，具有非常高的军事价值，常常受到敌对势力威胁。军事基地的威胁多发生在夜间，并具有针对性和隐蔽性。智能区域警戒系统可在无人值守的情况下有效实现防止周界入侵、外围预警、出入口监控和重要目标防护。</p>
      <p>
        在机场飞机起飞或降落区域是机场的重点保护区，严禁一切人员和车辆进入，否则将会威胁飞机安全，容易造成严重的安全事故。然而人员闯入跑道事件却时有发生，而该区域面积一般都较大，给监管带来了很大困难。智能区域警戒系统可有效监测机场跑道和重点区域的一切动目标，防止危害机场安全的事故发生。</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Comprehensive"
  }
</script>

<style scoped>
  .conStyle {
    text-align: center;
  }

  .conStyle h2 {
    line-height: 50px;
    font-size: 18px;
    text-align: left
  }

  .conStyle h2 span {
    display: inline-block;
    border: 5px solid #01d08c;
    border-radius: 50%;
    margin-right: 10px
  }

  .conStyle > p {
    text-align: left;
    color: #85888e;
    font-size: 16px;
    text-indent: 20px;
    line-height: 30px;
  }


  img {
    padding-top: 30px;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    /*设置小于768px的时候，下拉菜单的样式*/
    .Comprehensive {
      margin-top: 100px;
    }
  }

</style>
