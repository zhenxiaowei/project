<template>
  <div class="product">
    <div class="banner">
      <img src="/static/img/product/banner_product.png" alt="">
    </div>
    <keep-alive>
      <div class="container" v-html="$route.params.describe">

      </div>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: "product"
  }
</script>

<style scoped lang="less">
  .product{
    .banner{
      width: 100%;
    }
    .container{
      padding-top: 88px;
      div{
        text-align: center;
        padding-bottom: 88px;
        h2{
          line-height: 50px;
          font-size: 22px;
          text-align: left;
          span{
            display: inline-block;
            border: 5px solid #01d08c;
            border-radius: 50%;
            margin-right: 10px
          }
        }
        p{
          text-align: left;
          color: #85888e;
          font-size: 16px;
          text-indent: 20px;
          line-height: 30px;
        }
        div{
          padding: 30px 0;
        }
      }
    }
    img{
      width: 100%;
      height: 100%;
    }
  }








</style>
