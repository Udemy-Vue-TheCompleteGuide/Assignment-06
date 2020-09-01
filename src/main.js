import Vue from 'vue'
import App from './App.vue'
import ServerDetails from "@/components/ServerDetails";

Vue.config.productionTip = false

// registering the component global. Will be available for entire application.
Vue.component('ServerDetails', ServerDetails);

new Vue({
  render: h => h(App),
}).$mount('#app')
