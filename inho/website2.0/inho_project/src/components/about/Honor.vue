<template>
    <div class="Honor container">
      <div class="row conStyle">
        <p>
          公司在与国内外著名厂商、科研院所、军工院校的广泛合作中，借鉴吸收先进的理念和技术，先后获得了软件企业认证、国军标质量管理体系认证、武器装备科研生产单位保密资格认定等资质，为企业进一步发展奠定坚实的基础。</p>
      </div>
      <div class="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6 conStyle">
        <img :src="url" alt="">
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Honor",
      data(){
          return {
            url:"/static/img/about/7.jpg"
          }
      }
    }
</script>

<style scoped>
  .Honor{
    padding: 30px 0 60px 0;
  }
  .conStyle {
    text-align: center;
    padding-bottom: 30px;
  }

  .conStyle h2 {
    line-height: 50px;
    font-size: 22px;
    text-align: left
  }

  .conStyle h2 span {
    display: inline-block;
    border: 5px solid #01d08c;
    border-radius: 50%;
    margin-right: 10px
  }

  .conStyle>p {
    text-align: left;
    color: #85888e;
    font-size: 16px;
    text-indent: 20px;
    line-height: 30px;
  }
  .conStyle img{
    width: 100%;
    height: 100%;
  }
</style>
