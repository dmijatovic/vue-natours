<template>
  <section class="features">
    <div class="row">
      <div class="col-1-of-4" v-for="feat in features"
          :key="feat.title">
        <feature-item 
          :feature="feat">
        </feature-item>
      </div>
    </div>
  </section>
</template>

<script>
import {cfg} from '../app.cfg';
import feature from './feature.vue';
export default {
  components:{
    'feature-item': feature 
  },
  data(){
    return{
      features: cfg.features
    }
  }
}
</script>

<style lang="scss">
@import 'featPage';
</style>
