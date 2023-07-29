<script setup>
import { ref } from 'vue'

const title = ref('Coffee Matcher')
</script>

<template>
  <h1 class="text-center text-2xl">{{ title }}</h1>
  <form class="flex-col" action="#">
    <label for="q1">Q1: Are you a regular coffee drinker?</label>
    <select name="q1" id="q1">
      <option value="null">Please Select</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
    <label for="q2">Q2: Do you like your coffee strong? </label>
    <select name="q2" id="q2">
      <option value="null">Please Select</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
    <label for="q3">Q3: Do you take milk in your coffee?</label>
    <select name="q3" id="q3">
      <option value="null">Please Select</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
    <label for="q4">Q4: Do you take sugar or sweetener in your coffee?</label>
    <select name="q4" id="q4">
      <option value="null">Please Select</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
    <label for="q5">Q5: Would you like to add a flavoured syrup?</label>
    <select name="q5" id="q5">
      <option value="null">Please Select</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
    <label for="q6">Q6: Do you like iced coffee?</label>
    <select name="q6" id="q6">
      <option value="null">Please Select</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
    <p>{{ q6 }}</p>
    <label for="q7"
      >Q7: Would you like to see the options for iced coffee?</label
    >
    <select name="q7" id="q7">
      <option value="null">Please Select</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
  </form>
</template>

<style scoped>
label {
  @apply block font-bold;
}

select {
  @apply border border-black w-2/5;
}
</style>
