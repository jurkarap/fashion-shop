<template>
  <div class="cart">
    <div class="container-fluid cart-content">
      <div class="row">
        <div class="col-10 text-center">
          <span>КОШИК {{ cartTotalItems }}</span>
        </div>
        <div class="col-2 text-end">
          <i class="fas fa-times close-cart" @click="cartClosed()"></i>
        </div>
      </div>
      <div class="empty-cart mt-4"
      v-if="!CART.length"
      >
        <span>У вашому кошику немає товарів.
          <br>
          Нам не вдалося зберегти Ваше
          замовлення так як в кошику немає товарів. Будь ласка, додайте
          необхідні товари, щоб оформити замовлення.
        </span>
      </div>
      <div class="cart-products">
        <cartItem
          v-for="(item, index) in cart_data"
          :key="item.article"
          :cart_item_data="item"
          @deleteCartItem="deleteCartItem(index)"
          @increment="increment(index)"
          @decrement="decrement(index)"
        />
      </div>
      <div class="cart-total" v-if="CART.length">
        <span>{{ cartTotal }} грн.</span>
      </div>
    </div>
  </div>
</template>

<script>
import cartItem from "./cart-item.vue";
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
      this.INCREMENT_ITEM_QUANTITY(index);
    },
    decrement(index) {
      this.DECREMENT_ITEM_QUANTITY(index);
    },
    cartClosed() {
      this.$emit("cartClosed");
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
    cartTotalItems() {
      let result = [];
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.quantity);
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

<style lang="sass">
.cart
  position: fixed
  left: 75%
  right: 0
  z-index: 100
  background: #ffffff
  height: 100%
  overflow-x: hidden
  overflow-y: auto
  box-shadow: -8px 4px 16px 1px rgba(34, 60, 80, 0.2)
  span
    font-size: 20px
    font-weight: 400
  i
    font-size: 20px
    opacity: 0.2
  .close-cart
    font-size: 26px
    opacity: 1
  .cart-total
    position: fixed
    top: 95%
    width: 100%
    height: 5%
    background: #ffffff
    span
      font-size: 24px
      font-weight: 600
</style>
