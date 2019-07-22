<template>
  <div>
    <div class="card" style="width: 18rem;">
      <img :src="photo" class="card-img-top" alt="photo of coffee" />
      <div class="card-body">
        <h5 class="card-title" :name="coffeename"></h5>
        <p class="card-text" :description="description"></p>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
    </div>
  </div>
</template>

<script>
import '../coffees.js';

export default {
  name: 'CoffeeCard',
  props: {
    name: String,
    description: String,
    photo: String
  },
  data() {
    return {
      coffeename: this.name
    };
  }
};
</script>

<style></style>
