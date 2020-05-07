<template>
  <ul class="feileiNav">
    <li href="javascript:;" class="item">
      <a href="javascript:;" :class="{on:'/'===$route.path}" @click="goTo('/')">
        <div class="img1"></div>
        <p>首页</p>
      </a>
    </li>
    <li class="item">
      <a href="javascript:;" :class="{on:$route.path.indexOf('/classify')!=-1}" @click="goTo('/classify')">
        <div class="img2"></div>
        <p>分类</p>
      </a>
    </li>
    <li class="item">
      <a href="javascript:;" :class="{on:'/produce'===$route.path}" @click="goTo('/produce')">
        <div class="img3"></div>
        <p>购物车</p>
      </a>
    </li>
    <li class="item">
      <a href="javascript:;" :class="[class1,class2]" @click="goTo('/member')">
        <div class="img5"></div>
        <p>会员中心</p>
      </a>
    </li>
  </ul>
</template>
<script type="text/ecmascript-6">
  import Vue from 'vue'

  export default {
    data() {
      return {
        class1: ' ',
        class2:{on:'/member'===this.$route.path}
      }
    },
    methods: {
      goTo: function (path) {
        this.$router.replace(path);
      }
    },
    mounted() {
      var route = this.$route.name;
      if (route == 'myOrder') {
        this.class1 = 'on';
      }
      if (route == 'pulpit') {
        this.class1 = 'on';
      }
      if (route == 'memberMessage') {
        this.class1 = 'on';
      }
    }
  }
</script>
<style scoped>
  /*底部*/

  .feileiNav {
    display: flex;
    position: fixed;
    bottom: 0;
    border-top: 0.01rem solid #c7c7c7;
    width: 100%;
    height: 0.98rem;
    background: #fff;
  }

  .feileiNav .item {
    flex: 1;
    width: 100%;
    height: 100%;
  }

  .feileiNav .item a {
    display: flex;
    display: -webkit-flex;
    width: 100%;
    height: 100%;
    font-size: 0.2rem;
    color: #9f9f9f;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .feileiNav .item a div {
    width: 0.4rem;
    height: 0.4rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .img1 {
    background-image: url("/static/img/index/footer1.png");
  }

  .img2 {
    background-image: url("/static/img/index/footer2.png");
  }

  .img3 {
    background-image: url("/static/img/index/footer3.png");
  }

  .img4 {
    background-image: url("/static/img/index/footer4.png");
  }

  .img5 {
    background-image: url("/static/img/index/footer5.png");
  }

  .on {
    color: #29873b !important;
  }

  .on > div {
    width: 0.4rem;
    height: 0.4rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .on .img1 {
    background-image: url("/static/img/index/footer11.png");
  }

  .on .img2 {
    background-image: url("/static/img/index/footer22.png");
  }

  .on .img3 {
    background-image: url("/static/img/index/footer33.png");
  }

  .on .img4 {
    background-image: url("/static/img/index/footer44.png");
  }

  .on .img5 {
    background-image: url("/static/img/index/footer55.png");
  }
</style>
