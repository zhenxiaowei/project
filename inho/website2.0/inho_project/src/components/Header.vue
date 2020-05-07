<template>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse"
                data-target="#example-navbar-collapse">
          <span class="sr-only">切换导航</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div class="navbar-brand">
          <router-link tag="div" to="/">
          </router-link>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="example-navbar-collapse">
        <!--设置当最小的隐藏导航，显示三横杆，点击显示导航-->
        <ul class="nav navbar-nav navbar-right">
          <li @click="gotoMenu('/')" :class="{'on1':$route.path === '/'}">
            <a href="javascript:;">首页</a>
            <p>HOME</p>
          </li>

          <li @click="gotoMenu('/technology')" :class="{'on1':$route.path === '/technology'}">
            <a href="javascript:;">核心技术</a>
            <p>TECHNOLOGY</p>
          </li>
          <li @click="gotoMenu('/product')" :class="{'on1':$route.meta.active === '/product'}">
            <a href="javascript:;">产品与服务</a>
            <p>PRODUCTS</p>
          </li>
          <li @click="gotoMenu('/solution')" :class="{'on1':$route.path === '/solution'}">
            <a href="javascript:;">解决方案</a>
            <p>SOLUTION</p>
          </li>
          <li @click="gotoMenu('/about')" :class="{'on1':$route.meta.active === '/about'}">
            <a href="javascript:;">关于我们</a>
            <p>ABOUT US</p>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Header",
    methods: {
      gotoMenu(path) {
        this.$router.replace({path: path})
      }
    }
  }
</script>

<style scoped lang="less">
  .navbar {
    z-index: 10;
    height: 80px;
    margin: 0;

    .navbar-brand { /*设置logo高度，因为有默认padding值15px，所以设置为70px,才垂直居中*/
      width: 292px;
      height: 80px;
      line-height: 80px;
      padding: 0;
      position: relative;

      div {
        cursor: pointer;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        margin: auto;
        width: 188px;
        height: 56px;
        background: url("/static/img/header/logo.png") no-repeat;
      }
    }

    .navbar-toggle { /*设置三条横杆的位置*/
      margin-top: 30px;
    }
  }

  .navbar-default {
    background: #fff;
  }

  @media screen and (max-width: 768px) {
    /*设置小于768px的时候，下拉菜单的样式*/
    .navbar-nav {
      background: #fff !important;
      margin-top: 0;

      li {
        padding: 5px;
      }
    }
  }

  .navbar-collapse li {
    text-align: center;
    cursor: pointer;
    padding: 15px;
    fon1t-size: 16px;
    color: #b5bfc6;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    a {
      padding: 0;
      color: #b5bfc6;
      text-decoration: none;
    }

    a:hover, a:visited, a:link, a:active {
      color: #b5bfc6;
    }
  }

  .navbar-nav li.on1 {
    background: #008c3c;
    color: #fff !important;

    a {
      color: #fff !important;
    }
  }

</style>
