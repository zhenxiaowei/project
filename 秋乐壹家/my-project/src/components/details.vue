<template>
<div>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="/static/img/details/banner1.png" alt=""/>
        </div>
        <div class="swiper-slide">
            <img src="/static/img/details/banner1.png" alt=""/>
        </div>
    </div>
    <div class="swiper-pagination"></div>
</div>
<div class="commodityName">
    <h3>店铺名称:<span>山东省聊城市冠县冠农种子公司</span></h3>
    <h3>商品名称:<span>西红柿睿优A378</span></h3>
</div>
</div>
</template>

<script type="text/ecmascript-6">
  export default {
  name: 'commodityDetails',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    mounted(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-container {
    width: 100%;
    height:6rem;
}
.swiper-slide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.swiper-slide img{
    width: 100%;
    height: 100%;
}
.swiper-pagination-bullet-active{
    width: 0.3rem !important;
    border-radius: 1rem !important;
    background: red !important;
}
.commodityName{
    background: #fff;
    padding-left: 0.2rem;
}
.commodityName h3{
    font-size: 0.28rem;
    color: #333;
}
</style>
