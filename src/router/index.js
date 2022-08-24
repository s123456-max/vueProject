import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login'
import Main from '../views/main'
import memberList from '../views/member/memberList'
import memberLevel from '../views/member/memberLevel'
import notFound from '../views/error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children: [{
          path: '/member/list',
          name: 'memberList',
          component: memberList
        },
        {
          path: '/member/level/:id',
          name: 'memberLevel',
          component: memberLevel,
          props: true
        },
        {
          path: '*',
          component: notFound
        }
      ],
    },
    {
      path: '/goMain',
      redirect: '/main'
    },
    {
      path: '*',
      component: notFound
    }
  ]
})
