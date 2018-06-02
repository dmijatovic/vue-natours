<template>
  <div class="feature">
    <div class="feature-icon">
      <i :class="feature.faIco" />
    </div>
    <div class="feature-head t-heading-3">
      {{feature.title}}
    </div>
    <div class="feature-body">
      {{feature.body}}
    </div>
  </div>
</template>

<script>
export default {
  props:{
    feature:{
      type: Object 
    }
  }
}
</script>

<style lang="scss">
@import 'feature';
</style>
