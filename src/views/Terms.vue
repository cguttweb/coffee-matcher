<template>
  <div class="container">
    <h2>Coffee Terms</h2>
    <ul class="terms-list">
      <li>Arabica</li>
      <li>Robusta</li>
      <li>Single Origin</li>
      <li>Blended coffee</li>
      <li>Speciality coffee</li>
      <li>
        Roasts:
        <ul>
         <li><strong>Light</strong>- a light roast</li>
         <li><strong>Medium</strong>- a medium roast</li>
         <li><strong>Dark</strong>-a dark roast</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "terms"
};
</script>

<style scoped>
.terms-list {
  text-align: left;
}
</style>
