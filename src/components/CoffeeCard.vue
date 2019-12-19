<template>
  <div>
    <div class="card" style="width: 18rem;">
      <slot name="image"></slot>
      <!-- <img :src="coffee.photo" class="card-img-top" alt="photo of coffee" /> -->
      <div class="card-body">
        <slot name="coffeename"></slot>
        <slot name="description"></slot>
        <!-- <h5 class="card-title">{{ coffee.name }}</h5> -->
        <!-- <p class="card-text">{{ coffee.description }}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoffeeCard',
  props: ['coffee']
};
</script>

<style></style>
