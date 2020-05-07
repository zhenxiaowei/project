<template>
<div class="app">
    <div class="item1">
        <img src="/static/img/sussess/success.png" alt="">
    </div>
    <div class="item2">
        <p>支付成功！</p>
        <p>订单已经成功提交，我们会尽快发货。</p>
        <p>感谢对秋乐E商城的支持！</p>
    </div>
    <button class="readOrder">查看订单详情</button>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'successfulTrade',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 0.7rem;
    text-align: center;
    flex-wrap:wrap;
    background: #fff;
}

.app .item1,.app .item2 {
    width: 100%;
}
.app .item2{
    padding-top: 0.23rem;
}
.item2 p{
    font-size: 0.24rem;
    color: #585858;
}
.item2 p:nth-child(1){
    color: #29873b;
    font-size: 0.3rem;
    padding-bottom: 0.44rem;
}
.item2 p:nth-child(2){
    padding-bottom: 0.26rem;
}
.item2 p:nth-child(3){
    padding-bottom: 0.5rem;
}
.readOrder{
    font-size: 0.24rem;
    background-color: #f79100;
    border: none;
    border-radius: 0.1rem;
    width: 2.27rem;
    height: 0.51rem;
    color: #fff;
    font-weight: bold;
    margin-bottom: 0.69rem;
}

</style>
