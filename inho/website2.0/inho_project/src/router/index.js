import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'

import Technology from '@/components/technology/Technology'


import Product from '@/components/product/Product'
import Content from '@/components/product/Content'


import Solution from '@/components/solution/Solution'

import About from '@/components/about/About'
import Companyprofile from '@/components/about/Companyprofile'
import Honor from '@/components/about/Honor'
import Tel from '@/components/about/Tel'
import Recruit from '@/components/about/Recruit'
import Aboutswiper from '@/components/about/Aboutswiper'


import Editor from '@/components/Editor'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/technology',
      name: 'Technology',
      component: Technology
    },
    {
      path: '/product',
      name: 'Product',
      component: Product,
      meta: {
        requiresAuth: true,
        active: '/product'
      }
    },
    {
      path: '/solution',
      name: 'Solution',
      component: Solution
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      redirect: '/companyprofile',
      children: [
        {
          path: '/companyprofile',
          name: 'Companyprofile',
          component: Companyprofile,
          meta: {
            requiresAuth: true,
            active: '/about'
          }
        },
        {
          path: '/honor',
          name: 'Honor',
          component: Honor,
          meta: {
            requiresAuth: true,
            active: '/about'
          },
          redirect: '/aboutswiper',
          children: [
            {
              path: '/aboutswiper',
              name: 'Aboutswiper',
              component: Aboutswiper,
              meta: {
                requiresAuth: true,
                active: '/about'
              },
            }

          ]
        },
        {
          path: '/tel',
          name: 'Tel',
          component: Tel,
          meta: {
            requiresAuth: true,
            active: '/about'
          }
        },
        {
          path: '/recruit',
          name: 'Recruit',
          component: Recruit,
          meta: {
            requiresAuth: true,
            active: '/about'
          }
        }
      ]
    },
    {
      path: '/content',
      name: 'Content',
      component: Content,
      meta: {
        requiresAuth: true,
        active: '/product'
      }
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor
    },
    {path: '*', redirect: '/'}//设置输入路由地址错误，跳转到主页

  ],
  mode: "history",
  scrollBehavior(to, from, savedPosition) {// 跳转后返回顶部
    return {x: 0, y: 0}
  }
})
