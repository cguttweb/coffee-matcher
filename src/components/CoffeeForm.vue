<script setup>
import { ref, computed } from 'vue'
import CoffeeCard from './CoffeeCard.vue'
import { coffees } from '../coffees'

const title = ref('Coffee Matcher')
const question1 = ref('')
const question2 = ref('')
const question3 = ref('')
const question4 = ref('')
const question5 = ref('')
const question5b = ref('')
const question6 = ref('')
const question7 = ref('')
const hotCoffees = []
const coldCoffees = []

const getCoffees = coffees.forEach(coffee => {
  if (coffee.type === 'hot') {
    hotCoffees.push(coffee)
  }
})

const getColdCoffees = coffees.forEach(coffee => {
  if (coffee.type === 'cold') {
    coldCoffees.push(coffee)
  }
})
</script>

<template>
  <div class="mx-auto w-96">
    <h1 class="text-center text-3xl">{{ title }}</h1>
    <form class="flex-col" action="#">
      <div>
        <label for="q1">Are you a regular coffee drinker?</label>
        <select name="q1" id="q1" v-model="question1">
          <option value="">Please Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        Answer: {{ question1 }}
      </div>
      <div>
        <label for="q2">Do you like your coffee strong? </label>
        <select name="q2" id="q2" v-model="question2">
          <option value="">Please Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        Answer: {{ question2 }}
      </div>
      <div>
        <label for="q3">Do you take milk in your coffee?</label>
        <select name="q3" id="q3" v-model="question3">
          <option value="">Please Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        Answer: {{ question3 }}
      </div>
      <label for="q4">Do you take sugar or sweetener in your coffee?</label>
      <select name="q4" id="q4" v-model="question4">
        <option value="">Please Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      Answer: {{ question4 }}
      <div v-if="question4 === 'yes'">
        <label for="q5">Would you like to add a flavoured syrup?</label>
        <select name="q5" id="q5" v-model="question5">
          <option value="">Please Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        Answer: {{ question5 }}
      </div>
      <div v-if="question5 === 'yes'">
        <label for="q5b">Which flavour syrup would you like?</label>
        <select name="q5b" id="q5b" v-model="question5b">
          <option value="">Please Select</option>
          <option value="caramel">Caramel</option>
          <option value="gingerbread">Gingerbread</option>
          <option value="hazelnut">Hazelnut</option>
          <option value="vanilla">Vanilla</option>
          <option value="other">Other</option>
        </select>
        Answer: {{ question5b }}
      </div>
      <div v-if="question5b === 'other'">
        <label for="othersyrup">Please specify</label>
        <input type="text" name="othersyrup" id="othersyrup" class="" />
      </div>
      <div>
        <label for="q6">Do you like iced coffee?</label>
        <select name="q6" id="q6" v-model="question6">
          <option value="">Please Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        Answer: {{ question6 }}
      </div>
      <div v-if="question6 === 'yes'">
        <label for="q7"
          >Would you like to see the options for iced coffee?</label
        >
        <select name="q7" id="q7" v-model="question7">
          <option value="">Please Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        Answer: {{ question7 }}
      </div>
      <!-- once all questions are answered show coffee cards with matching options -->
    </form>
  </div>
  <div
    class="flex flex-wrap justify-between mx-auto w-4/5"
    v-if="question6 === 'no' || question7 === 'no'"
  >
    <CoffeeCard
      v-for="coffee in hotCoffees"
      :key="coffee.name"
      v-bind="coffee"
    />
  </div>
  <!-- Show cold coffee options -->
  <div class="flex justify-around mt-10" v-if="question7 === 'yes'">
    <CoffeeCard
      v-for="coffee in coldCoffees"
      :key="coffee.name"
      v-bind="coffee"
    />
  </div>
</template>

<style scoped>
label {
  @apply block py-2;
}

input[type='text'] {
  border-bottom: 1px solid #000000;
  @apply outline-0 p-2 w-96;
}

select {
  @apply border border-black p-2 w-full;
}
</style>
