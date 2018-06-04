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
export default {
  components:{
    'booking-form': bookingForm
  },
  data(){
    return {
      form:{
        title:'Subscribe for our newsletter!',
        submit:{
          label:'Subscribe now!',
          eventId:'onSubmit'
        },
        items:[{
          id:"name",
          type: "text",
          label: 'Your name',
          value: null,
          required: true 
        },{
          id:"email",
          type: "email",
          label: 'Your email',
          value: null,
          required: true 
        },{
          id:"tour_type",
          type: "radio",
          label: 'Your age',
          required: false,
          value:'Weekly news',
          options:['Weekly news', 'Monthly news']
        }]
      }
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
