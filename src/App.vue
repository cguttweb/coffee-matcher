<template>
  <div id="app">
    <div>
      <h1 class="py-2">Coffee Matcher</h1>
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
  // color: #2c3e50;
  color: #4FC08D;
}

h1 {
  // background-color: #4FC08D;
  background-color: #2c3e50;
  font-variant: small-caps;
}
</style>
