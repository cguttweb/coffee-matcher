<template>
  <div>
    <img :src="image" :alt="name" />
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
    <p>{{ type }}</p>
    <p>{{ credit }}</p>
  </div>
</template>

<script setup>
const coffeeInfo = defineProps({
  name: String,
  description: String,
  type: String,
  image: String,
  credit: String,
})
</script>

<style scoped></style>
