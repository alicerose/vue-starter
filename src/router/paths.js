export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: { title: 'pageTitle', description: 'This is page description.' },
  },
];
