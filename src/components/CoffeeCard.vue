<template>
  <div>
    <div class="card" style="width: 18rem;">
      <img
        src="https://via.placeholder.com/200x100"
        class="card-img-top"
        alt="photo of coffee"
      />
      <div class="card-body">
        <h5 class="card-title">{{ coffees.name }}</h5>
        <p class="card-text">{{ description }}</p>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoffeeCard',
  data() {
    return {
      coffees: [
        {
          name: 'espresso',
          description: '',
          photo: ''
        },
        {
          name: 'ristresso',
          description: '',
          photo: ''
        },
        {
          name: 'latte',
          description: '',
          photo: ''
        },
        {
          name: 'cappuccino',
          description: '',
          photo: ''
        },
        {
          name: 'mocha',
          description: '',
          photo: ''
        },
        {
          name: 'cortado',
          description: '',
          photo: ''
        },
        {
          name: 'americano',
          description: '',
          photo: ''
        },
        {
          name: 'macchiato',
          description: '',
          photo: ''
        },
        {
          name: 'espresso con panna',
          description: '',
          photo: ''
        },
        {
          name: 'piccolo',
          description: '',
          photo: ''
        },
        {
          name: 'flat white',
          description: '',
          photo: ''
        },
        {
          name: 'lungo',
          description: '',
          photo: ''
        },
        {
          name: 'affogato',
          description: '',
          photo: ''
        },
        {
          name: 'espresso martini',
          description: '',
          photo: ''
        },
        {
          name: 'cold brew',
          description: '',
          photo: ''
        }
      ]
    };
  }
};
</script>

<style></style>
