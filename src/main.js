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
