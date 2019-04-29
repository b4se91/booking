export default [
  {
    path: '',
    name: 'main',
    component: () => import(/* webpackChunkName: "main" */ '@/views/Main/Index.vue')
  },

  {
    path: '/sales',
    name: 'sales',
    component: () => import(/* webpackChunkName: "err404" */ '@/views/404/Index.vue')
  }
]