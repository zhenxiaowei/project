<template>
  <div class="SoftwareBox">
    <div class="item" v-for="item in software">
      <div class="Cladding" @click="gotoContent(item.describe)">
        <h2>{{item.title}}</h2>
        <p>{{item.introduce}}</p>
       <!-- <div class="nextPhoto"></div>-->
        <img src="/static/img/product/btn6_normal.png" alt="" style="padding-top: 10px">
      </div>
      <div class="img">
        <img :src="item.url2" alt="">
      </div>
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ContentNav",
    props: ["typeName","pages"],
    data() {
      return {
        software: [],
      }
    },
    created(){
     this.getData(this.typeName,this.pages);
    },
    methods:{
      gotoContent(con){
        this.$router.push({
          path: '/content',
          query: {
            describe: con
          }
        })
      },
      getData(name,pages){
        var data = JSON.stringify({
          "pageSize": 8,
          "pageNo":pages,
          "type":name
        });
        post("/api/getAllData",data, (msg) => {
          this.$emit("chuan",msg.totalPage);
          this.software=msg.data;
        }, (msg) => {
          showError(msg.msg)
        })
      }
    },
    watch: {
      typeName(newval, oldval) {
        this.getData(newval,this.pages);
      },
      pages(newval, oldval){
        this.getData(this.typeName,newval);
      }
    }
  }
</script>

<style scoped>
  .SoftwareBox {
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap; /*换行，第一行在上方*/

  }

  .item > p {
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #b2b2b2;
    margin-bottom: 50px;
    color: #fff;
  }
  .nextPhoto{
    width: 65px;
    height: 22px;
    background: url("/static/img/product/btn6_normal.png") no-repeat;
  }
  .nextPhoto:hover{
    background: url("/static/img/product/btn6_normal.png") no-repeat;
  }
  .img img {
    width: 100%;
    height: 100%;
  }


  .item {
    width: 250px;
    margin: 0 17px 0 17px;
    position: relative;
  }

  .Cladding {
    position: absolute;
    width: 100%;
    height: 230px;
    background-color: rgba(17, 131, 63, 0.7);
    top: 20%;
    cursor: pointer;
    text-align: center;
    opacity: 0;
  }

  .item:hover .Cladding {
    opacity: 1;
    -webkit-animation-name: fadeIn; /*动画名称*/
    -webkit-animation-duration: 0.5s; /*动画持续时间*/
    -webkit-animation-iteration-count: 1; /*动画次数*/
    -webkit-animation-delay: 0s; /*延迟时间*/
  }

  .Cladding h2 {
    color: #fff;
    font-size: 16px;
    line-height: 70px;
  }

  .Cladding p {
    color: #fff;
    font-size: 14px;
    padding-left: 20px;
    padding-right: 20px;
    overflow: hidden;
    height: 60px;
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0; /*初始状态 透明度为0*/
    }
    50% {
      opacity: 0; /*中间状态 透明度为0*/
    }
    100% {
      opacity: 1; /*结尾状态 透明度为1*/
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0; /*初始状态 透明度为0*/
    }
    50% {
      opacity: 0; /*中间状态 透明度为0*/
    }
    100% {
      opacity: 1; /*结尾状态 透明度为1*/
    }
  }

</style>
