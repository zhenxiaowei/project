<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  export default {
    name: 'App',
    components:{
      "v-header":Header,
      "v-footer":Footer
    }
  }
</script>

<style>

</style>
