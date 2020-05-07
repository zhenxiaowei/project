<template>
  <div>
    <div class="userinfo">
      <div class="item logo">
        <img src="/static/img/index/banner1.png" alt="">
      </div>
      <div class="item">
        <p>李某某 15886868888</p>
        <p>账户管理、收货地址</p>
        <p>
          <span>白银会员</span>
          <span>已缴纳质保金</span>
        </p>
      </div>
      <div class="item jiantou" @click="goTo('/memberMessage')">
        <img src="/static/img/member/jiantou.png" alt="">
      </div>
    </div>
    <div class="orderBox">
      <div class="orderHeader" @click="goTo('/myOrder')">
        <div><span></span><span>我的订单</span></div>
        <div>
          <img src="/static/img/member/jth.png" alt="">
        </div>
      </div>
      <div class="orderContent">
        <div>
          <img src="/static/img/member/pending_payment.jpg" alt="">
          <p>代付款</p>
        </div>
        <div>
          <img src="/static/img/member/pending_receive.jpg" alt="">
          <p>代收货</p>
        </div>
        <div>
          <img src="/static/img/member/cancelled.jpg" alt="">
          <p>已完成</p>
        </div>
        <div>
          <img src="/static/img/member/completed.jpg" alt="">
          <p>已取消</p>
        </div>
      </div>
    </div>
    <div class="listBox">
      <div class="orderHeader">
        <div><span class="list1"></span><span>积分商城</span></div>
        <div>
          <img src="/static/img/member/jth.png" alt="">
        </div>
      </div>
      <div class="orderHeader" @click="goTo('/pulpit')">
        <div><span class="list2"></span><span>秋乐讲坛</span></div>
        <div>
          <img src="/static/img/member/jth.png" alt="">
        </div>
      </div>
      <div class="orderHeader">
        <div><span class="list3"></span><span>土壤肥料检测</span></div>
        <div>
          <img src="/static/img/member/jth.png" alt="">
        </div>
      </div>
      <div class="orderHeader">
        <div><span class="list4"></span><span>专家热线</span></div>
        <div>
          400-666-8888
          <img src="/static/img/member/list44.png" alt="">
        </div>
      </div>
      <div class="orderHeader">
        <div><span class="list5"></span><span>关于秋乐</span></div>
        <div>
          <img src="/static/img/member/jth.png" alt="">
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
    name: 'member',
    methods: {
      goTo:function(path) {
        this.$router.replace(path);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*会员中心头部*/
  .userinfo {
    width: 100%;
    height: 2.2rem;
    background-image: url("/static/img/member/headerbg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.22rem;
  }

  .item {
    flex-grow: 1; /*有剩余空间，放大*/
    flex-basis: auto; /*自适应宽度*/
    margin-left: 0.23rem;
    color: #fff;
    font-size: 0.26rem;
  }

  .item span {
    background: #f76900;
    padding: 0.03rem 0.1rem;
    border-radius: 0.1rem;
    font-size: 0.18rem;
  }

  .logo {
    flex-grow: 0; /*有剩余空间，不放大*/
    flex-basis: 1.1rem; /*设置固定宽度*/
    height: 1.1rem;
    margin-left: 0.42rem;
    border-radius: 50%;
    overflow: hidden;
    border: 0.05rem solid #aed9a2;
  }

  .logo img {
    width: 100%;
    height: 100%;
  }

  .jiantou {
    flex-grow: 0; /*有剩余空间，不放大*/
    flex-basis: 0.56rem;
    margin: 0;
  }

  .jiantou img {
    width: 0.16rem;
    height: 0.32rem;
  }

  /*我的订单*/
  .orderBox {
    width: 100%;
    background: #fff;
    margin-bottom: 0.22rem;
  }

  .orderHeader {
    width: 100%;
    height: 0.87rem;
    border-bottom: 0.01rem solid #e3e3e3;
    display: flex;
    display: -webkit-flex;
    align-items: center; /*垂直居中*/
    justify-content: space-between; /*左右一遍一个*/
    color: #000;
  }

  .orderHeader span:nth-child(1) {
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    padding-top: 0.1rem;
    background-image: url("/static/img/member/dingdan.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin: 0 0.2rem 0 0.29rem;
    align-self: center;
  }

  .orderHeader img {
    width: 0.14rem;
    height: 0.26rem;
    margin-right: 0.31rem;
  }


  .orderContent {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between; /*两端对齐，项目之间的间隔都相等*/
    height: 1.42rem;
    align-items: center;
  }

  .orderContent div {
    width: 25%;
    text-align: center;
  }

  .orderContent img {
    width: 0.47rem;
    height: 0.42rem;
    margin-bottom: 0.08rem;
  }

  /*积分商城部分*/
  .listBox {
    margin-bottom: 0.22rem;
  }

  .listBox .orderHeader {
    background: #fff;
  }

  .listBox .orderHeader .list1 {
    background-image: url("/static/img/member/list1.png");
  }

  .listBox .orderHeader .list2 {
    background-image: url("/static/img/member/list2.png");
  }

  .listBox .orderHeader:nth-child(4) {
    margin-bottom: 0.22rem;
  }

  .listBox .orderHeader:nth-child(4) img {
    width: 0.4rem;
    height: 0.4rem;
  }

  .listBox .orderHeader .list3 {
    background-image: url("/static/img/member/list3.png");
  }

  .listBox .orderHeader .list4 {
    background-image: url("/static/img/member/list5.png");
  }

  .listBox .orderHeader .list5 {
    background-image: url("/static/img/member/list4.png");
  }
</style>
