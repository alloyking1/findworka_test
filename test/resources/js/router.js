import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

let router = new VueRouter({
    // mode: 'history',
    routes:[
        {path:'/',  name:'Landing', component: () =>import('./components/Landing')},
        {path:`/add/comment/${name}`,  name:'comment', component: () =>import('./components/Comment')},
        
    ]
});

export default router;

