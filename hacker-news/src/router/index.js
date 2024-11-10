import {createRouter, createWebHistory} from 'vue-router'

import HomeView from "@/views/HomeView.vue";
import PostDetails from "@/views/PostDetails.vue";

const routes = [
  {path: '/', component: HomeView},
  {path: '/post/:id', component: PostDetails, props: true},
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router