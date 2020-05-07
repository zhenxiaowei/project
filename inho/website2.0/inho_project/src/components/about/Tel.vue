<template>
  <div class="Tel">
    <div class="container">
      <v-contactus></v-contactus>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12">
      <img src="/static/img/about/aboutus_map.png" alt="">
    </div>
  </div>
</template>

<script>
  import Contactus from '@/components/Contactus'

  export default {
    name: "Tel",
    components: {
      "v-contactus": Contactus
    }
  }
</script>

<style scoped lang="less">
  .Tel {
    margin-top: 100px;
    img{
      width: 100%;
      height: 100%;
    }
    div:nth-child(2){
      padding: 0;
    }
  }


</style>
