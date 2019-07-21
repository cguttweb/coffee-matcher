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
            <h4>Answer the following questions to be matched to a coffee</h4>
            <label for="questionone">Question One</label>
            <select
              name="questionone"
              v-model="questionone"
              class="form-control mb-3"
            >
              <option :value="null">Please select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="questiontwo">Question Two</label>
            <select
              name="questiontwo"
              v-model="questiontwo"
              class="form-control mb-3"
            >
              <option :value="null">Please select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="questionthree">Question Three</label>
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
        <div class="row">
          <div class="col">
            <label for="questionfour">Question Four</label>
            <select
              name="questionfour"
              v-model="questionfour"
              class="form-control mb-3"
            >
              <option :value="null">Please select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="questionfive">Question Five</label>
            <select
              name="questionfive"
              v-model="questionfive"
              class="form-control mb-3"
            >
              <option :value="null">Please select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="questionsix">Question Six</label>
            <select
              name="questionsix"
              v-model="questionsix"
              class="form-control mb-3"
            >
              <option :value="null">Please select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="questionseven">Question Seven</label>
            <select
              name="questionseven"
              v-model="questionseven"
              class="form-control mb-3"
            >
              <option :value="null">Please select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="questioneight">Question Eight</label>
            <select
              name="questioneight"
              v-model="questioneight"
              class="form-control mb-3"
            >
              <option :value="null">Please select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="questionnine">Question Nine</label>
            <select
              name="questionnine"
              v-model="questionnine"
              class="form-control mb-3"
            >
              <option :value="null">Please select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="questionten">Question Ten</label>
            <select
              name="questionten"
              v-model="questionten"
              class="form-control mb-3"
            >
              <option :value="null">Please select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div class="row">
          <CoffeeCard></CoffeeCard>
        </div>
        <!-- <div class="row">
        <CoffeeCard></CoffeeCard>
        </div>-->
      </form>
    </div>
  </div>
</template>

<script>
import CoffeeCard from "@/components/CoffeeCard.vue";

export default {
  data() {
    return {
      name: "",
      questionone: "",
      questiontwo: "",
      questionthree: "",
      questionfour: "",
      questionfive: "",
      questionsix: "",
      questionseven: "",
      questioneight: "",
      questionnine: "",
      questionten: ""
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
