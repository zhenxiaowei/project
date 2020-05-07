<template>
  <div class="footer">
    <div class="container">
      <div class="row summary">
        <div class="col-xs-12 col-sm-6 col-md-3 logo">
          <img src="/static/img/footer/logo2.png" alt="">
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3">
          <h2>产品与服务</h2>
          <router-link to="product" tag="p">建模仿真软件</router-link>
          <router-link to="product" tag="p">多源融合产品</router-link>
          <router-link to="product" tag="p">信息化综合平台</router-link>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3">
          <h2>关于我们</h2>
          <router-link tag="p" to="companyprofile">公司简介</router-link>
          <router-link tag="p" to="tel">联系我们</router-link>
          <p>加入我们</p>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3">
          <h2>联系我们</h2>
          <p>电话：010-68219067</p>
          <p>邮箱：inho@inhotech.com</p>
          <p>地址：北京市海淀区凯宾科技大厦5层</p>
        </div>

      </div>
      <div class="row hr">
        Copyright © 2009-2018 INHOTECH
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="less">
  .footer {
    width: 100%;
    padding-top: 50px;
    background: #4d4e50;
    color: #fff;
  }
.summary{
  padding-bottom: 15px;
}
  .logo {
    padding-left: 35px;
  }

  .footer h2 {
    font-weight: bold;
    padding-bottom: 10px;
    font-size: 14px;
  }

  .footer p {
    cursor: pointer;
    line-height: 30px;
    font-size: 14px;
  }

  .hr {
    border-top: 1px solid #717274;
    height: 42px;
    line-height: 42px;
    text-align: center;
    font-size: 14px;
  }

  @media screen and (max-width:768px){/*设置小于768px的时候，下拉菜单的样式*/
    .summary{
      text-align: center;
    }
    div{
      padding: 10px;
    }
  }
</style>
