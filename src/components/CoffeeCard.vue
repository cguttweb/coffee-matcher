<template>
  <div>
    <div class="card" style="width: 18rem;">
      <img
        src="http://via.placeholder.com/200x150"
        class="card-img-top"
        alt="photo of coffee"
      />
      <div class="card-body">
        <h5 class="card-title">Card Title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <a href="#">{{ fetchData() }}</a>
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CoffeeCard",
  data() {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL
    };
  },
  methods: {
    fetchData() {
      axios.get(this.baseUrl + "/coffees.js").then(response => {
        console.log(response);
      });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style></style>
