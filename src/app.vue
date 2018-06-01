<template>
<main class="app-page">  
  <hero-page></hero-page>
  <!--<grid-test></grid-test>-->
  <about-page></about-page>
</main>
  
</template>

<script>
import heroPage from './hero/heroPage.vue';
import gridTest from './grid-test/gridTest.vue';
import aboutPage from './about/aboutPage.vue';
export default {
  components:{
    'hero-page': heroPage,
    'grid-test': gridTest,
    'about-page': aboutPage
  }
}
</script>

<style></style>
