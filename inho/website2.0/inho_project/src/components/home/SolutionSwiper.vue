<template>
  <div class="swiper-container solution">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in solution">
        <div class="container">
          <div class="row title">
            <h2>INDUSTRY SOLUTIONS</h2>
            <img src="/static/img/home/line.png" alt="">
            <p>解决方案</p>
          </div>
          <div class="row solutionDiv">
            <div class="col-xs-12 col-sm-6 col-md-7 img">
              <img :src="item.url" alt="">
            </div>
            <div class="col-xs-12 col-sm-6 col-md-5">
              <p>{{item.title}}</p>
              <p>{{item.subheading}}</p>
              <p>{{item.describe}}</p>
              <router-link tag="div" :to="{name:'Solution',params:{detailed:item.detailed,id:item.id}}" class="nextStyle">
                <img src="/static/img/product/btn5_hover.png" alt="">
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'    //必须引入

  export default {
    name: "SolutionSwiper",
    data() {
      return {
        software: [],
        solution:[]
      }
    },
    methods: {
      swiperInit() {
        var mySwiper = new Swiper('.solution', {
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          autoplay : 3000,
          speed:1000,
        });
      },
      getSolution() {
        this.$http.get("/api/getsolution")
          .then((response) => {
            this.solution=response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    mounted() {
      this.swiperInit();
      this.getSolution()
    },
    updated() {
      this.swiperInit();
    }
  }
</script>

<style scoped lang="less">
  @import "../../../node_modules/swiper/dist/css/swiper.css";

  .solution {
    .title {
      text-align: center;
      h2 {
        padding-bottom: 15px;
        font-size: 42px;
      }

      p {
        font-size: 24px;
        color: #30cb25;
        padding-bottom: 50px;
      }
    }
    text-align: center;
    background: #e6e6e6;
    padding-bottom: 50px;
    padding-top: 50px;
    .solutionDiv{
      img{
        width: 100%;
        height: 100%;
      }
      p{
        text-align: left;
        line-height: 50px;
      }
      p:nth-child(1){
        font-size: 36px;
      }
      p:nth-child(2){
        font-size: 28px;
      }
      p:nth-child(3){
        font-size: 14px;
        color: #85888e;
      }
      div.nextStyle{
        padding-top: 160px;float: right;cursor: pointer;
      }
    }
    /* .swiper-button-prev{
       width: 40px;
       height: 40px;
       background-image: url("/static/img/home/btn2_hover.png");
       background-size: auto;
       border: none;
    }
    .swiper-button-next{
      width: 40px;
      height: 40px;
      background-image: url("/static/img/home/btn3_hover.png");
      background-size: auto;
      border: none;
    }*/
    .swiper-button-prev{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l4.2%2C4.2L8.4%2C22l17.8%2C17.8L22%2C44L0%2C22z'%20fill%3D'%23008c3c'%2F%3E%3C%2Fsvg%3E");
      left: 15%;
    }
    .swiper-button-next{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L5%2C44l-4.2-4.2L18.6%2C22L0.8%2C4.2L5%2C0z'%20fill%3D'%23008c3c'%2F%3E%3C%2Fsvg%3E");
      right: 15%;
    }
  }

</style>
