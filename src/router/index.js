import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/pages/Form/index'
import VeeValidate from 'vee-validate'

Vue.use(Router, VeeValidate)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form
    }
  ]
})
