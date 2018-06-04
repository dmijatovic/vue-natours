<template>
  <div class="booking">
    <form class="form" @submit.prevent="onSubmit">
      <h2 class="t-heading-2 u-mb-lg">
        {{title}}
      </h2>
      <!-- per input item -->
      <div v-for="item in items"
          class="form-group"
          :class="{'u-flex-row':item.type=='radio'}"
          :key="item.id">  
        
        <template v-if="item.type=='radio'">
          <div v-for="option in item.options"
            class="form-group-radio"
            :key="option">
            <input 
              :id="option"
              :name="item.id"
              :type="item.type"                         
              :required="item.required"              
              v-model="item.value"
              :value = "option"
              class="form-radio-input" />
            <label
              :for="option"
              class="form-radio-label">
              <span class="form-radio"></span>              
              {{option}}
            </label>
          </div>            
        </template>

        <template v-else>
          <input 
            :id="item.id"
            :type="item.type"           
            :placeholder="item.label"
            class="form-input"
            :class="item.css"
            :required="item.required"
            v-model="item.value"
            autocomplete="off" />
          <label
            :for="item.id"
            class="form-label">
            {{item.label}}
          </label>
        </template>
        
      </div>

      <!-- submit button -->

      <button type="submit"
        class="btn btn-md btn-primary"> 
        {{submit.label}}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props:{
    title: String,
    submit: Object,
    items: Array 
  },
  methods:{
    onSubmit(form){
      //emit event received in submit prop
      this.$emit(this.submit.eventId, form);
      //console.log("Submit...", form);
    }
  }
}
</script>

<style lang="scss">
@import 'bookingForm';
</style>
