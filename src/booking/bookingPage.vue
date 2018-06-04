<template>
  <section class="booking-page">    
    <div class="row">
      <booking-form
        :title="form.title"
        :items="form.items"
        :submit="form.submit"
        @onSubmit="submit($event)">
      </booking-form>
    </div>    
  </section>
</template>

<script>
import bookingForm from './bookingForm.vue';
import {cfg} from '../app.cfg';
export default {
  components:{
    'booking-form': bookingForm
  },
  data(){
    return {
      form:cfg.subscribeForm
    }    
  },
  methods:{
    submit(e){
      console.log("Form submitted...", this.form.items);
    }
  }
}
</script>

<style lang="scss">
@import 'bookingPage';
</style>
