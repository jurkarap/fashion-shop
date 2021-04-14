<template>
  <div class="catalog">
    <div class="container">
      <div class="row">
        <catalogItem
          v-for="product in filteredProducts"
          :key="product.article"
          :product_data="product"
          @addToCart="addToCart"
        />
      </div>
    </div>
    <div class="container">
      <customSelect 
      :selected="selected" 
      :options="categories" 
      @select="sort"
       />
    </div>
  </div>
</template>

<script>
import catalogItem from "./catalog-item";
import { mapActions, mapGetters } from "vuex";
import customSelect from "./custom-select";

export default {
  name: "catalog",
  components: {
    catalogItem,
    customSelect,
  },
  data() {
    return {
      categories: [
        { name: "Все", value: "all" },
        { name: "Мужские", value: "м" },
        { name: "Женские", value: "ж" },
      ],
      selected: "все",
      sortedProducts: []
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
    filteredProducts () {
      if (this.sortedProducts.length) {
        return this.sortedProducts
      } else {
        return this.PRODUCTS
      }
    }
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sort(category) {
      this.sortedProducts = [];
      let vm = this;
      this.PRODUCTS.map(function(item) {
        if (item.category === category.name) {
          vm.sortedProducts.push(item);
        }
      })
      this.selected = category.name
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style lang="sass"></style>
