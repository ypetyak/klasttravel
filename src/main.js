import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
// Google Analitics npm
import VueAnalytics from 'vue-analytics'

import FrontPage from './components/FrontPage';
import SearchTour from './components/SearchTour';
import ContactInfo from './components/ContactInfo';
import AboutUs from './components/AboutUs';

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: FrontPage },
        { path: '/searhTour', component: SearchTour},
        { path: '/contactInformation', component: ContactInfo},
        { path: '/about', component: AboutUs}
    ]
})

Vue.use(VueAnalytics, {
  id: 'UA-139878284-1',
  router
})


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
