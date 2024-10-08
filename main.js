import App from './App'
import messages from './locale/index'
import statusBar from './components/status-bar.vue'
import $H from './common/request.js'
import loginMixin from './common/loginMixin.js'


let i18nConfig = {
  locale: uni.getLocale(),
  messages
}

// #ifndef VUE3
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n(i18nConfig)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  i18n,
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import { createI18n } from 'vue-i18n'
const i18n = createI18n(i18nConfig)
export function createApp() {
  const app = createSSRApp(App)
  // Vue3 的引入情况跟 Vue2 不同
  app.config.globalProperties.$H = $H
  app.use(i18n)
  app.component('status-bar', statusBar)
  app.mixin(loginMixin)
  return {
    app
  }
}
// #endif
