import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

import msal from 'vue-msal'

Vue.use(msal, {
  auth: {
    clientId: 'b4ab293c-e4d1-44c9-948c-578862995909',
    authority: 'https://login.microsoftonline.com/7276b6fa-3f2f-426c-ac31-30f60dd9e07c/',
    // redirectUri: 'https://pm-workstation.iamxz.cn',
    redirectUri: 'http://localhost:9528',
    requireAuthOnInitialize: true
  },
  graph :{
    callAfterInit: false
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
