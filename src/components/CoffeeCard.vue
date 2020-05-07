<template>
  <div>
    <div class="card" style="width: 18rem;">
      <img :src="coffee.photo" class="card-img-top" :alt="coffee.name" />
      <div class="card-body">
        <h5 class="card-title">{{ coffee.name }}</h5>
        <p class="card-text">{{ coffee.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoffeeCard",
  props: ["coffee"]
};
</script>

<style></style>
