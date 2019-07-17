<template>
  <div id="app">
    <nav id="nav" class="justify-content-center text-white">
        <ul>
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/origins">Origins</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/questions">Questions</router-link>
          </li>
        </ul>
    </nav>
    <router-view></router-view>
  </div>
</div>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
.nav-item a {
  color: #ffffff;
}
</style>
