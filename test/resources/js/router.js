import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

let router = new VueRouter({
    // mode: 'history',
    routes:[
        {path:'/',  name:'Landing', component: () =>import('./components/Landing')},
        {path:`/character`,  name:'Character', component: () =>import('./components/Character')},
        {path:`/post/comment/:id`,  name:'singlePost', component: () =>import('./components/Single')},
        
    ]
});

export default router;

