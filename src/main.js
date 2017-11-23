import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import VueRouter from 'vue-router'
import Sidebar from './components/Sidebar.vue';
import Home from './components/Home.vue';
import Single from './components/Single.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home},
  { path: '/posts/:postId', component: Single},
  { path: '*', component: { template: '<h1>Page not found</h1>'}}
];

const router = new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  store : store,
  router,
  el: '#app',
  render: h => h(App)
})
