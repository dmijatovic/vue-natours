<template>
  <div class="composition"> 
    <template v-for="(article, i) in articles">
      <a :href="article.link" :key="'image-' + i"
        :class="'link-' + i">
        <img class="composition-photo" :src="article.img" alt="Image" />
      </a>
    </template>
  </div>
</template>

<script>
export default {
  props:{
    articles:{
      type:Array 
    }
  }
}
</script>

<style lang="scss">
@import 'composeImages';
</style>
