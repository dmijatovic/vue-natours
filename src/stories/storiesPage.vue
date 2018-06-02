<template>
  <section class="story-page">
    <h1>It works</h1>

    <story-item></story-item>
  </section>
</template>

<script>
import storyItem from './storyItem.vue';
export default {
  components:{
    'story-item': storyItem
  }
}
</script>

<style>

</style>
