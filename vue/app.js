/**
 * Created by heben.hb on 2017/7/30.
 */


import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'

import './styles/style.scss'

import Page1 from './components/page1.vue'
import Page2 from './components/page2.vue'
import Page3 from './components/page3.vue'
import './components/tab'

import Page from './page.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Page1},
        { path: '/path2', component: Page2 },
        { path: '/path3', component: Page3 },
    ]
});

new Vue({
    router,
    render: h => h(Page)
}).$mount('#vue');


