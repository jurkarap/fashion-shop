<template>
  <div class="catalog">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <customSelect
            :selected="selected"
            :options="categories"
            @select="sort"
          />
          <div class="mt-5">
            <p>min: {{ minPrice }}</p>
            <p>max: {{ maxPrice }}</p>
          </div>
          <div class="range-slider mt-5">
            <input
              type="range"
              min="0"
              max="10000"
              step="500"
              v-model.number="minPrice"
              @change="setRangeSlider"
            />
            <input
              type="range"
              min="0"
              max="10000"
              step="500"
              v-model.number="maxPrice"
              @change="setRangeSlider"
            />
          </div>
        </div>
        <div class="col-lg-8">
          <div class="row">
            <catalogItem
              v-for="product in filteredProducts"
              :key="product.article"
              :product_data="product"
              @addToCart="addToCart"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import catalogItem from "./catalog-item";
import { mapActions, mapGetters } from "vuex";
import customSelect from "./custom-select";
import cart from "./cart";

export default {
  name: "catalog",
  components: {
    catalogItem,
    customSelect,
    cart,
  },
  data() {
    return {
      categories: [
        { name: "Все", value: "all" },
        { name: "Мужские", value: "м" },
        { name: "Женские", value: "ж" },
      ],
      selected: "все",
      sortedProducts: [],
      minPrice: 0,
      maxPrice: 10000,
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART", "SEARCH_VALUE"]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sort(category) {
      let vm = this;
      this.sortedProducts = [...this.PRODUCTS];
      this.sortedProducts = this.sortedProducts.filter(function (item) {
        return item.price >= vm.minPrice && item.price <= vm.maxPrice;
      });
      if (category) {
        this.sortedProducts = this.sortedProducts.filter(function (el) {
          vm.selected = category.name;
          return el.category === category.name;
        });
      }
    },
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.sort();
    },
    sortBySearch(value) {
      this.sortedProducts = [...this.PRODUCTS]
      if (value) {
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          return item.name.toLowerCase().includes(value.toLowerCase());
        });
      } else {
        this.sortedProducts = [...this.PRODUCTS]
      }
    },
    testText(value) {
      alert(value)
    }
  },
  watch: {
    SEARCH_VALUE() {
      this.sortBySearch(this.SEARCH_VALUE)
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    .then((response) => {
      if(response.data) {
        this.sort()
        this.sortBySearch(this.SEARCH_VALUE)
      }
    })
  },
};
</script>

<style lang="sass">
.range-slider
  width: 200px
  margin: auto 16px
  text-align: center
  position: relative
  svg, input[type=range]
    position: absolute
    left: 0
    bottom: 0
  input[type=range]::-webkit-slider-thumb
    z-index: 2
    position: relative
    top: 2px
    margin-top: -7px
</style>
