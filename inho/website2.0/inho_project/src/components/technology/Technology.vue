<template>
  <div class="technology">
    <!--banner-->
    <div class="banner">
      <img src="/static/img/technology/banner_technology.png" alt="">
    </div>
    <div class="container-fluid">
      <div class="container">
        <ul class="navBox nav nav-tabs nav-justified">
          <li v-for="t of technology" role="presentation" @click="detailedChange(t.detailed,t.id)" :class="{active:t.id==current}"><a href="#">{{t.name}}</a></li>
        </ul>
      </div>
    </div>
    <div class="container">
      <v-simulation :detailed="detailed"></v-simulation>
    </div>
  </div>
</template>

<script>
  import Simulation from '@/components/technology/Simulation'

  export default {
    name: "technology",
    data() {
      return {
        current:1,
        technology: [],
        detailed:''
      }
    },
    components:{
      'v-simulation':Simulation
    },
    methods: {
      detailedChange(detailed,index){
        this.current = index;
        this.detailed=detailed;
      },
      getTechnology(callback) {
        this.$http.get("/api/getTechnology")
          .then((response) => {
            this.technology = response.data;
            callback(response.data)
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    created() {
      this.getTechnology( (data)=> {
        if(this.$route.params.detailed!=undefined){
          this.detailed=this.$route.params.detailed;
        }else{
          this.detailed=data[0].detailed;
        }
        if(this.$route.params.id!=undefined){
          this.current=this.$route.params.id;
        }else{
          this.current=1;
        }
      });
    }
  }
</script>

<style scoped lang="less">
  .technology {
    .banner {
      width: 100%;

      img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
      }
    }

    div:nth-child(2) {
      background: #ddd;

      .navBox {
        /*padding: 0 30px 0 30px;*/
        text-align: center;
        /*height: 70px;*/
        /*line-height: 70px;*/

        li {
          padding: 0;

          a {
            font-size: 18px;
            color: #373737;
            text-decoration: none;
          }
        }

        li.router-link-active {
          background: #fff;

          a {
            color: #01ce8b !important;
          }
        }


      }
    }
  }

  @media screen and (max-width: 768px) {
    /*设置小于768px的时候，下拉菜单的样式*/
    .technology {
      div:nth-child(2) {
        margin-bottom: 100px;
      }
    }
  }


</style>
