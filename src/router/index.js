import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import FeaturesPage from '../pages/FeaturesPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/features',
    name: 'FeaturesPage',
    component: FeaturesPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
