<template>
  <div class="home">
<b-container class="bv-example-row">
  <b-row>
    <b-col>
          <img alt="Coffee cup" src="../assets/hot-coffee-rounded-cup-on-a-plate-from-side-view.png" />
        
    <HelloWorld msg="Welcome to Coffee Matcher" />
    <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    </b-col>
  </b-row>
  <b-row>
    <b-col>1 of 3</b-col>
    <b-col>2 of 3</b-col>
    <b-col>3 of 3</b-col>
  </b-row>
</b-container>
  </div>
</template>

<script>

export default {
  name: "home",
  components: {
  }
};
</script>

<style scoped>
  .home img {
    margin-top: 50px;
  }
</style>
