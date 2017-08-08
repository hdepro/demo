/**
 * Created by heben.hb on 2017/7/30.
 */


import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'

import './styles/style.scss'

import Content1 from './components/page1.vue'
import Content2 from './components/page2.vue'
import Content3 from './components/page3.vue'
import './components/tab'

import Page from './page.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Content1},
        { path: '/path2', component: Content2 },
        { path: '/path3', component: Content3 },
    ]
});

new Vue({
    router,
    render: h => h(Page)
}).$mount('#vue');

