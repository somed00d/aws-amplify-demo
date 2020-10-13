import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import '@aws-amplify/ui-vue';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';Amplify.configure(awsconfig);
Amplify.configure(awsconfig);

// Component Pages
import Login from './components/Login.vue';
import Home from './components/Home.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/login', component: Login },
  { path: '/', component: Home}
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
