<template>
  <div>
    <!--    <div class="search">
          <img src="/static/img/index/fangda.png" alt="">
          <input type="text" placeholder="搜索">
        </div>-->

    <div class="content">
      <ul class="left">
        <li v-for="(item,index) in classData" @click="fn1(item)" :class="{on:index==kouweiSpan}">{{item}}</li>
      </ul>
      <div class="right">
        <div class="rightBox" v-for="item in data">
          <h6>{{item.name}}</h6>
          <ul class="product">
            <li v-for="a in item.msg" @click="goTo('/details')">
              <img :src="a.url" alt="">
              <p>{{a.title}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footer_bottom></footer_bottom>
  </div>
</template>

<script type="text/ecmascript-6">
  import footer_bottom from './footers'

  export default {
    components: {footer_bottom},
    name: 'classify',
    data() {
      return {
        classData: ['全部', '玉米', '小麦', '花生', '蔬菜', '农业机械', '肥料', '农药'],
        classData1: [
          {
            name: '玉米', msg: [
              {url: '/static/img/index/inDetail-1.png', title: '鱼11鱼'},
              {url: '/static/img/index/inDetail-1.png', title: '鱼11鱼'},
              {url: '/static/img/index/inDetail-1.png', title: '鱼11鱼'}]
          },
          {
            name: '小麦', msg: [
              {url: '/static/img/index/inDetail-1.png', title: '鱼12鱼'},
              {url: '/static/img/index/inDetail-1.png', title: '鱼12鱼'},
              {url: '/static/img/index/inDetail-1.png', title: '鱼12鱼'}
            ]
          }],
        data: [],
        kouweiSpan: 0,  //控制点亮状态
        name: this.$route.params.plan
      };
    },
    mounted() {
      this.data = this.classData1;
      //console.log(this.$route.params.plan);
      this.fn1(this.$route.params.plan);
    },
    methods: {
      fn1(name) {
        for (var i = 0; i < this.classData.length; i++) {
          var name1 = this.classData[i];
          if (name1 == name) {
            this.kouweiSpan = i;
            break;
          }
        }
        if (name == '全部' || name == undefined) {
          this.data = this.classData1;
        } else {
          this.data = this.classData1.filter(function (item, index) {
            if (item.name == name) {
              return item;
            }
          });
        }
      },
      goTo: function (path) {
        this.$router.replace(path);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*搜索*/
  /*
    .search {
      position: relative;
      padding-left: 0.25rem;
      padding-right: 0.25rem;
      height: 0.95rem;
      display: flex;
      flex-direction: row;
      justify-content: center; !*居中*!
      align-items: center; !*交叉轴的中点对齐*!
      border-bottom: 0.01rem solid #d9d9d9;
    }

    .search img {
      position: absolute;
      left: 0.57rem;
      width: 0.28rem;
      height: 0.28rem;
      !*background-image: url("/static/img/index/fangda.png");*!
      background-size: 100% 100%;

    }

    .search input {
      width: 7rem;
      height: 0.6rem;
      border-radius: 1rem;
      padding-left: 0.69rem;
      border: 0.01rem solid #d9d9d9;
    }*/

  /*分类内容左边导航样式*/
  .content {
    width: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    height: 100%;
  }

  .content .left {
    width: 20%;
    border-right: 0.01rem solid #d9d9d9;
  }

  .content .right {
    width: 80%;
    background: #fff;
  }

  .content .left li {
    padding-left: 0.2rem;
    height: 0.79rem;
    line-height: 0.79rem;
    border-bottom: 0.01rem solid #d9d9d9;
    font-size: 0.28rem;
    color: #585858;
  }

  .rightBox {
    padding-left: 0.34rem;
    padding-bottom: 0.2rem;
    padding-top: 0.2rem;
  }

  .rightBox h6 {
    color: #585858;
    font-size: 0.24rem;
  }

  .product {
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
  }

  .product li {
    width: 1.84rem;
    padding-top: 0.2rem;
  }

  .product li img {
    width: 1.84rem;
    height: 1.5rem;
  }

  .product li p {
    color: #585858;
    font-size: 0.24rem;
    padding-top: 0.1rem;
  }

  .on {
    background: #fff;
  }

</style>
