<template>
  <div class="card">
    <!-- FRONT -->
    <div class="card-side card-front">
      <div class="card-image"
        :class="imgClass">
        &nbsp;
      </div>
      <h3 class="card-heading">
        {{card.front.title}}
      </h3>
      <div class="card-body">
        <ul>
          <li v-for="item in card.front.list"
            :key="item">{{item}}
          </li>
        </ul>
      </div>
    </div>
    <!-- BACK -->
    <div class="card-side card-back"
      :class="backClass">
      <div>
        <h3 class="card-back-title">
          {{card.back.title}}
        </h3>
        <p class="card-back-price">
          {{card.back.body}}
        </p>
      </div>
      <div class="card-cta">
        <a :href="card.back.btn.link"
          class="btn btn-md btn-white">
          <i v-if="card.back.btn.faIco"
            :class="card.back.btn.faIco">
          </i>
          <span>
            {{card.back.btn.label}}
          </span>          
        </a>        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    id: Number,
    card:{
      type: Object
    }
  },
  computed:{
    imgClass(){
      //debugger
      return `img-${this.id}`;
    },
    backClass(){
      //debugger
      return `card-back-${this.id}`;
    }
  }
}
</script>

<style lang="scss">
@import 'cardItem';
</style>
