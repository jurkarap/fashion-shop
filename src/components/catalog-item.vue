<template>
  <div class="catalog-item col">
    <img :src="require('../assets/img/' + product_data.image)" alt="img" />
    <p>{{product_data.name}}</p>
    <p>{{product_data.price}}</p>
    <button @click="(addToCart())">add to cart</button>
  </div>
</template>

<script>
export default {
  name: "catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
          return {}
      }
    },
  },
  methods:{
    addToCart() {
      this.$emit('addToCart', this.product_data)
    }
  },


};
</script>

<style lang="sass">
img
    width: 100px
    height: 100px
</style>