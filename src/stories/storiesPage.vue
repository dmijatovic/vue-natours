<template>
  <section class="story-page">
    <bg-video
      :sources="video">
    </bg-video>

    <page-title
      class="story-title"
      :pageTitle="title">
    </page-title>

    <story-item v-for="story in stories"
      :story="story"
      :key="story.title">
    </story-item>

  </section>
</template>

<script>
import {cfg} from '../app.cfg';
import storyItem from './storyItem.vue';
import bgVideo from '../system/bgVideo.vue';

export default {
  components:{
    'story-item': storyItem,
    'bg-video': bgVideo
  },
  data(){
    return{
      title: cfg.storiesPage.title,
      stories: cfg.storiesPage.stories,
      video: cfg.storiesPage.bgVideo 
    }
  }
}
</script>

<style lang="scss">
@import 'storiesPage';
</style>
