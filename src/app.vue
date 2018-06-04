<template>
<main class="app-page">  
  <main-nav
    :menuItems="menuItems">
  </main-nav>
  <hero-page></hero-page>
  <!--<grid-test></grid-test>-->
  <about-page></about-page>
  <features-page></features-page>
  <tours-page></tours-page>
  <stories-page></stories-page>
  <booking-page></booking-page>
  
  <page-footer
    :logo="footer.logo"
    :links="footer.links"
    :copyright="footer.copyright">
  </page-footer>

  <popup-img></popup-img>
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

import { cfg } from './app.cfg';

export default {
  components:{
    'hero-page': heroPage,
    'grid-test': gridTest,
    'about-page': aboutPage,
    'features-page': featuresPage,
    'tours-page': toursPage,
    'stories-page': storiesPage,
    'booking-page': bookingPage
  },
  data(){
    return {
      menuItems: cfg.menuItems,
      footer:{
        logo: cfg.hero.logo.img,
        links: cfg.footer.links,
        copyright: cfg.footer.copyright
      }
    }
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
