<template>
  <section class="booking-page">
    <h1>It works</h1>
    <div class="row">
      <booking-form></booking-form>
    </div>    
  </section>
</template>

<script>
import bookingForm from './bookingForm.vue';

export default {
  components:{
    'booking-form': bookingForm
  }
}
</script>

<style lang="scss">
@import 'bookingPage';
</style>
