<template>
  <div class="technology">
    <!--banner-->
    <div class="banner">
      <img src="/static/img/technology/banner_technology.png" alt="">
    </div>
    <div class="container-fluid">
      <div class="container">
        <ul class="navBox nav nav-tabs nav-justified">
          <router-link role="presentation" class="" tag=  "li" to="/simulation"
                       :class="{active:'/simulation'===$route.path}"><a href="#">建模仿真</a></router-link>
          <router-link role="presentation" class="" tag="li" to="/multisource"
                       :class="{active:'/multisource'===$route.path}"><a href="#">多源数据融合</a></router-link>
          <router-link role="presentation" class="" tag="li" to="/perception"
                       :class="{active:'/perception'===$route.path}"><a href="#">智能感知</a></router-link>
        </ul>
      </div>
    </div>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "technology"
  }
</script>

<style scoped lang="less">
  .technology{
    .banner{
      width: 100%;
      img{
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
      }
    }
    div:nth-child(2){
      background: #ddd;
      .navBox {
        /*padding: 0 30px 0 30px;*/
        text-align: center;
        /*height: 70px;*/
        /*line-height: 70px;*/
        li{
          padding: 0;
          a{
            font-size: 18px;
            color: #373737;
            text-decoration: none;
          }
        }
        li.active a {
          color: #01ce8b !important;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    /*设置小于768px的时候，下拉菜单的样式*/
    .technology{
      div:nth-child(2){
        margin-bottom: 100px;
      }
    }
  }







</style>
