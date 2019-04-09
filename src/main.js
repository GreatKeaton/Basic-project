// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Select, Slider } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import EventBus from '../static/js/eventBus.js'

// 借助 babel-plugin-component，只引入需要的组件，以达到减小项目体积的目的
// 在下面追加上需要引用的element-ui组件
Vue.use(Button)
Vue.use(Select)
Vue.use(Slider)

// created () {
//   this.$eventBus.$on('home-on', (...args) => {
//     console.log('home $on====>>>', ...args)
//   }, this) // 注意第三个参数需要传当前组件的this，如果不传则需要手动销毁
// }
Vue.use(EventBus) // 性能优化,清除事件总线

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
