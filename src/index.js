//3rd party
import Vue from 'vue';
//import VueRouter from 'vue-router';
//main app
import App from './app.vue';

//main - shared - styles
import './css/main.scss';

/*
//use router
Vue.use(VueRouter);
//import routes
import { routes } from './routes';
//add routes to router
const router = new VueRouter({
  routes: routes
});
*/

// SYSTEM COMPONENTS
import pageTitle from './system/pageTitle.vue';
//page title
Vue.component('page-title',pageTitle);


//create app
const app = new Vue({
  //add to this element
  el:'#app',
  //use router
  //router,
  //render app
  render(e){
    return e(App);
  }
});
