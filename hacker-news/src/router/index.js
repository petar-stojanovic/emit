import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'

// import AboutView from './AboutView.vue'
import HomeView from "@/views/HomeView.vue";

const routes = [
  { path: '/', component: HomeView },
  // { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router