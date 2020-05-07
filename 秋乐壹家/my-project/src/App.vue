<template>
  <div id="app">
    <router-view/>
      <v-footers></v-footers>
  </div>
</template>

<script>
  import Footers from '@/components/footers'
  export default {
    name: 'App',
    components: {
      "v-footers": Footers
    }
  }
</script>

<style>

</style>
