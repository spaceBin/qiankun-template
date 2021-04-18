## 本地运行qiankun-template

### 启动portal项目

1. `cd portal`；

2. `npm install` or `yarn`；

3. `npm run serve`；

* 访问`http://localhost:7013`即可访问portal项目【这时候还不能通过菜单访问子应用】

### 启动子应用（app-first、app-second），以app-first为例

1. `cd app-first`；

2. `npm install` or `yarn`；

3. `npm run serve`；

* 两子应用启动后，访问`http://localhost:7013`点击左侧菜单即可加载对应子应用页面，且加载后不会重复加载
