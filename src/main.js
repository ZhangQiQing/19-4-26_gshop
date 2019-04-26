// 入口文件
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
