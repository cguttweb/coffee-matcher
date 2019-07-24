<template>
  <div>
    <div class="card" style="width: 18rem;">
      <img :src=photo class="card-img-top" alt="photo of coffee" />
      <div class="card-body">
        <h5 class="card-title" :name="coffeename"></h5>
        <p class="card-text" :description=description></p>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
    </div>
  </div>
</template>

<script>
import '../coffees.js';

export default {
  name: 'CoffeeCard',
  data(){
    return {
      coffees: [
      {
        espresso: {
          name: 'espresso',
          description: '',
          photo: ''
        },
        ristresso: {
        name: "",
        description: "",
        photo: ""
        },
        latte: {
          name: "",
          description: "",
          photo: ""
        },
        cappuccino: {
          name: "",
          description: "",
          photo: ""
        },
        mocha: {
          name: "",
          description: "",
          photo: ""
        },
        cortado: {
          name: "",
          description: "",
          photo: ""
        },
        americano: {
          name: "",
          description: "",
          photo: ""
        },
        macchiato: {
          name: "",
          description: "",
          photo: ""
        },
        espresso con panna: {
          name: "",
          description: "",
          photo: ""
        },
        piccolo: {
          name: "",
          description: "",
          photo: ""
        },
        flat white: {
          name: "",
          description: "",
          photo: ""
        },
        lungo: {
          name: "",
          description: "",
          photo: ""
        },
        affogato: {
          name: "",
          description: "",
          photo: ""
        },
        espresso martini: {
          name: "",
          description: "",
          photo: ""
        },
        cold brew: {
          name: "",
          description: "",
          photo: ""
        }
      }
    ]
    }
  },
  props: {
    name: String,
    description: String,
    photo: String
  }
};
</script>

<style></style>
