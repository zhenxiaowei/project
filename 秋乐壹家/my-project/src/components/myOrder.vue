<template>
  <div>
    <ul class="orderBox">
      <li class="item on">全部</li>
      <li class="item">待付款</li>
      <li class="item">待收货</li>
      <li class="item">已完成</li>
      <li class="item">已取消</li>
    </ul>
    <div class="orderDetails">
      <div class="detailsList">
        <div class="listHeader">
          <h6>山东省聊城市冠县南关种子农药门市</h6>
          <span>买家已付款</span>
        </div>
        <div class="listCenter">
          <div class="list img1"><img src="/static/img/index/inDetail-1.png" alt=""></div>
          <div class="list title">
            <h6>对满仓-翡翠绿</h6>
            <p>规格: 袋</p>
            <p>重量: 1.25kg</p>
            <p><b>￥35.00</b><span>1袋</span></p>
          </div>
        </div>
        <div class="listFooter">
          <span>2017年1月1日 19:00:00</span>
          <span>共1件商品 实付款：<b>￥35.00</b></span>
        </div>
      </div>
    </div>
    <div class="orderDetails">
      <div class="detailsList">
        <div class="listHeader">
          <h6>山东省聊城市冠县南关种子农药门市</h6>
          <span>买家已付款</span>
        </div>
        <div class="listCenter">
          <div class="list img1"><img src="/static/img/index/inDetail-1.png" alt=""></div>
          <div class="list title">
            <h6>对满仓-翡翠绿</h6>
            <p>规格: 袋</p>
            <p>重量: 1.25kg</p>
            <p><b>￥35.00</b><span>1袋</span></p>
          </div>
        </div>
        <div class="listFooter">
          <span>2017年1月1日 19:00:00</span>
          <span>共1件商品 实付款：<b>￥35.00</b></span>
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
    name: 'myOrder'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .orderDetails{
    margin-top: 0.2rem;
  }
  .orderBox {
    display: flex;
    background: #fff;
    border-bottom: 0.01rem solid #e0e0e0;
  }

  .item {
    flex: 1;
    text-align: center;
    height: 0.89rem;
    line-height: 0.89rem;
    margin: 0 0.24rem 0 0.24rem;
  }

  .on {
    border-bottom: 0.05rem solid #ffb900;
  }

  .listHeader {
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    height: 0.56rem;
    background: #fff;
    border-bottom: 0.01rem solid #e0e0e0;
    border-top: 0.01rem solid #e0e0e0;
    align-items: center;
    padding-left: 0.19rem;
    padding-right: 0.19rem;
  }

  .listHeader h6 {
    font-weight: bold;
  }

  .listHeader span {
    color: #ffb900;
  }

  .listCenter {
    display: flex;
    display: -webkit-flex;
    border-bottom: 0.01rem solid #e0e0e0;
  }

  .list {
    flex: 1;
    height: 1.9rem;
    background-color: #fff;
    padding: 0.21rem 0.21rem 0.21rem 0;
  }

  .img1 {
    flex: 0 0 2.36rem;
    padding: 0.21rem;
  }

  .img1 img {
    width: 100%;
    height: 100%;
  }

  .listCenter .title h6 {
    font-weight: bold !important;
  }

  .listCenter .title p {
    color: #585858;
    font-size: 0.12rem;
    line-height: 0.4rem;
  }

  .listCenter .title p b {
    color: #ff4700;
  }

  .listCenter .title p span {
    padding-left: 0.1rem;
  }

  .listFooter {
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    height: 0.56rem;
    background: #fff;
    border-bottom: 0.01rem solid #e0e0e0;
    align-items: center;
    padding-left: 0.19rem;
    padding-right: 0.19rem;
    font-size: 0.12rem;
    color: #585858;
  }

  .listFooter b {
    color: #ff4700;
    font-size: 0.3rem;
  }
</style>
