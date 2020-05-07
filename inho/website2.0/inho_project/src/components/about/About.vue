<template>
    <div class="about">
      <!--banner-->
      <div class="banner">
        <img src="/static/img/about/banner_about.png" alt="">
      </div>
      <div class="container-fluid navStyle">
        <div class="container">
          <ul class="navBox nav nav-tabs nav-justified">
            <router-link role="presentation" tag="li" to="/companyprofile" :class="{active:'/companyprofile'===$route.path}"><a href="#">公司简介</a></router-link>
            <router-link role="presentation" tag="li" to="/honor" :class="{active:'/aboutswiper'===$route.path}"><a href="#">资质荣誉</a></router-link>
            <router-link role="presentation" tag="li" to="/tel" :class="{active:'/tel'===$route.path}"><a href="#">联系我们</a></router-link>
            <router-link role="presentation" tag="li" to="/recruit" :class="{active:'/recruit'===$route.path}"><a href="#">招聘职位</a></router-link>
          </ul>
        </div>
      </div>
      <div class="container-fluid map">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "about"
    }
</script>

<style scoped lang="less">
  .about{
    .banner{
      width: 100%;
      img{
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
      }
    }
    .container{
      a{
        font-size: 18px;
        color: #373737;
        text-decoration: none;
      }
      li.active a{
        color: #00dd9e !important;
      }
    }
    .navStyle{
      background: #ddd;
    }
    .map{
      margin: 0;
      padding: 0;
    }

  }

</style>
