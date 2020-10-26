
const routes = [
  {
    path: '/',
    component: () => import('../layouts/MyLayouts.vue'),
    children: [
      { path: '', name: 'dashboard', component: () => import('../pages/Index.vue'), props: true },
      // { path: 'confirm', name: 'confirm', component: () => import('../pages/Auth.vue') },
      // { path: 'shop', name: 'shop', component: () => import('../pages/Auth.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('../pages/Error404.vue')
  })
}

export default routes
// npm install dotenv
