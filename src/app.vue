<template>
<main class="app-page">  
  
  <hero-page></hero-page>
  <!--<grid-test></grid-test>-->
  <about-page></about-page>
  <features-page></features-page>
  <tours-page></tours-page>
  <stories-page></stories-page>
  <booking-page></booking-page>
</main>
  
</template>

<script>
import heroPage from './hero/heroPage.vue';
import gridTest from './grid-test/gridTest.vue';
import aboutPage from './about/aboutPage.vue';
import featuresPage from './features/featPage.vue';
import toursPage from './tours/toursPage.vue';
import storiesPage from './stories/storiesPage.vue';
import bookingPage from './booking/bookingPage.vue';

export default {
  components:{
    'hero-page': heroPage,
    'grid-test': gridTest,
    'about-page': aboutPage,
    'features-page': featuresPage,
    'tours-page': toursPage,
    'stories-page': storiesPage,
    'booking-page': bookingPage
  }
}
</script>

<style lang="scss">
@import './css/variables';
.app-page{
  //this fills gaps between skewed sections
  background-color: lighten($grey-color, 45%); 
}
</style>
