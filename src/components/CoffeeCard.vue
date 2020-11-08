<template>
  <div>
    <div class="card" style="width: 15rem;">
      <img
        :src="coffee.photo"
        class="card-img-top"
        :alt="coffee.name"
        style="max-height: 300px"
      />
      <div class="card-body">
        <h5 class="card-title">{{ coffee.name }}</h5>
        <p class="card-text">{{ coffee.description }}</p>
        <small v-html="coffee.photocredit"></small>
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
