import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import ProjectIndex from './pages/ProjectIndex.vue';
import ProjectShow from './pages/ProjectShow.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component: AppHome
        },
        {
            path:'/progetti',
            name:'projects',
            component: ProjectIndex
        },
        {
            path:'/progetti/:slug',
            name:'projects-show',
            component: ProjectShow
        }
    ]
});

export {router};