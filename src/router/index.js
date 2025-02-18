import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import ContactanosView from '@/views/ContactanosView.vue'
import MisionView from '@/views/MisionView.vue'
import LayoutUserView from '@/views/Layouts/LayoutUserView.vue'
import QuienesSomosView from '@/views/QuienesSomosView.vue'
import PerfilView from '@/views/PerfilView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name:'register',
      component: RegisterView
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: PerfilView
    },
    {
      path: '/',
      name: 'layout',
      component: LayoutUserView,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/contactanos',
          name:'contactanos',
          component: ContactanosView
        },
        {
          path: '/mision',
          name:'mision',
          component: MisionView
        },
        {
          path: '/quienes-somos',
          name: 'quienes somos',
          component: QuienesSomosView
        }
      ]
        
    }
  ]
})

export default router
