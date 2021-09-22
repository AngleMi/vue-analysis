import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// eslint-disable-next-line no-new
new Vue({
  el: '#root',
  render: h => h(App)
})

// new Vue({
//   // render: h => h(App)
//   data () {
//     return {
//       message: 'Hello World'
//     }
//   }
// }).$mount('#app')
// eslint-disable-next-line no-new
// new Vue({
//   el: '#root',
//   data: {
//     message: 'Hello World'
//   },
//   render (h) {
//     return h('div', {
//       attrs: {
//         id: 'app1'
//       }
//     }, this.message)
//   }
// })

// const childComp = {
//   template: '<div>{{msg}}</div>',
//   data () {
//     return {
//       msg: 'hello world'
//     }
//   },
//   created () {
//     console.log('child created')
//   },
//   mounted () {
//     console.log('chilid mounted')
//   }
// }

// Vue.mixin({
//   created () {
//     console.log('parent created')
//   }
// })

// // eslint-disable-next-line no-new
// new Vue({
//   el: '#root',
//   render: h => h(childComp)
// })
