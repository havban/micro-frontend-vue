<template>
  <div id="app">
    <div>ini normal</div>
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view></router-view>
    <div
      v-for="m in modules"
      :key="m.src">
      <div id="app-collab"></div>
    </div>
  </div>
</template>

<script>
import { loadScript } from '@/utils/loadScript'

export default {
  name: 'app',
  data () {
    return {
      modules: [
        {
          src: '/collab/app.js'
        }
      ]
    }
  },
  mounted () {
    // Mount points exist now; load each micro-frontend bundle.
    for (const m of this.modules) {
      loadScript(m.src).catch((err) => console.warn(err.message))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
