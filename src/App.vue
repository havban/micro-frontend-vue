<template>
  <div id="app">
    <div>ini normal</div>
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view></router-view>
    <div
      v-for="m in modules">
      <script2 :src="m.src"/>
      <div id="app-collab"></div>
    </div>
  </div>
</template>

<script>

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
  components: {
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
