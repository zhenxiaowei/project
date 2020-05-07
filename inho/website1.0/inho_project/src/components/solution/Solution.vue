<template>
    <div class="Solution">
      <div class="banner">
        <img src="/static/img/solution/banner_solution.png" alt="">
      </div>
      <div class="container-fluid">
      <div class="container">
        <ul class="navBox nav nav-tabs nav-justified">
          <router-link role="presentation" class="col-sm-6" tag="li" to="/comprehensive" :class="{active:'/comprehensive'===$route.path}"><a href="#">综合数据智能管理平台解决方案</a></router-link>
          <router-link role="presentation" class="col-sm-6" tag="li" to="/intelligence" :class="{active:'/intelligence'===$route.path}"><a href="#">智能区域警戒系统解决方案</a></router-link>
        </ul>

      </div>
      </div>
      <div class="container" style="padding: 30px 0 60px 0">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Solution"
    }
</script>

<style scoped lang="less">
  .Solution{
    .container-fluid{
      background: #ddd;
    }
  }
  .banner{
    width: 100%;}
  .banner img{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  .navBox{
    text-align: center;
    li{
      padding: 0;
    }
  }
  .navBox a{
    font-size: 18px;
    color: #373737;
    text-decoration: none;
  }
  .active a{
    color: #01ce8b !important;
  }
</style>
