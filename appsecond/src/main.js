import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
import VueRouter from 'vue-router';
import { routes } from './router';
import store from "./store";
import './public-path';

Vue.config.productionTip = false;

let router = null
let instance = null

function render(el = '#app-second') {
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/second' : '/',
    mode: 'history',
    routes
  })
  
  instance = new Vue({
    el: el,
    router,
    store,
    render: (h) => h(App)
  })
}

// 非主应用访问情况
if (!window.__POWERED_BY_QIANKUN__) {
  if (process.env.NODE_ENV === 'development') {
    render()
  }
}

export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount(props) {
  console.log('vue app mount');
  render()
}

export async function unmount() {
  instance.$destroy()
  instance = null
  router = null
}

// 增加 update 钩子以便主应用手动更新微应用
export async function update(props) {
  console.log('111')
}
