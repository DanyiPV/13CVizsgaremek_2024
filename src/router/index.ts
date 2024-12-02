import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/profil',
      name: 'profil',
      component: () => import('../views/ProfilView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LogView.vue')
    }
    ,
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegView.vue')
    },
    {
      path: '/challange',
      name: 'challange',
      component: () => import('../views/ChallangeView.vue')
    },
    {
      path: '/context',
      name: 'context',
      component: () => import('../views/ContextView.vue')
    },
    {
      path: '/home/leader-board',
      name: 'leader-board',
      component: () => import('../views/LeaderBoardView.vue')
    },
    {
      path: '/profil/redeem',
      name: 'redeem',
      component: () => import('../views/RedeemView.vue')
    },
    {
      path: '/report',
      name: 'report',
      component: () => import('../views/ReportView.vue')
    },
    {
      path: '/social-chat',
      name: 'social-chat',
      component: () => import('../views/SocialChatView.vue')
    },
    {
      path: '/task-submit',
      name: 'task-submit',
      component: () => import('../views/TaskSubmitView.vue')
    },
    {
      path: '/task',
      name: 'task',
      component: () => import('../views/TaskView.vue')
    }
  ]
})

export default router
