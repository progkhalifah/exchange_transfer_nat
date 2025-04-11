import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddBrancheComop from "@/components/AddBrancheComop.vue";
import DashboarView from "@/views/DashboardView.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
  {
    path: '/',
    name: '/',
    redirect: "/login",
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../components/Sidebar/SidebarCompo.vue'),
    children: [
      {path: '', name: 'NewTransfer', component: () => import('../components/dashboard_home/NewTransferCompo.vue')},
      {path: '/new-transfer', name: 'NewTransfer', component: () => import('../components/dashboard_home/NewTransferCompo.vue')},
      {path: '/new-transfer', name: 'SignUp', component: () => import('../components/dashboard_home/NewTransferCompo.vue')},
      {path: '/add-branch', name: 'AddBranch', component: () => import('../components/AddBrancheComop.vue')},
      {path: '/edit-branch', name: 'EditBranch', component: () => import('../components/AddBrancheComop.vue')},
    ],
  },


  {path: '/addbranch', name: 'SignIn', component: () => import('../components/AddBrancheComop.vue')},


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
