import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import classify from '@/components/classify'
import produce from '@/components/produce'
import member from '@/components/member'
import success from '@/components/success'
import details from '@/components/details'
import gouwu from '@/components/gouwu'
import myOrder from '@/components/myOrder'
import pulpit from '@/components/pulpit'
import memberMessage from '@/components/memberMessage'
import classifyAll from '@/components/classifyAll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      beforeEnter: (to, from, next) => {//beforeEnter卫士设置每个路由的title
        document.getElementById('titleId').innerHTML = '首页';
        next();
      }
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify,
      beforeEnter: (to, from, next) => {//beforeEnter卫士设置每个路由的title
        document.getElementById('titleId').innerHTML = '分类';
        next();
      }
    },
    {
      path: '/produce',
      name: 'produce',
      component: produce,
      beforeEnter: (to, from, next) => {//beforeEnter卫士设置每个路由的title
        document.getElementById('titleId').innerHTML = '购物车';
        next();
      }
    },
    {
      path: '/member',
      name: 'member',
      component: member,
      beforeEnter: (to, from, next) => {//beforeEnter卫士设置每个路由的title
        document.getElementById('titleId').innerHTML = '会员中心';
        next();
      }
    },
    {
      path: '/success',
      name: 'success',
      component: success,
      beforeEnter: (to, from, next) => {//beforeEnter卫士设置每个路由的title
        document.getElementById('titleId').innerHTML = '支付成功';
        next();
      }
    },
    {
      path: '/details',
      name: 'details',
      component: details,
      beforeEnter: (to, from, next) => {//beforeEnter卫士设置每个路由的title
        document.getElementById('titleId').innerHTML = '详细信息';
        next();
      }
    },
    {
      path: '/gouwu',
      name: 'gouwu',
      component: gouwu,
      beforeEnter: (to, from, next) => {//beforeEnter卫士设置每个路由的title
        document.getElementById('titleId').innerHTML = '购物车';
        next();
      }
    },
    {
      path: '/myOrder',
      name: 'myOrder',
      component: myOrder,
      beforeEnter: (to, from, next) => {//beforeEnter卫士设置每个路由的title
        document.getElementById('titleId').innerHTML = '我的订单';
        next();
      }
    },
    {
      path: '/pulpit',
      name: 'pulpit',
      component: pulpit,
      beforeEnter: (to, from, next) => {//beforeEnter卫士设置每个路由的title
        document.getElementById('titleId').innerHTML = '秋乐讲坛';
        next();
      }
    },
    {
      path: '/memberMessage',
      name: 'memberMessage',
      component: memberMessage,
      beforeEnter: (to, from, next) => {//beforeEnter卫士设置每个路由的title
        document.getElementById('titleId').innerHTML = '会员信息';
        next();
      }
    },
    {
      path: '/classifyAll',
      name: 'classifyAll',
      component: classifyAll,
      beforeEnter: (to, from, next) => {//beforeEnter卫士设置每个路由的title
        document.getElementById('titleId').innerHTML = '分类';
        next();
      }
    }
  ],
  mode:"history"
})
