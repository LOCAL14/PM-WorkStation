import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import AppMain from '@/layout/components/AppMain'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    name: 'Dashboard',
    component: Layout,
    redirect: '/index',
    alwaysShow: true,
    meta: { title: '资讯与文章', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'index',
        name: 'Index',
        hidden: true,
        component: () => import('@/views/news/index'),
        meta: { title: '首页', icon: 'el-icon-s-flag' }
      },
      {
        path: 'news',
        name: 'News',
        alwaysShow: true,
        component: AppMain,
        meta: { title: '行业资讯', icon: 'el-icon-s-flag' },
        children: [
          {
            path: 'readhub',
            name: 'Readhub',
            component: () => import('@/views/news/readhub'),
            meta: { title: 'Readhub' },
          }
        ]
      },
      {
        path: 'pm',
        name: 'Pm',
        alwaysShow: true,
        component: AppMain,
        meta: { title: '职业成长', icon: 'el-icon-s-management' },
        children: [
          {
            path: 'news',
            name: 'Jelly',
            component: () => import('@/views/news/jelly'),
            meta: { title: '京东 JELLY'},
          },
          {
            path: 'woshipm',
            name: 'Woshipm',
            component: () => import('@/views/news/woshipm'),
            meta: { title: '人人都是产品经理'},
          }
        ]
      },
    ]
  },

  {
    path: '/report-data',
    component: Layout,
    alwaysShow: true,
    meta: { title: '报告与数据', icon: 'el-icon-s-marketing' },
    children: [
      {
        path: 'report',
        name: 'Report',
        alwaysShow: true,
        component: AppMain,
        meta: { title: '行业报告', icon: 'el-icon-s-order' },
        children: [
          {
            path: 'quest-mobile',
            name: 'QuestMobile',
            component: () => import('@/views/news/questmobile'),
            meta: { title: 'Quest Mobile' },
          },
          {
            path: 'talking-data',
            name: 'TalkingData',
            component: () => import('@/views/news/talkingdata'),
            meta: { title: 'Talking Data' },
          },
          {
            path: 'drcnet',
            name: 'Drcnet',
            component: () => import('@/views/news/drcnet'),
            meta: { title: '国研网' },
          },
          {
            path: '36kr',
            name: '36kr',
            component: () => import('@/views/news/36kr'),
            meta: { title: '36氪研究院' },
          }
        ]
      },
      {
        path: 'data',
        name: 'Data',
        alwaysShow: true,
        component: AppMain,
        meta: { title: '应用数据', icon: 'el-icon-s-data' },
        children: [
          {
            path: 'readhub',
            name: 'Readhub',
            component: () => import('@/views/news/readhub'),
            meta: { title: 'Readhub' },
          }
        ]
      },
    ]
  },

  {
    path: '/chart',
    name: 'Chart',
    component: Layout,
    meta: { title: '图表绘制', icon: 'el-icon-s-data' },
    children: [
      {
        path: 'standard-chart',
        name: 'StandardChart',
        alwaysShow: true,
        meta: { title: '数据图表', icon: 'el-icon-s-marketing' },
        children: [
          {
            path: 'https://chartcube.alipay.com/upload',
            name: 'Chartcube',
            meta: { title: 'ChartCube', icon: 'link' }
          }
        ]
      },
      {
        path: 'user-experience-map',
        name: 'UserExperienceMap',
        component: () => import('@/views/chart/arvinxu'),
        meta: { title: '用户体验地图', icon: 'el-icon-location' },
        children: [
          {
            path: 'https://relay.jd.com/web/42a01641-f502-4154-bec6-3e5007542b8d#1',
            name: 'jdRelay',
            meta: { title: 'RELAY', icon: 'link' }
          },
          {
            path: 'arvin-xu',
            name: 'ArvinXu',
            component: () => import('@/views/chart/arvinxu'),
            meta: { title: '代码绘制', icon: 'table' }
          }
        ]
      },
      {
        path: 'flow-chart',
        name: 'FlowChart',
        alwaysShow: true,
        component: () => import('@/views/chart/drawio'),
        meta: { title: '流程图', icon: 'el-icon-s-marketing' },
        children: [
          {
            path: 'draw-io',
            name: 'Drawio',
            component: () => import('@/views/chart/drawio'),
            meta: { title: 'Draw.io', icon: 'dashboard' }
          }
        ]
      },
      {
        path: 'draw',
        name: 'Draw',
        alwaysShow: true,
        component: AppMain,
        meta: { title: '绘图', icon: 'el-icon-edit' },
        children: [
          {
            path: 'draw-io',
            name: 'Drawio',
            component: () => import('@/views/chart/drawing'),
            meta: { title: '简单绘图', icon: 'el-icon-edit' }
          }
        ]
      }
    ]
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },
  //
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/test/test'),
        meta: { title: '测试页面', icon: 'form' }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    children: [
      {
        path: 'https://portal.azure.com/#blade/Microsoft_AAD_IAM/UsersManagementMenuBlade/MsGraphUsers',
        name: 'User',
        meta: { title: '用户管理', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
