// 手动加载微应用
import { prefetchApps, loadMicroApp, start } from 'qiankun'
import router from './router'
import { Loading } from 'element-ui'
import configSubApp from './subapp.config' // 子应用配置
import store from './store'

let loadingInstance = ''
// 子应用静态资源预加载
// prefetchApps(configSubApp)

export const loadApp = (appName) => {
  // loadingInstance = Loading.service({
  //   lock: true,
  //   text: '正在加载应用...',
  //   spinner: 'el-icon-loading',
  //   background: '#FAFAFA',
  //   target: '.app-class'
  // })
  // store.dispatch('app/appLoading', true)
  console.log('加载了应用--', appName)
  const appInfo = configSubApp.filter(item => {
    return item.name === appName
  })
  console.log('应用信息--', appInfo)
  if (appInfo && appInfo.length > 0) {
    setTimeout(() => {
      const tempObj = {}
      tempObj[appName] = loadMicroApp(appInfo[0], { excludeAssetFilter: false })
      store.dispatch('setSystemMicro', tempObj)
      // console.log('loadedApp--', store.state.loadedApp)
      Promise.all([store.state.loadedApp[appName].mountPromise]).then(data => {
        // store.dispatch('app/appLoading', false)
        console.log('加载成功')
        // loadingInstance.close()
      }).catch(err => {
        // store.dispatch('app/appLoading', false)
        // loadingInstance.close()
        // messageUtil.error('加载失败，请重试！', err)
      })
    }, 10)
  } else {
    // loadingInstance.close()
  }
}

router.beforeEach((to, from, next) => {
  // console.log('to--', to)
  console.log('已加载应用--', store.state.loadedApp)
  const appName = to.fullPath.split('/')[1]
  console.log('appName--', appName)
  !store.state.loadedApp[appName] && loadApp(appName)
  next()
})

start()
