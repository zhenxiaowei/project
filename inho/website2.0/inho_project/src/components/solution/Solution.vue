<template>
  <div class="Solution">
    <div class="banner">
      <img src="/static/img/solution/banner_solution.png" alt="">
    </div>
    <div class="container-fluid">
      <div class="container">
        <ul class="navBox nav nav-tabs nav-justified">
          <li v-for="t of solution" role="presentation" @click="detailedChange(t.detailed,t.id)" :class="{active:t.id==current}"><a href="#">{{t.title}}</a></li>
        </ul>

      </div>
    </div>
    <div class="container" style="padding: 30px 0 60px 0">
      <v-intelligence :detailed="detailed"></v-intelligence>
    </div>
  </div>
</template>

<script>
  import Intelligence from '@/components/solution/Intelligence'

  export default {
    name: "solution",
    data() {
      return {
        current:1,
        solution: [],
        detailed:''
      }
    },
    components:{
      'v-intelligence':Intelligence
    },
    methods: {
      detailedChange(detailed,index){
        this.current = index;
        this.detailed=detailed;
      },
      getTechnology(callback) {
        this.$http.get("/api/getsolution")
          .then((response) => {
            this.solution = response.data;
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
  .Solution {
    .container-fluid {
      background: #ddd;
    }
  }

  .banner {
    width: 100%;
  }

  .banner img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }

  .navBox {
    text-align: center;

    li {
      padding: 0;
    }
  }

  .navBox a {
    font-size: 18px;
    color: #373737;
    text-decoration: none;
  }

  .active a {
    color: #01ce8b !important;
  }
</style>
