<template>
  <div class="content">
    <!--banner-->
    <div class="banner">
      <img src="/static/img/home/banner_home.png" alt="">
    </div>

    <div class="container technology">
      <!--核心技术-->
      <div class="row title">
        <h2>COPE TECHNOLOGY</h2>
        <img src="/static/img/home/line.png" alt="">
        <p>核心技术</p>
      </div>
      <div class="row technologyBox">
        <router-link class="col-xs-12 col-sm-6 col-md-4" :to="{name:'Simulation'}" tag="div">
          <img src="/static/img/home/home_techicon3.png" alt="">
          <h2>建模仿真</h2>
          <p class="p1">Modeling And Simulation</p>
          <p>通过对红外或电磁条件下的特殊目标建模计算，真实再现目标红外或电磁图像，为关产品论证、研发、训练提供数据支持。</p>
        </router-link>
        <router-link class="col-xs-12 col-sm-6 col-md-4" :to="{name:'Perception'}" tag="div">
          <img src="/static/img/home/home_techicon2.png" alt="">
          <h2>智能感知</h2>
          <p class="p1">Intelligent Perception</p>
          <p>基于计算机视觉、机器学习等人工智能手段，使用优化的目标检测识别算法，实现对道路、桥梁等检测以及对车辆、人员等动目标的跟踪识别。</p>
        </router-link>
        <router-link class="col-xs-12 col-sm-6 col-md-4" :to="{name:'Perception'}" tag="div">
          <img src="/static/img/home/home_techicon1.png" alt="">
          <h2>多源数据融合</h2>
          <p class="p1">Multisource Data Fusion</p>
          <p>基于多源探测数据，利用人工智能算法融合分析处理，真正实现“事前预警、事中响应、事后反馈”的立体化联动分析，打通数据壁垒，构建智慧安防。</p>
        </router-link>
      </div>
    </div>
    <div class="container-fluid solution">
      <!--解决方案-->
      <!-- <div class="container">
         <div class="row title">
           <h2>INDUSTRY SOLUTIONS</h2>
           <img src="/static/img/home/line.png" alt="">
           <p>解决方案</p>
         </div>
         <div class="row solutionDiv">
           <div class="col-xs-12 col-sm-6 col-md-7 img">
             <img src="/static/img/home/home_solutions1.png" alt="">
           </div>
           <div class="col-xs-12 col-sm-6 col-md-5">
             <p>多源融合智能区域警戒系统</p>
             <p> 多源数据融合 目标精准感知</p>
             <p> Intelligent regional alert system</p>
             <router-link tag="div" to="comprehensive" class="nextStyle">
               <img src="/static/img/product/btn5_hover.png" alt="">
             </router-link>
           </div>
         </div>
       </div>-->
      <v-solution></v-solution>
    </div>
    <div class="container products">
      <div class="row title">
        <h2>PRODUCTS</h2>
        <img src="/static/img/home/line.png" alt="">
        <p>产品与服务</p>
      </div>
      <div class="row">
        <ul class="col-sm-12">
          <li class="col-xs-12 col-sm-4 col-md-4" v-for="(tit,index) in title" @click="getIdFn(tit.name,index)"
              :class="{ on:index ==current}">
            <a href="javascript:;">{{tit.name}}</a>
          </li>
        </ul>
      </div>
      <div class="row">
        <!-- Swiper -->
        <v-swiper :itemName="name"></v-swiper>

      </div>
    </div>
    <!--绿色部分-->
    <div class="container-fluid back">

    </div>
    <!--联系我们-->
    <div class="container">
      <div class="row title">
        <h2>CONTACT US</h2>
        <img src="/static/img/home/line.png" alt="">
        <p>联系我们</p>
      </div>
      <v-contactus></v-contactus>
    </div>
  </div>
</template>

<script>
  import Contactus from '@/components/Contactus'
  import Swiper from '@/components/home/Swiper'
  import SolutionSwiper from '@/components/home/SolutionSwiper'

  export default {
    name: "Home",
    data() {
      return {
        name: '多源融合产品',
        current: 0,
        title: [
          {
            "id": 1,
            "name": "多源融合产品"
          },
          {
            "id": 2,
            "name": "建模仿真软件"
          },
          {
            "id": 3,
            "name": "信息化综合平台"
          }
        ]
      }
    },
    components: {
      "v-contactus": Contactus,
      "v-swiper": Swiper,
      "v-solution": SolutionSwiper

    },
    methods: {
      getIdFn(name, index) {
        this.name = name;
        this.current = index;
      }
      // get("api/software/1",function(msg){
      //   console.log(msg);
      // },function(msg){showError(msg.msg);})
      //
      // // 向具有指定ID的用户发出请求
      // this.$http.get("api/software")
      //   .then(function (response) {
      //     console.log(response.data);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    }
  }
</script>

<style scoped lang="less">
  .content {
    /*banner*/

    .banner {
      width: 100%;

      img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
      }
    }

    .title {
      text-align: center;
      padding-top: 50px;

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

    /*核心技术*/

    .technology {
      .technologyBox {
        text-align: center;

        div {
          cursor: pointer;

          h2 {
            padding-top: 40px;
            font-size: 22px;
            font-weight: bold;
          }

          p {
            line-height: 30px;
            color: #85888e;
            font-size: 14px;
          }

          .p1 {
            line-height: 50px;
          }
        }
      }
    }

    /*解决方案*/

    .solution {
      padding: 50px 0;
    }

    /*产品与服务*/

    .products {
      div:nth-child(2) {
        padding-bottom: 50px;

        ul {
          li {
            text-align: center;

            a {
              font-size: 16px;
              color: #818388;
              cursor: pointer;
              /*padding-bottom: 7px;*/
              text-decoration: none;

              &:hover {
                border-bottom: 2px solid #008c3c;
              }
            }
          }

          li:nth-child(1) {
            text-align: right;
          }

          li:nth-child(3) {
            text-align: left;
          }

          @media screen and (max-width: 768px) {
            /*设置小于768px的时候，下拉菜单的样式*/
            li:nth-child(1) {
              text-align: center;
            }

            li:nth-child(3) {
              text-align: center;
            }
          }

          .on a {
            border-bottom: 2px solid #008c3c;
            color: #008c3c !important;
          }
        }
      }

      div:nth-child(3) {
        padding-bottom: 83px;
      }
    }

    /*绿色部分*/

    .back {
      width: 100%;
      height: 250px;
      background: url("/static/img/home/back.png") no-repeat;
    }
  }
</style>
