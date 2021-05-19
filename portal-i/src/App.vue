<template>
  <div id="app" class="wrap flexCB">
    <div class="menu-list">
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group> -->
      <el-menu :default-active="menuList[0].id" :collapse="isCollapse">
        <el-submenu v-for="item in menuList" :index="item.id" :key="item.id">
          <template slot="title">{{ item.name }}</template>
          <el-menu-item v-for="im in item.children" :index="im.id" :key="im.id">
            <router-link :to="im.path">{{ im.name }}</router-link> 
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="app-view">
      <div v-for="item in subappList" v-show="$route.path.startsWith(`/${item.name}/`)" :id="item.name" :key="item.name" class="h100" />
    </div>
  </div>
</template>

<script>
import { loadApp } from './qiankun'
import configSubApp from '@/subapp.config' // 子应用配置
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      subappList: configSubApp,
      isCollapse: false,
      // 菜单列表
      menuList: [
        {
          name: 'first应用',
          id: 'first',
          children: [
            {
              name: 'A页面',
              id: 'first_a',
              path: '/first/a'
            },
            {
              name: 'B页面',
              id: 'first_b',
              path: '/first/b'
            }
          ]
        },
        {
          name: 'second应用',
          id: 'second',
          children: [
            {
              name: 'A页面',
              id: 'second_a',
              path: '/second/a'
            },
            {
              name: 'B页面',
              id: 'second_b',
              path: '/second/b'
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapGetters([ 'loadedApp' ])
  },
  watch: {
    $route(nv, ov) {
      console.log('nv--', nv)
      console.log('ov--', ov)
      console.log('已加载应用1--', this.loadedApp)
      const appName = nv.fullPath.split('/')[1]
      console.log('appName--', appName)
      !this.loadedApp[appName] && loadApp(appName)
    }
  },
  created() {
    console.log('我重载啦~')
  },
  methods: {
    ...mapActions({
      setSystemMicro: 'setSystemMicro'
    })
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
  .menu-list {
    flex: .3;
    height: 100%;
  }
  .app-view {
    flex: 1;
    height: 100%;
    background-color: rgb(240, 240, 240);
  }
}
</style>
