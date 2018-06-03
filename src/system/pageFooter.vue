<template>
  <footer class="footer">
    <div class="footer-logo">
      <img :src="logo" alt="Logo">
    </div>
    <div class="row">
      <div class="col-1-of-2">
        <ul class="footer-nav">
          <li v-for="link in links"
            class="footer-link"
            :key="link.label">
              <a :href="link.url">{{ link.label }}</a>
            </li>
        </ul>
      </div>
      <div class="col-1-of-2">
        <div class="footer-copyright">
          {{copyright}}
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props:{
    logo: {
      type:String
    },
    links:{
      type:Array
    },
    copyright:{type:String} 
  }
}
</script>
<style lang="scss">
@import 'pageFooter';
</style>
