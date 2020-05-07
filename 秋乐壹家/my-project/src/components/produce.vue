<template>
  <div>
    <div class="allChecked">
      <span>
        <label class="checklist" :class="[checked ? iChecked : activeClass]">
            <input class="checkbox" v-model="checked" type="checkbox"/>
        </label>全选
      </span>
      <span>编辑</span>
    </div>

    <div class="listCenter">
      <div class="list list1">
        <label class="checklist" :class="[checked ? iChecked : activeClass]">
          <input class="checkbox" v-model="checked" type="checkbox"/>
        </label>
      </div>
      <div class="list list2">
        <img src="/static/img/gouwu/1.png" alt="">
      </div>
      <div class="list list3">
        <h6>对满仓-翡翠绿</h6>
        <p>规格: 袋</p>
        <p>重量: 1.25kg</p>
        <p><b>￥35.00</b><span>1袋</span></p>
      </div>
      <div class="list list4">
        <i></i>
        <span>
          <button class="btnStyle">-</button>
          <input type="text" value="0" size="1" id="ef">
          <button class="btnStyle">+</button>
        </span>
      </div>
    </div>
    <div class="listCenter">
      <div class="list list1">
        <label class="checklist" :class="[checked ? iChecked : activeClass]">
          <input class="checkbox" v-model="checked" type="checkbox"/>
        </label>
      </div>
      <div class="list list2">
        <img src="/static/img/gouwu/1.png" alt="">
      </div>
      <div class="list list3">
        <h6>对满仓-翡翠绿</h6>
        <p>规格: 袋</p>
        <p>重量: 1.25kg</p>
        <p><b>￥35.00</b><span>1袋</span></p>
      </div>
      <div class="list list4">
        <i></i>
        <span>
          <button class="btnStyle">-</button>
          <input type="text" value="0" size="1" id="ef">
          <button class="btnStyle">+</button>
        </span>
      </div>
    </div>
    <div class="inDetailBox">
      <div>
        <div><span></span>
          <h3>玉米种子</h3></div>
        <a href="#">换一批</a>
      </div>
      <div class="inDetail">
        <div class="item">
          <img src="/static/img/index/inDetail-1.png" alt="">
          <h6>秋乐种业郑单全国种植面积最广秋乐种业郑单全国种植面积最广秋乐种业郑单全国种植面积最广。</h6>
          <span>￥108.00</span>
        </div>
        <div class="item">
          <img src="/static/img/index/inDetail-1.png" alt="">
          <h6>秋乐种业郑单全国种植面积最广秋乐种业郑单全国种植面积最广秋乐种业郑单全国种植面积最广。</h6>
          <span>￥108.00</span>

        </div>
        <div class="item">
          <img src="/static/img/index/inDetail-1.png" alt="">
          <h6>秋乐种业郑单全国种植面积最广秋乐种业郑单全国种植面积最广秋乐种业郑单全国种植面积最广。</h6>
          <span>￥108.00</span>
        </div>
      </div>
    </div>
    <div class="balance">
      <span>合计:<b>￥108.00</b></span>
      <button>去结算</button>
    </div>
    <footer_bottom></footer_bottom>
  </div>
</template>

<script type="text/ecmascript-6">
  import footer_bottom from './footers'

  export default {
    components: {footer_bottom},
    name: 'produce',
    data() {
      return {
        checked: true,
        activeClass: 'iCheck',
        iChecked: 'iCheck-ed'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /*全选*/
  .allChecked {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between; /*横向均匀排列*/
    height: 0.64rem;
    align-items: center; /*垂直居中*/
    border-bottom: 0.01rem solid #e3e3e3;
    border-top: 0.01rem solid #e3e3e3;
    background: #fff;
    margin-bottom: 0.18rem;
  }

  .allChecked span:nth-child(1) {
    padding-left: 0.12rem;
    font-size: 0.26rem;
    height: 0.64rem;
    display: flex;
    display: -webkit-flex;
    align-items: center;
  }

  .allChecked span:nth-child(1) input {
    border-radius: 1rem;
  }

  .allChecked span:nth-child(2) {
    padding-right: 0.24rem;
    font-size: 0.24rem;
    color: #29873b;

  }

  /* 复选框自定义样式 Start */
  /* label 图片浮动，一般不浮动会显示不全 */
  .checklist {
    float: left;
  }

  /* checkbox 原复选框隐藏 */
  .checkbox {
    opacity: 0;
    filter: alpha(opacity=0);
  }

  /* label 的背景图片 iCheck未选中 iCheck-ed选中 */
  .iCheck {
    width: 0.42rem;
    height: 0.42rem;
    background-image: url("/static/img/gouwu/check.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .iCheck-ed {
    width: 0.42rem;
    height: 0.42rem;
    background-image: url("/static/img/gouwu/checked.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  /* 复选框自定义样式 End */


  .listCenter {
    margin-top: 0.2rem;
    display: flex;
    display: -webkit-flex;
    border-bottom: 0.01rem solid #e0e0e0;
  }

  .list {
    flex: 1;
    height: 1.9rem;
    background-color: #fff;
  }


  .list1 {
    flex: 0 0 0.71rem;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
  }


  .list2 {
    flex: 0 0 1.95rem;
    padding-top: 0.21rem;
    padding-bottom: 0.21rem;
  }

  .list2 img {
    width: 100%;
    height: 100%;
  }


  .list3 {
    padding: 0.21rem;
  }

  .listCenter .list3 h6 {
    font-weight: bold;
  }

  .listCenter .list3 p {
    color: #585858;
    font-size: 0.12rem;
    line-height: 0.4rem;
  }

  .listCenter .list3 p b {
    color: #ff4700;
  }

  .listCenter .list3 p span {
    padding-left: 0.1rem;
  }


  .list4 {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-end;
    padding: 0.21rem;
  }

  .list4 i {
    width: 0.33rem;
    height: 0.33rem;
    background-image: url("/static/img/gouwu/delete.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .list4 input {
    width: 0.67rem;
    height: 0.4rem;
    text-align: center;
    border: 0.01rem solid #ececec;
    color: #6d6d6d;
  }

  .btnStyle {
    width: 0.47rem;
    border: 0.01rem solid #f5f5f5;
    border-radius: 0.1rem;
    background: #f5f5f5;
    color: #6d6d6d;
  }


  /*猜你喜欢*/
  .inDetailBox {
    margin-top: 0.2rem;
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

  /*结算*/
  .balance{
    width: 100%;
    height: 0.99rem;
    background: #fff;
    position: fixed;
    bottom: 0.99rem;
    border-top:0.01rem solid #c7c7c7;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0.2rem;
  }
  .balance b{
    color: #ff4400;
  }
  .balance button{
    width: 2.78rem;
    background: #e4393c;
    height: 0.99rem;
    border: none;
    color: #fff;
  }
</style>
