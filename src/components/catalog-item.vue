<template>
  <div class="catalog-item col">
    <img :src="require('../assets/img/' + product_data.image)" alt="img" />
    <div class="catalog-item-description">
      <span class="catalog-item-name">{{ product_data.name }}</span>
      <br />
      <p class="catalog-item-brand">{{ product_data.brand }}</p>
      <p class="catalog-item-price">{{ product_data.price }} грн.</p>
    </div>
    <button class="btn btn-outline-secondary" @click="addToCart()">
      Придбати
    </button>
  </div>
</template>

<script>
export default {
  name: "catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
};
</script>

<style lang="sass" scoped>
img
  width: 200px
  height: 60%
  padding: 5%

.catalog-item
  transition-duration: 0.5s
  margin-bottom: 10%
  text-align: center
  cursor: pointer
  &:hover
    transform: scale(1.1)
    box-shadow: 0px 3px 8px 6px rgba(34, 60, 80, 0.2)
  .catalog-item-name
    font-size: 14px
    font-weight: 600
  .catalog-item-brand
    font-size: 12px
  .catalog-item-price
    font-size: 16px
    font-weight: 600
</style>