<template>
  <div>
    <div class="container">
      <input
        type="text"
        v-model="name"
        label="Enter your name"
        placeholder="Enter your name"
      />
      <h3 class="mt-2">Hello {{ name }}</h3>
      <h4>Answer the following questions to be matched to a coffee</h4>
      <label for="questionone">Question One</label>
      <select name="questionone" v-model="questionone" class="mb-3">
        <option :value="null">Please select an option</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <label for="questiontwo">Question Two</label>
      <select name="questiontwo" v-model="questiontwo" class="mb-3">
        <option :value="null">Please select an option</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>
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
