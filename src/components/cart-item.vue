<template>
  <div class="cart-item">
    <div class="container-fluid">
      <div class="row justify-content-evenly">
        <div class="col-3">
          <img
            :src="require('../assets/img/' + cart_item_data.image)"
            alt="img"
          />
        </div>
        <div class="col-5">
          <p class="item-name">{{ cart_item_data.name }}</p>
          <p class="item-price">{{ cart_item_data.price }} грн.</p>
        </div>
        <div class="col-2 quantity">
          <span @click="increment()">+</span>
          <span>{{ cart_item_data.quantity }}</span>
          <span @click="decrement()">-</span>
        </div>
        <div class="col-2 text-end">
          <i class="fas fa-times" @click="deleteCartItem"></i>
        </div>
      </div>
    </div>
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

<style lang="sass" scoped>
.cart-item
  margin-top: 5%
  padding-bottom: 5%
  border-bottom: 1px solid #D3D3D3
  img
    width: 80%
    height: auto
  .item-price
    font-size: 16px
    font-weight: 600
  .quantity
    span
      cursor: pointer
      font-size: 20px
      padding-right: 5px
      user-select: none
</style>