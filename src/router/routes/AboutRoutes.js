import DefaultLayout from '@/layouts/DefaultLayout'
import AboutView from '@/views/AboutView.vue'

export default [
  {
    path: '/about/',
    component: DefaultLayout,
    // beforeEnter: async () => ((await checkUser()) ? true : '/'),
    children: [
      {
        path: '',
        component: AboutView,
      },
    ],
  },
]
