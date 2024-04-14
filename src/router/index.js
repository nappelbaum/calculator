import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import FeaturesPage from '../pages/FeaturesPage.vue'
import SingleCredit from '../pages/SingleCredit.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: { title: 'Calculator' }
  },
  {
    path: '/features',
    name: 'FeaturesPage',
    component: FeaturesPage,
    meta: { title: 'Features' }
  },
  {
    path: '/products/credit/:id',
    name: 'SingleCredit',
    component: SingleCredit
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
