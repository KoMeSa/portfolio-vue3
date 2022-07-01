import DefaultLayout from '@/layouts/DefaultLayout'
import SkillsView from '@/views/SkillsView.vue'

export default [
  {
    path: '/',
    component: DefaultLayout,
    // beforeEnter: async () => ((await checkUser()) ? true : '/'),
    children: [
      {
        path: '/skills',
        component: SkillsView,
      },
    ],
  },
]
