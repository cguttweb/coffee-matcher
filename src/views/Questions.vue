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
      <label for="milkoption">Do you like milk in your coffee?</label>
      <b-form-select name="milkoption" v-model="milkoption" class="mb-3">
        <option :value="null">Please select an option</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </b-form-select>
      <b-form-select>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </b-form-select>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  }
};
</script>

<style></style>
