<template>
  <div class="home">
    <div class="container">
      <form action>
        <div class="row">
          <div class="col">
            <label for="name">
              <h4>Please enter your name</h4>
            </label>
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
            <label for="questionone">Do you drink coffee regularly?</label>
            <select
              name="questionone"
              v-model="questionone"
              class="form-control mb-3"
            >
              <option :value="null">Please select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <span>Question One answer: {{ questionone }}</span>
          </div>
        </div>
        <div class="row" v-if="questionone">
          <div class="col">
            <label for="questiontwo">Do you like your coffee strong?</label>
            <select
              name="questiontwo"
              v-model="questiontwo"
              class="form-control mb-3"
            >
              <option :value="null">Please select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <span>Question Two answer: {{ questiontwo }}</span>
          </div>
        </div>
        <div class="row" v-if="questiontwo">
          <div class="col">
            <label for="questionthree">Do you take milk in your coffee?</label>
            <select
              name="questionthree"
              v-model="questionthree"
              class="form-control mb-3"
            >
              <option :value="null">Please select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <span>Question Three answer: {{ questionthree }}</span>
          </div>
        </div>
        <div class="row" v-if="questionthree">
          <div class="col">
            <label for="questionfour">Do you like iced coffee?</label>
            <select
              name="questionfour"
              v-model="questionfour"
              class="form-control mb-3"
            >
              <option :value="null">Please select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <span>Question Four answer: {{ questionfour }}</span>
          </div>
        </div>
        <!-- <div class="row" v-if="questionfour">
          <div class="col">
            <label for="questionfive"></label>
            <select name="questionfive" v-model="questionfive" class="form-control mb-3">
              <option :value="null">Please select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <span>Question Five answer: {{ questionfive }}</span>
          </div>
        </div>-->
        <div
          class="row pt-3"
          v-if="questionone && questiontwo && questionthree && questionfour"
        >
          <CoffeeCard
            v-for="coffee in filteredCoffees"
            :key="coffee.name"
            :coffee="coffee"
          ></CoffeeCard>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import CoffeeCard from "@/components/CoffeeCard.vue";
import coffees from "../coffees.js";

export default {
  name: "home",
  data() {
    return {
      name: "",
      questionone: "",
      questiontwo: "",
      questionthree: "",
      questionfour: "",
      questionfive: "",
      coffees
    };
  },
  components: {
    CoffeeCard
  },
  computed: {
    // filter the array of coffees based on what the answers are if all yes show this if all no show this else show something different....
    filteredCoffees() {
      if (
        this.questionone === "yes" &&
        this.questiontwo === "yes" &&
        this.questionthree === "no"
      ) {
        return coffees.slice(0, 2);
      } else {
        return coffees.slice(0, 20);
      }
      // return coffees.slice(0, 20);
    }
  }
};
</script>

<style lang="scss" scoped>
label {
  display: block;
}
</style>
