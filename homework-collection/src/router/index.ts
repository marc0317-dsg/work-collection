import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/homework/:id',
      name: 'homework-detail',
      component: () => import('../views/HomeworkDetailView.vue'),
      props: true
    }
  ]
});

export default router;
