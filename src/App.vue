<template>
  <div id="app">
    <!--<router-link to="/UserProtocol">UserProtocol</router-link>-->
    <!--<router-link to="./components/authorize">authorize</router-link>-->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
