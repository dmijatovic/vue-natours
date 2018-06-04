<template>
  <section class="tours" id="section-tours">
    <page-title
      :pageTitle="title">
    </page-title>
    
    <div class="row">
      <div class="col-1-of-3"
        v-for="(card, i) in cards"
        :key="card.title">
        <card-item
          :id="i"
          :card="card">
        </card-item>
      </div>
    </div>
  </section>
</template>

<script>
import { cfg } from '../app.cfg';
import cardItem from './cardItem.vue';
export default {
  components:{
    'card-item':cardItem 
  },
  data(){
    return {
      title: cfg.cardsPage.title,
      cards: cfg.cardsPage.cards
    }
  }
}
</script>

<style lang="scss">
@import 'toursPage';
</style>
