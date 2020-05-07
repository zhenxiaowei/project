<template>
  <div class="swiper-container product">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="s in software">
        <div class="img">
          <img :src="s.url1" alt="">
        </div>
        <h2>{{s.title}}</h2>
        <p>{{s.introduce}}</p>
        <span @click="$router.push({name:'Content',params:{describe:s.describe}})"></span>
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
    props: ["itemName"],
    data() {
      return {
        software: []
      }
    },
    methods: {
      getData(name) {
        var data = JSON.stringify({
          "pageSize": "all",
          "pageNo": 1,
          "type": name
        });
        post("/api/getAllData", data, (msg) => {
          this.software = msg.data;
        }, (msg) => {
          showError(msg.msg);
        })
        // this.$http.get(url)
        //   .then((response) => {
        //     this.software = response.data;
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
      },
      swiperInit() {
        new Swiper('.product', {
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          slidesPerView: 3,
          spaceBetween: 50,
          breakpoints: {
            1024: {
              slidesPerView: 3,
              spaceBetween: 40
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
        });
      }
    },
    mounted() {
      this.getData(this.itemName)
    },
    updated() {
      this.swiperInit();
    },
    watch: {
      itemName(newVal, oldVal) {
        this.getData(this.itemName);
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../node_modules/swiper/dist/css/swiper.css";

  .swiper-container {
    padding: 40px;

    .swiper-wrapper {

      .swiper-slide {
        padding: 10px;
    /*    box-shadow: 0 0 5px #000;*/
        border: 2px solid #ddd;
        border-bottom: 2px solid #ddd;

        div {
          height: 130px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        h2 {
          height: 60px;
          line-height: 60px;
          font-size: 16px;
          overflow: hidden;
        }

        p {
          color: #85888e;
          font-size: 14px;
          height: 60px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }

        span {
          cursor: pointer;
          float: right;
          display: block;
          width: 65px;
          height: 22px;
          background: url("/static/img/home/btn_normal.png") no-repeat;
          margin-top: 28px;
          margin-bottom: 59px;
        }

        &:hover {
          border-bottom: 2px solid #008c3c;

          span {
            background: url("/static/img/home/btn6_hover.png") no-repeat;
          }
        }
      }
    }

/*    .swiper-button-prev {
      width: 40px;
      height: 40px;
      background-image: url("/static/img/home/btn2_hover.png");
      background-size: auto;
      border: none;
      left: 0;
    }

    .swiper-button-next {
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
