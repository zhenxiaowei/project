<template>
  <div class="product">
    <div class="banner">
      <img src="/static/img/product/banner_product.png" alt="">
    </div>
    <div class="container search">
      <ul>
        <li v-for="(item,index) in product" @click="checkedFn(item.name,index)" :class="{searchCheck:index==current}">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="container">
      <v-ContentNav :typeName="typeName" :pages="pages" v-on:chuan="chuanginfor($event)"></v-ContentNav>
      <div class="row" style="float: right;padding-bottom: 115px;cursor: pointer;font-size: 0">
        <img @click="prevFn" :src="prev" alt="">
        <img @click="nextFn" :src="next" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import ContentNav from '@/components/product/ContentNav'

  export default {
    name: "product",
    data() {
      return {
        pages: 1,
        current: 0,
        typeName: "全部",
        product: [
          {
            "id": 1,
            "name": "全部"
          },
          {
            "id": 2,
            "name": "建模仿真软件"
          },
          {
            "id": 3,
            "name": "多源融合产品"
          },
          {
            "id": 4,
            "name": "信息化综合平台"
          }
        ],
        prev:"static/img/product/prev.png",
        next:"static/img/product/btn5_hover.png"
      }
    },
    components: {
      "v-ContentNav": ContentNav
    },
    methods: {
      checkedFn(typeName, index) {
        this.current = index;
        this.typeName = typeName;
      },
      prevFn() {
        if (this.pages >= 2) {
          this.pages--
          this.prev="static/img/product/prev.png";
          this.next="static/img/product/btn5_hover.png";
        } else {
          this.prev="static/img/product/prev.png";
          this.pages = 1;
        }
      },
      nextFn() {
        this.pages++
        this.next="static/img/product/btn5_hover.png";
        this.prev="static/img/product/btn4_hover.png";
      },
      chuanginfor(event) {
        if (this.pages >= event) {
          this.pages = event;
          this.next="static/img/product/btn5_normal.png";
        }
      }
    }
  }
</script>

<style scoped>
  .banner {
    width: 100%;
  }

  .banner img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }

  .search ul {
    padding-top: 30px;
    padding-bottom: 70px;
  }

  .search ul li {
    float: left;
    padding: 0 20px;
    height: 36px;
    line-height: 36px;
    cursor: pointer;
    font-size: 18px;
  }

  /*  .search ul li:hover {
      background: #008c3c;
      border-radius: 20px;
      color: #fff;
    }*/

  .searchCheck {
    background: #008c3c;
    border-radius: 20px;
    color: #fff;
  }


</style>
