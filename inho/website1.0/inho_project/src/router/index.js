import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'

import Technology from '@/components/technology/Technology'
import Simulation from '@/components/technology/Simulation'
import Multisource from '@/components/technology/Multisource'
import Perception from '@/components/technology/Perception'


import Product from '@/components/product/Product'
import Content from '@/components/product/Content'


import Solution from '@/components/solution/Solution'
import Comprehensive from '@/components/solution/Comprehensive'
import Intelligence from '@/components/solution/Intelligence'

import About from '@/components/about/About'
import Companyprofile from '@/components/about/Companyprofile'
import Honor from '@/components/about/Honor'
import Tel from '@/components/about/Tel'
import Recruit from '@/components/about/Recruit'
import Aboutswiper from '@/components/about/Aboutswiper'


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
      component: Technology,
      redirect: '/simulation',
      children: [
        {
          path: '/simulation',
          name: 'Simulation',
          component: Simulation,
          meta: {
            requiresAuth: true,
            active: '/technology'
          }
        },
        {
          path: '/multisource',
          name: 'Multisource',
          component: Multisource,
          meta: {
            requiresAuth: true,
            active: '/technology'
          }
        },
        {
          path: '/perception',
          name: 'Perception',
          component: Perception,
          meta: {
            requiresAuth: true,
            active: '/technology'
          }
        }
      ]
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
      component: Solution,
      redirect: '/comprehensive',
      children: [
        {
          path: '/comprehensive',
          name: 'Comprehensive',
          component: Comprehensive,
          meta: {
            requiresAuth: true,
            active: '/solution'
          }
        },
        {
          path: '/intelligence',
          name: 'Intelligence',
          component: Intelligence,
          meta: {
            requiresAuth: true,
            active: '/solution'
          }
        }
        ]
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
    {path: '*', redirect: '/'}//设置输入路由地址错误，跳转到主页

  ],
  mode: "history",
  scrollBehavior (to, from, savedPosition) {// 跳转后返回顶部
    return { x: 0, y: 0 }
  }
})
