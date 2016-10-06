// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import A from './components/a'
import B from './components/b'
import Home from './components/home'
Vue.use(VueRouter)
Vue.config.debug = true
var router = new VueRouter({
  history:true
})
router.map({
  '*': {
    component: Home
  },
  '/a': {
    component: A
  },
  '/b': {
    component: B
  }
})
router.start(App,'#app')
