<template>
  <div class="cart-item col-auto">
    <img :src="require('../assets/img/' + cart_item_data.image)" alt="img" />
    <p>{{ cart_item_data.name }}</p>
    <p>{{ cart_item_data.price }}</p>
    <p>{{ cart_item_data.article }}</p>
    <div class="container">
        <span @click="increment()">+</span>
        <span>{{ cart_item_data.quantity }}</span>
        <span @click="decrement()">-</span>
    </div>
    <button @click="deleteCartItem">delete</button>
  </div>
</template>

<script>
export default {
  name: "cart-item",
  data() {
    return {};
  },
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deleteCartItem() {
      this.$emit("deleteCartItem");
    },
    decrement() {
      this.$emit("decrement");
    },
    increment() {
      this.$emit("increment");
    },
  },
};
</script>

<style lang="sass">
</style>