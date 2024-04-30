import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import Dasboard from '../views/DasboardPage.vue'
import Cliente from '../views/ClientePage.vue'
import Estudiante from '../views/EstudiantePage.vue'
import Empleado from '../views/EmpleadoPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/Dasboard',
    name: 'Dasboard',
    component: Dasboard
  },
  {
    path: '/Cliente',
    name: 'Cliente',
    component: Cliente
  },
  {
    path: '/Empleado',
    name: 'Empleado',
    component: Empleado
  },
  {
    path: '/Estudiante',
    name: 'Estudiante',
    component: Estudiante
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
