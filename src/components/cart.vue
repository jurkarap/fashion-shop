<template>
  <div class="cart container">
    <span>CART {{ CART.length }}</span>
    <div class="row">
      <cartItem
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteCartItem="deleteCartItem(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
      />
    </div>
    <div class="cart-total">
      <p>total:</p>
      <p>{{ cartTotal }}</p>
    </div>
  </div>
</template>

<script>
import cartItem from "./cart-item";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "cart",
  components: {
    cartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_ITEM_QUANTITY",
      "DECREMENT_ITEM_QUANTITY",
    ]),
    deleteCartItem(index) {
      this.DELETE_FROM_CART(index);
    },
    increment(index) {
      this.INCREMENT_ITEM_QUANTITY(index)
    },
    decrement(index) {
      this.DECREMENT_ITEM_QUANTITY(index);
    },
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
    cartTotal() {
      let result = [];
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      }
    },
  },
};
</script>

<style lang="sass"></style>
