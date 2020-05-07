<template>
  <div class="container Intelligence">
<!--    <div class="row conStyle">
      <h2>
        综合数据智能管理平台
      </h2>
      <p>基于SOA框架的综合数据智能管理平台通过企业服务总线（ESB）实现各业务系统的互访和连通。</p>
    </div>
    <div class="row conStyle">
      <h2>
        <span></span>平台概述：
      </h2>
      <p class="col-sm-12">
        随着信息化发展，企业业务系统越来越多，各业务系统彼此孤立形成“数据孤岛”。随着大数据分析和数据挖掘技术发展，企业数据综合分析和深度挖掘成为企业加强管理、提高决策水平的有力手段，各业务系统数据的孤立成为数据综合处理的屏障。</p>
      <div class="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6">
        <img src="/static/img/solution/home_solutions8.png" alt="">
      </div>
      <p class="col-sm-12">
        基于SOA框架的综合数据智能管理平台，通过SOA框架搭建统一的业务系统平台，实现各系统数据的有效连通，在此基础上融入大数据分析和数据挖掘技术，并建立信息化的安全控制和访问机制，实现主要业务系统的统一身份管理和授权管理，为企业数据深度使用提供了解决途径。</p>
      <div class="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6">
      <img src="/static/img/solution/home_solutions7.png" alt="">
      </div>
    </div>
    <div class="row conStyle">
      <h2>
        <span></span>平台功能：
      </h2>
      <p class="col-sm-12">
        基于SOA框架的综合数据智能管理平台通过企业服务总线（ESB）实现各业务系统的互访和连通。在ESB基础上建立主数据管理（MDM）平台，对企业主要数据在各业务系统间实现统一规范、统一管理。平台为各业务系统建立统一的安全控制，实现统一的用户管理、权限管理，通过单点登录技术实现一次登录，便可以使用平台所有运行使用系统。平台建立统一的门户网站，并允许多客户端平台登录。平台融入大数据分析和数据挖掘，可对所有系统的所有数据进行统计和分析，并通过数据深度挖掘，为企业决策、财务预算等提供数据支持。</p>
      <div class="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6">
      <img src="/static/img/solution/solution_img5.png" alt="">
      </div>
    </div>
    <div class="row conStyle">
      <h2>
        <span></span>平台特点：
      </h2>
      <p> 1.基于SOA框架所设计，具有各业务系统松耦合、可重用的优势，便于业务系统扩展和变更；
      </p>
      <p> 2.各系统具有统一的门户网站，实现单点登录功能，方便用户一次登录，便可使用所有的业务流程；
      </p>
      <p> 3.通过企业服务总线，所有业务系统实现数据共享；
      </p>
      <p> 4.具有大数据分析和数据挖掘模块，可实现对全系统人员、资源、费用等的高效管理。
      </p>
    </div>
    <div class="row conStyle">
      <h2>
        <span></span>应用场景：
      </h2>
      <p>
        用于大中型企业、公司或事业单位等的信息化系统集成、大数据平台的搭建、各业务系统的数据共享。
      </p>
    </div>-->
    <div v-html="detailed"></div>

  </div>
</template>

<script>
  export default {
    name: "Intelligence",
    props:['detailed']
  }
</script>

<style scoped >
  .conStyle {
    text-align: center;
    padding-bottom: 30px;
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

  .imgBox {
    height: 463px;
  }

  img {
    padding-top:30px;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    /*设置小于768px的时候，下拉菜单的样式*/
    .Intelligence {
      margin-top: 100px;
    }
  }
</style>
