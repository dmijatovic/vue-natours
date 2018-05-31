<template>
<main class="app-page">  
  <hero-page></hero-page>
</main>
  
</template>

<script>
import heroPage from './hero/heroPage.vue';
export default {
  components:{
    'hero-page': heroPage 
  }
}
</script>

<style>

</style>
