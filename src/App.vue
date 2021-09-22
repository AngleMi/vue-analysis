<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="msg"/>
    <button @click="handleChange">click</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      msg: 'hello'
    }
  },
  methods: {
    handleChange () {
      this.msg = 'updated'
    }
  },
  beforeCreate () {
    console.log('parent beforeCreated')
  },
  created () {
    console.log('parent created')
  },
  beforeMounted () {
    console.log('parent beforeMounted')
  },
  mounted () {
    console.log('parent mounted')
  },
  beforeUpdate () {
    console.log('parent beforeUopdate')
  },
  updated () {
    console.log('parent updated')
  },
  beforeDestroy () {
    console.log('parent beforeDestroy')
  },
  destroyed () {
    console.log('parent destroyed')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
