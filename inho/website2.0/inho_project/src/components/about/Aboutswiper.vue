<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="u in imgs">
        <div class="img">
          <img :src="u.url" alt="" @click="getImgPathFn(u.url)">
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
    name: "Swiper",
    data(){
      return {
        imgs:[]
      }
    },
    methods: {
      SwiperFn() {
        new Swiper('.swiper-container', {
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          slidesPerView: 6,
          spaceBetween: 50,
          breakpoints: {
            1024: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
        });
      },
      getImgPathFn(path){
        this.$parent.url=path;
      },
      getQualifications() {
        this.$http.get("/api/getqualifications")
          .then((response) => {
            this.imgs = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    mounted() {
      this.getQualifications()
    },
    updated() {
      this.SwiperFn();
    }
  }
</script>

<style scoped lang="less">
  @import "../../../node_modules/swiper/dist/css/swiper.css";

  .swiper-container {
    background: #e1e1e1;
    padding: 40px;
    .swiper-slide{
      display: block;
      text-align: center;
      cursor: pointer;
      .img{
        width: 100%;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
/*    span{
      float: right;
      display: block;
      width: 65px;
      height: 22px;
      background: url("/static/img/home/btn_normal.png") no-repeat;
      margin-top: 28px;
      margin-bottom: 59px;
    }
    .swiper-button-prev
      width: 40px;
      height: 40px;
      background-image: url("/static/img/home/btn2_hover.png");
      background-size: auto;
      border: none;
      left: 0;
    }
    .swiper-button-next{
      width: 40px;
      height: 40px;
      background-image: url("/static/img/home/btn3_hover.png");
      background-size: auto;
      border: none;
      right: 0;
    }*/
    .swiper-button-prev{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l4.2%2C4.2L8.4%2C22l17.8%2C17.8L22%2C44L0%2C22z'%20fill%3D'%23008c3c'%2F%3E%3C%2Fsvg%3E");
    }
    .swiper-button-next{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L5%2C44l-4.2-4.2L18.6%2C22L0.8%2C4.2L5%2C0z'%20fill%3D'%23008c3c'%2F%3E%3C%2Fsvg%3E");
    }
  }





</style>
