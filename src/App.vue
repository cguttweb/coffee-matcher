<template>
  <div id="app">
    <div id="nav">
      <b-navbar class="justify-content-center text-white" variant="dark">
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/about">About</router-link>
          </b-nav-item>
          <b-nav-item
            ><router-link to="/origins">Origins</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/questions">Questions</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

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
