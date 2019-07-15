<template>
  <div>
    <b-container>
      <b-form-input
        v-model="name"
        label="Enter your name"
        placeholder="Enter your name"
      ></b-form-input>
      <h3 class="mt-2">Hello {{ text }}</h3>
      <h4>Answer the following questions to be matched to a coffee</h4>
      <label for="questionone">Question One</label>
      <b-form-select name="questionone" v-model="questionone" class="mb-3">
        <option :value="null">Please select an option</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </b-form-select>
      <label for="questiontwo">Question Two</label>
      <b-form-select name="questiontwo" v-model="questiontwo" class="mb-3">
        <option :value="null">Please select an option</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </b-form-select>
    </b-container>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //   };
  // }
};
</script>

<style></style>
