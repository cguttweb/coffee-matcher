<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/origins">Coffee Origins</router-link> |
      <router-link to="/terms">Terms</router-link> |
      <router-link to="/questions">Questions</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  background: #2c3e50;
  color: #ffffff;
  padding: 30px;
  a {
    font-weight: bold;
    color: #ffffff;
    &.router-link-exact-active {
      color: #42b983;
    }
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
