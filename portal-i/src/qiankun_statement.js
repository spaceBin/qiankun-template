// 声明式加载
import {
  registerMicroApps,
  setDefaultMountApp,
  start
} from 'qiankun'
import configSubApp from './subapp.config' // 子应用配置

console.log('configSubApp--', configSubApp)
// 注册子应用
registerMicroApps(
  configSubApp, {
    beforeLoad: [
      // app => {
      //   console.log('before load app.name', app.name)
      // }
    ], // 挂载前回调
    beforeMount: [
      // app => {
      //   console.log('before mount app.name', app.name)
      // }
    ], // 挂载后回调
    afterUnmount: [
      // app => {
      //   console.log('after unload app.name', app.name)
      // }
    ] // 卸载后回调
  }
)

// 设置默认子应用,与 genActiveRule中的参数保持一致
setDefaultMountApp('/')

// 启动
start()

// 声明式（main.js）
import './qiankun_statement'

/**
 * 渲染函数
 * appContent 子应用html内容
 * loading 子应用加载效果，可选
 */
function render({
  appContent,
  loading
} = {}) {
  new Vue({
    el: '#app',
    router,
    store,
    i18n,
    data() {
      return {
        appContent: appContent,
        loading
      }
    },
    render(h) {
      return h(App, {
        props: {
          appContent: this.appContent,
          loading: this.loading
        }
      })
    }
  })
}

function initApp() {
  render({
    appContent: '',
    loading: true
  })
}

initApp()
