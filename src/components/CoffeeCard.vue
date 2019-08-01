<template>
  <div>
    <div
      class="card"
      style="width: 18rem;"
      v-for="(coffee, index) in coffees"
      :key="index"
    >
      <img :src="coffee.photo" class="card-img-top" alt="photo of coffee" />
      <div class="card-body">
        <h5 class="card-title">
          {{ coffee.name }}
        </h5>
        <p class="card-text">{{ coffee.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
const coffees = [
  {
    name: "espresso",
    description: "strong coffee with a good crema",
    photo:
      "https://www.lavazza.co.uk/content/dam/lavazza/magazine/coffee-culture/the-coffee-book/espresso/lavazza-coffeebook-ecomeespresso-imgdx-d.png.transform/null/19df145319e179900947f02e36f8874cc3ba2a8e/img.png"
  },
  {
    name: "ristresso",
    description: "even stronger than an espresso",
    photo: ""
  },
  {
    name: "latte",
    description: "",
    photo: ""
  },
  {
    name: "cappuccino",
    description: "",
    photo: ""
  },
  {
    name: "mocha",
    description: "",
    photo: ""
  },
  {
    name: "cortado",
    description: "",
    photo: ""
  },
  {
    name: "americano",
    description: "",
    photo: ""
  },
  {
    name: "macchiato",
    description: "",
    photo: ""
  },
  {
    name: "espresso con panna",
    description: "",
    photo: ""
  },
  {
    name: "piccolo",
    description: "",
    photo: ""
  },
  {
    name: "flat white",
    description: "Originally from New Zealand",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Flat_white_coffee_with_pretty_feather_pattern.jpg/220px-Flat_white_coffee_with_pretty_feather_pattern.jpg"
  },
  {
    name: "lungo",
    description: "",
    photo: ""
  },
  {
    name: "affogato",
    description: "a shot of espresso poured over ice cream",
    photo: ""
  },
  {
    name: "Moretta fanese",
    description:
      "It is strong and sweet, and usually drunk after meals as a digestive, or used as a hot drink on cold afternoons. The hot cocktail is a blend of anise, rum and brandy in roughly equal parts.",
    photo: ""
  },
  {
    name: "espresso martini",
    description: "",
    photo: ""
  },
  {
    name: "cold brew",
    description: "",
    photo: ""
  }
];

export default {
  name: "CoffeeCard",
  data() {
    return {
      coffees
    };
  }
};
</script>

<style></style>
