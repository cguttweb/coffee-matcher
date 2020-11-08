<template>
  <div class="home">
    <div class="container">
      <form>
        <div class="row">
          <div class="col">
            <input
              class="form-control my-3 pl-2 py-1"
              type="text"
              v-model="name"
              label="Enter your name"
              placeholder="Please enter your name"
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
            <label for="questionfour"
              >Do you take sugar or sweetener in your coffee?</label
            >
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
         <div class="row" v-if="questionfour">
          <div class="col">
            <label for="questionfive">Do you like iced coffee?</label>
            <select
              name="questionfive"
              v-model="questionfive"
              class="form-control mb-3"
            >
              <option :value="null">Please select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <span>Question Five answer: {{ questionfive }}</span>
          </div>
        </div>
        <div class="row" v-if="questionfive === 'yes'">
          <div class="col py-3">
            <label for="coldcoffees">Would you like to see cold coffees options?</label>
            <select class="form-control mb-3" name="coldcoffees" id="coldcoffees" v-model="coldcoffees">
              <option :value="null">Please select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <span>Selected cold coffees: {{ coldcoffees }}</span>
          </div>
        </div>
        <div class="row pt-3" v-if="coldcoffees === 'yes'">
          <CoffeeCard v-for="coffee in coldCoffees" :key="coffee.name" :coffee="coffee" />
        </div>
        <div
          class="row pt-3"
          v-if="
            questionone &&
              questiontwo &&
              questionthree &&
              questionfour &&
              // eslint-disable-next-line prettier/prettier
              questionfive"
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
      coffees,
      coldcoffees: "",
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
        this.questionthree === "no" &&
        this.questionfour === "no" &&
        this.questionfive === 'no'
      ) {
        return coffees.slice(0, 2);
      } else if (this.questionone === "yes" &&
        this.questiontwo === "yes" &&
        this.questionthree === "no" &&
        this.questionfour === "no" &&
        this.questionfive === "yes") {
        return coffees.slice(0, 12);
      }
    },
    coldCoffees(){
      if(this.coldcoffees === 'yes'){
        return coffees.slice(13, 17);
      }
    }
  }
};
</script>

<style scoped>
.home {
  color: #2c3e50;
}
</style>
