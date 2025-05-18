import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '@/view/home.vue'
import Catalog from '@/view/catalog.vue'
import Basket from '@/view/basket.vue'
import Profile from '@/view/profile.vue'
import MotoDes from '@/view/moto-des.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/catalog', name: 'Catalog', component: Catalog },
  { path: '/Basket', component: Basket },
  { path: '/back_main', component: Home },
  { path: '/back_catalog', component: Catalog },
  { path: '/profile', component: Profile },
  { path: '/motodes', component: MotoDes },
]

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
