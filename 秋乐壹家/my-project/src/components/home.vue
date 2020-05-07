<template>
  <div>
     <swiper :options="swiperOption">
      <swiper-slide>
        <a href="#"><img src="/static/img/index/banner1.png"/></a>
      </swiper-slide>
      <swiper-slide>
        <a href="#"><img src="/static/img/index/banner2.png"/></a>
      </swiper-slide>
      <swiper-slide>
        <a href="#"><img src="/static/img/index/banner3.png"/></a>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
    </swiper>
    <!--    <section class="app">
          <div class="top">
            <div class="item1">
              <img src="/static/img/index/index_btn.png">
            </div>
            <div class="item2">
              <img src="/static/img/index/fangda.png" alt="">
              <input type="text" placeholder="玉米种子">
            </div>
          </div>
        </section>-->
    <div class="classify">
      <router-link :to="{name:'classifyAll'}" tag="div" class="item">
        <img src="/static/img/index/yumi.png" alt="">
        <p>玉米</p>
      </router-link>
      <router-link :to="{name:'classifyAll'}" tag="div" class="item">
        <img src="/static/img/index/xiaomai.png" alt="">
        <p>小麦</p>
      </router-link>
      <router-link :to="{name:'classifyAll'}" tag="div" class="item">
        <img src="/static/img/index/huasheng.png" alt="">
        <p>花生</p>
      </router-link>
      <router-link :to="{name:'classifyAll'}" tag="div" class="item">
        <img src="/static/img/index/shucai.png" alt="">
        <p>蔬菜</p>
      </router-link>
      <router-link :to="{name:'classifyAll'}" tag="div" class="item">
        <img src="/static/img/index/jixie.png" alt="">
        <p>农业机械</p>
      </router-link>
      <router-link :to="{name:'classifyAll'}" tag="div" class="item">
        <img src="/static/img/index/feiliao.png" alt="">
        <p>肥料</p>
      </router-link>
      <router-link :to="{name:'classifyAll'}" tag="div" class="item">
        <img src="/static/img/index/nongyao.png" alt="">
        <p>农药</p>
      </router-link>
      <router-link :to="{name:'classify',params:{plan:'全部'}}" tag="div" class="item">
        <img src="/static/img/index/quanbu.png" alt="">
        <p>全部</p>
      </router-link>
    </div>
    <!--  <div class="exercise">
        <div class="item item1">促销</div>
        <div class="item">
          <img align="center" src="/static/img/index/huodong.png" alt="">
        </div>
        <div class="item">所得税可所得税可敬的sd的考试敬的sd的考试</div>
      </div>-->
    <div class="inDetailBox yumi">
      <div>
        <div><span></span>
          <h3>玉米种子</h3></div>
        <router-link :to="{name:'classifyAll'}" tag="a">更多
        </router-link>
      </div>
      <div class="inDetail">
        <router-link :to="{name:'details'}" tag="div" class="item">
          <img src="/static/img/index/inDetail-1.png" alt="">
          <h6>秋乐种业郑单全国种植面积最广秋乐种业郑单全国种植面积最广秋乐种业郑单全国种植面积最广。</h6>
          <span>￥108.00</span>
        </router-link>
        <router-link :to="{name:'details'}" tag="div" class="item">
          <img src="/static/img/index/inDetail-1.png" alt="">
          <h6>秋乐种业郑单全国种植面积最广秋乐种业郑单全国种植面积最广秋乐种业郑单全国种植面积最广。</h6>
          <span>￥108.00</span>
        </router-link>
        <router-link :to="{name:'details'}" tag="div" class="item">
          <img src="/static/img/index/inDetail-1.png" alt="">
          <h6>秋乐种业郑单全国种植面积最广秋乐种业郑单全国种植面积最广秋乐种业郑单全国种植面积最广。</h6>
          <span>￥108.00</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

    import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: "Home",
    components: {
      swiper,
      swiperSlide
    },
    data(){
      return {
        swiperOption: {
          autoplay: {//自动播放
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {//分页
            el: '.swiper-pagination',
            clickable: true,
            renderBullet(index, className) {//自定义分页的按钮
              return `<span class="${className} swiper-pagination-bullet-custom"></span>`
            }
          }
        }
      }
    },
        mounted() {
      // get(webroot+"/add/getData?id=11",function(msg){
      //     console.log(msg);
      //   },function(msg){showError(msg.msg);})
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*轮播图*/
  .swiper-container {
    position: relative;
    width: 100%;
    height: 3.2rem;
  }

  .swiper-slide {

    /* Center slide text vertically */
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

  .swiper-slide  img {
    width: 100%;
    height: 100%;
  }

  .swiper-pagination-bullet-active {
    background-color: #29873b !important;
  }

  .swiper-pagination span {
    float: right;
  }


  /*搜索部分*/
  /* .app {
     position: absolute;
     top: 0.1rem;
     z-index: 1000;
   }

   .top {
     width: 100%;
     height: 0.8rem;
     line-height: 0.8rem;
   }

   .top .item1 {
     float: left;
     width: 0.7rem;
     padding-left: 0.2rem;
     height: 0.7rem;
     padding-top: 0.05rem;
   }

   .top .item2 {
     position: relative;
     float: left;
     width: 6.6rem;
     opacity: 0.7;
   }

   .top img {
     width: 100%;
     height: 100%;
     opacity: 0.7;
   }

   .top .item2 input {
     width: 5.6rem;
     margin-left: 0.2rem;
     padding-left: 0.55rem;
     height: 0.5rem;
     border-radius: 1rem;
     border: 0.01rem solid #a7b1b2;
   }

   .app .top .item2 img {
     position: absolute;
     width: 0.28rem;
     height: 0.28rem;
     margin-left: 0.4rem;
     margin-top: 0.27rem;
     background-size: 100%;
   }
 */
  /*分类样式开始*/
  .classify {
    width: 100%;
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap; /*换行，第一行在上方*/
    border-bottom: 0.01rem solid #dedfe5;
    background-color: #fff;
    margin-bottom: 0.2rem;
  }

  .classify .item {
    width: 1.875rem;
    height: 1.7rem;
    text-align: center;
    padding-top: 0.3rem;
  }

  .classify .item img {
    width: 0.8rem;
    height: 0.8rem;
  }

  .classify .item p {
    color: #585858;
    font-size: 0.26rem;
  }

  /*促销活动*/
  /*  .exercise {
      display: flex;
      margin-bottom: 0.2rem;
    }

    .exercise .item {
      width: 100%;
      flex: 1;
      height: 0.79rem;
      line-height: 0.79rem;
      border-top: 0.01rem solid #dedfe5;
      border-bottom: 0.01rem solid #dedfe5;
      background-color: #fff;
    }

    .exercise div:nth-child(1) {
      flex: 0 0 0.7rem;
      padding-left: 0.2rem;
      color: #e84a55;
      font-size: 0.24rem;
    }

    .exercise div:nth-child(2) {
      flex: 0 0 1rem;
    }

    .exercise div:nth-child(2) img {
      width: 0.86rem;
      height: 0.45rem;
    }

    .exercise div:nth-child(3) {
      overflow: hidden;
    }*/

  /*详细分类*/
  .inDetailBox {
    width: 100%;
    border-top: 0.01rem solid #dedfe5;
    border-bottom: 0.01rem solid #dedfe5;
    margin-bottom: 0.2rem;
    background: #fff;
  }

  .inDetailBox > div:nth-child(1) {
    width: 100%;
    height: 0.75rem;
    line-height: 0.75rem;
    border-bottom: 0.01rem solid #dedfe5;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;

  }

  .inDetailBox > div:nth-child(1) > div {
    width: 50%;
    color: #007f28;
  }

  .inDetailBox > div:nth-child(1) > div > span {
    float: left;
    margin-top: 0.19rem;
    margin-left: 0.2rem;
    display: block;
    width: 0.06rem;
    height: 0.36rem;
    background: #007f28;

  }

  .inDetailBox > div:nth-child(1) > div > h3 {
    float: left;
    margin-left: 0.15rem;
    font-size: 0.3rem;
    line-height: 0.75rem;
  }

  .inDetailBox > div:nth-child(1) > a {
    width: 50%;
    padding-right: 0.23rem;
    color: #858585;
    font-size: 0.22rem;
    text-align: right;
  }


  .inDetailBox .inDetail {
    display: flex;
    width: 100%;
  }

  .inDetailBox .inDetail .item {
    flex: 1;
    text-align: center;
  }

  .inDetailBox .inDetail img {
    width: 2.15rem;
    height: 1.5rem;
    margin-top: 0.1rem;
  }

  .inDetailBox .inDetail h6 {
    font-size: 0.18rem;
    color: #585858;
    padding-left: 0.15rem;
    padding-top: 0.1rem;
    text-align: left;
    font-weight: normal;
    height: 0.6rem;
    overflow: hidden;
    /*text-overflow: ellipsis;
    white-space: nowrap;*/
  }

  .inDetailBox .inDetail span {
    display: block;
    color: #ff4400;
    text-align: left;
    font-size: 0.28rem;
    font-weight: bold;
    padding: 0.1rem 0 0.15rem 0.15rem;
  }
</style>
