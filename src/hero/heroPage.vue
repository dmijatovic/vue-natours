<template>
  <header class="page-header">    

    <div class="logo-box">
      <img :src="logo" class="logo" alt="Logo" />
    </div>
    <div class="hero-content">
      <!-- h1 important for SEO include website title-->
      <h1 class="heading-primary">
        <span class="heading-primary-main">{{ siteTitle }}</span>
        <span class="heading-primary-sub">{{ siteSubtitle }}</span>
      </h1>
      <div class="cta-section">
        <a href="#" class="btn btn-lg btn-white ripple">
          Click here to see magic
        </a>
      </div>
    </div>    

  </header>
  
</template>

<script>
import { cfg } from '../app.cfg';
export default {
  data(){
    return {
      logo:cfg.hero.logo.img,
      siteTitle: cfg.appTitle,
      siteSubtitle: cfg.appSubtitle
    }
  }
}
</script>

<style lang="scss">
@import 'heroPage';
</style>
