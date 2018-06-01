<template>
  
<main class="about">
  <div class="u-center u-mb-xl">
    <h2 class="t-heading-2">
      {{aboutTitle}}
    </h2>
  </div>
  <div class="row">
    <div class="col-1-of-2">
      <template v-for="(article, i) in articles">
        <h3 class="t-heading-3 u-mb-md" :key="'title-' + i">
          {{article.title}}
        </h3>
        <p class="t-paragraph" :key="'body-' + i">
          {{article.body}}
        </p>
      </template>
    </div>
    <div class="col-1-of-2">
      <compose-images
        :articles="articles"
      ></compose-images>
    </div>
  </div>
</main>

</template>

<script>
import {cfg} from '../app.cfg';
import composeImages from './composeImages.vue';
export default {
  components:{
    'compose-images': composeImages
  },
  data(){
    return{
      aboutTitle: cfg.about.title,
      articles: cfg.about.articles
    }
  }
}
</script>

<style lang="scss">
@import 'aboutPage';
</style>
