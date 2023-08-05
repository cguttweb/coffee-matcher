<template>
  <div class="w-60">
    <img :src="photo" :alt="name" />
    <h3><span>Name:</span> {{ name }}</h3>
    <p><span>Description:</span> {{ description }}</p>
    <p><span>Type:</span> {{ type }}</p>
    <p v-html="photocredit"></p>
  </div>
</template>

<script setup>
const coffeeInfo = defineProps({
  name: String,
  description: String,
  type: String,
  photo: String,
  photocredit: String,
})
</script>

<style scoped>
span {
  @apply font-bold;
}
</style>
