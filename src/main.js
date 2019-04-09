// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Select, Slider } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 借助 babel-plugin-component，只引入需要的组件，以达到减小项目体积的目的
// 在下面追加上需要引用的element-ui组件
Vue.use(Button)
Vue.use(Select)
Vue.use(Slider)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
