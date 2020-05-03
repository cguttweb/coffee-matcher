<template>
  <div id="app">
    <div id="header">
      <h1>Coffee Matcher</h1>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header {
  background: #2c3e50;
  color: #ffffff;
  padding: 1rem;
}
</style>
