import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import { globalMixins } from '@/mixins';
import '@/registerServiceWorker';

Vue.config.productionTip = false;

Vue.mixin(globalMixins);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
