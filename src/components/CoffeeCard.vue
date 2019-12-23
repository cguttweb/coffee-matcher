<template>
  <div>
    <div class="card" style="width: 18rem;">
      <slot name="image">
        <img :src="coffee.photo" class="card-img-top" alt="photo of coffee" />
      </slot>
      <div class="card-body">
        <slot name="coffeename">
          <h5 class="card-title">{{ coffee.name }}</h5>
        </slot>
        <slot name="description">
          <p class="card-text">{{ coffee.description }}</p>
        </slot>
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
