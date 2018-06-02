<template>
  <section class="story">
    <figure class="story-shape">
      <img class="story-image"
        :src="story.img" alt="Story image">
      <figcaption class="story-caption">
        {{story.user}}
      </figcaption>
    </figure>
    <div class="story-text">
      <h3 class="story-title">
        {{story.title}}      
      </h3>
      <p class="story-body">
        {{story.body}}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props:{
    story:{
      type:Object
    }
  }
}
</script>
<style lang="scss">
@import './storyItem';
</style>
