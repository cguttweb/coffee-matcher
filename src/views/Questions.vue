<template>
  <div>
    <div class="container">
      <form action>
        <div class="row">
          <div class="col">
            <input
              type="text"
              v-model="name"
              label="Enter your name"
              placeholder="Enter your name"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h3 class="mt-2">Hello {{ name }}</h3>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h4 class="pb-2">
              Answer the following questions to be matched to a coffee
            </h4>
            <label for="questionone">Do you like your coffee strong?</label>
            <select name="questionone" v-model="questionone" class="form-control mb-3">
              <option :value="null">Please select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div class="row" v-if="questionone">
          <div class="col">
            <label for="questiontwo">Do you like milk in your coffee?</label>
            <select name="questiontwo" v-model="questiontwo" class="form-control mb-3">
              <option :value="null">Please select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div class="row" v-if="questiontwo">
          <div class="col">
            <label for="questionthree">Do you like iced coffee?</label>
            <select
              name="questionthree"
              v-model="questionthree"
              class="form-control mb-3"
            >
              <option :value="null">Please select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div class="row" v-if="questionthree">
          <div class="col">
            <label for="questionfour">Do you have your own coffee machine?</label>
            <select name="questionfour" v-model="questionfour" class="form-control mb-3">
              <option :value="null">Please select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div
          class="row"
          v-if="questionone && questiontwo && questionthree && questionfour"
        >
          <CoffeeCard />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import CoffeeCard from '@/components/CoffeeCard.vue';

export default {
  data() {
    return {
      name: '',
      questionone: '',
      questiontwo: '',
      questionthree: '',
      questionfour: '',
      questionfive: ''
    };
  },
  components: {
    CoffeeCard
  }
};
</script>

<style lang="scss" scoped>
label {
  display: block;
}
</style>
