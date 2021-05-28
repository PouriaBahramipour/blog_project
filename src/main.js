import Vue from 'vue'
import App from './App.vue'
import {store}  from './store/index.js';
import BaseBox from './components/UI/BaseBox.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog';
import ScrollAnimation from './components/directives/scrollanimation.js';
import './assets/css/main.scss';
// import videojs from '@/assets/js/video.js'
// App.use(videojs)

Vue.directive('scrollanimation', ScrollAnimation)
Vue.config.productionTip = false
Vue.component('base-box', BaseBox);
Vue.component('base-button', BaseButton);
Vue.component('base-dialog', BaseDialog);
new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
