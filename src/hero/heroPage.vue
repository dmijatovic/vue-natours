<template>
  <header class="hero">    

    <div class="hero-logo-box">
      <img :srcset="logo" class="hero-logo" alt="Logo" />
    </div>
    <div class="hero-content">
      <!-- h1 important for SEO include website title-->
      <h1 class="heading-primary">
        <span class="heading-primary-main">{{ siteTitle }}</span>
        <span class="heading-primary-sub">{{ siteSubtitle }}</span>
      </h1>
      <div class="cta-section">
        <a :href="cta.link" class="btn btn-lg btn-white ripple">
          {{cta.label}}
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
      siteTitle: cfg.hero.title,
      siteSubtitle: cfg.hero.subtitle,
      cta: cfg.hero.cta
    }
  }
}
</script>

<style lang="scss">
@import 'heroPage';
</style>
