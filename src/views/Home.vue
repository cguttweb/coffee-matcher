<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="mt-2">Welcome to Coffee Matcher</h1>
          <img
            alt="Coffee cup"
            src="../assets/hot-coffee-rounded-cup-on-a-plate-from-side-view.png"
          />
          <div>
            Icons made by
            <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from
            <a href="https://www.flaticon.com/" title="Flaticon"
              >www.flaticon.com</a
            >
            is licensed by
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
              >CC 3.0 BY</a
            >
          </div>
          <h4>
            <router-link to="/questions"
              >Answer some questions to be matched to a coffee</router-link
            >
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
};
</script>

<style scoped>
.home img {
  margin: 2rem 0 1rem;
}
</style>
