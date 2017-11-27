import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Store from './store'

Vue.use(VueRouter)
Vue.use(Vuex);

// Dynamic Loading...
const Home=() =>
    import( /* webpackChunkName: "home" */ './components/Home.vue');
const Sidebar=() =>
    import( /* webpackChunkName: "sidebar" */ './components/Sidebar.vue');
const Single=() =>
    import( /* webpackChunkName: "post" */ './components/Single.vue');



const routes=[{
    name: 'home',
    path: '/',
    components: {
        default: Home,
        sidebar: Sidebar,
    },
    alias: '/posts'
},
{
    name: 'post',
    path: '/posts/:id',
    components: {
        default: Single,
        sidebar: Sidebar,
    },
},
{
    path: '*',
    component: {
        template: '<h1>Page not found</h1>',
        // render: (h) => ( <h1> Page not found </h1> )
    }
}];

const router=new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});

const store=new Vuex.Store(Store)

new Vue({
    store,
    router,
    el: '#app',
    render: h => h(App),

    // render: h => ( <App /> ), // If we use `babel-preset-vue-app` as babel preset

    // template: '<App />',
    // components: {
    //     App
    // }
})

// -- OR --

/* new Vue({
    store,
    router,
    render: h => h(App),

    // render: h => ( <App /> ), // If we use `babel-preset-vue-app` as babel preset

    // template: '<App />',
    // components: {
    //     App
    // }
}).$mount('#app') */
