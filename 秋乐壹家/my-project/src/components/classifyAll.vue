<template>
    <div>
      <h3 class="title">
        玉米
      </h3>
      <div class="classifyAll">
        <router-link :to="{name:'details'}" tag="div" class="item">
          <div class="img">
            <img src="/static/img/index/inDetail-1.png" alt="">
          </div>
          <p>山东省</p>
        </router-link>
        <router-link :to="{name:'details'}" tag="div" class="item">
          <div class="img">
            <img src="/static/img/index/inDetail-1.png" alt="">
          </div>
          <p>山东省</p>
        </router-link>
        <router-link :to="{name:'details'}" tag="div" class="item">
          <div class="img">
            <img src="/static/img/index/inDetail-1.png" alt="">
          </div>
          <p>山东省</p>
        </router-link>
        <router-link :to="{name:'details'}" tag="div" class="item">
          <div class="img">
            <img src="/static/img/index/inDetail-1.png" alt="">
          </div>
          <p>山东省</p>
        </router-link>
      </div>
      <footer_bottom></footer_bottom>
    </div>
</template>

<script>
  import footer_bottom from './footers'
  export default {
        name: "classifyAll",
    components: {footer_bottom},

  }
</script>

<style scoped>
  .title{
    height: 50px;
    line-height: 50px;
    padding-left: 0.5rem;
    background: #fff;
    font-weight: bold;
    margin-bottom: 0.2rem;
  }
  .classifyAll{
    display: flex;
    display: -webkit-flex;
    flex-flow: row wrap;
    background: #fff;
    /*
    flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值是row nowrap
    */
  }
  .item{
    width: 2.5rem;
    padding: 0.2rem;
  }
  .item .img{
    width: 2.1rem;
    height: 1.5rem;
  }
  .item .img img{
    width: 100%;
    height: 100%;
  }
  .item p{
    text-align: center;
    height: 0.5rem;
    line-height: 0.5rem;
  }
</style>
