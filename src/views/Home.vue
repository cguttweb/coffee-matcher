<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col">
          <Icon msg="Welcome to Coffee Matcher" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
export default {
  name: "home",
  components: {
    Icon
  }
};
</script>
