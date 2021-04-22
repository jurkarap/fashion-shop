<template>
  <div class="app">
    <transition name="fade">
      <cart
        v-if="cartOpened"
        :cart_data="CART"
        v-bind:class="{ opened: cartOpened, closed: !cartOpened }"
        @cartClosed="cartClosed()"
      />
    </transition>

    <div class="navbar">
      <div class="container">
        <div class="navbar-router-links">
          <router-link class="router-link" to="/">home</router-link>
          <router-link class="router-link" to="/catalog">catalog</router-link>
        </div>
        <div class="text-end languages">
          <span>UK</span>
          <span>EN</span>
          <span>RU</span>
        </div>
        <div class="dropdown">
          <a
            class=""
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >войти
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            <li>
              <a
                class="dropdown-item"
                href="#"
                data-bs-toggle=""
                data-bs-target=""
                role="button"
                >Sign out</a
              >
            </li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li><a class="dropdown-item disabled" href="#">Signed in</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main-wrapper mt-3">
      <div class="container d-flex justify-content-between">
        <img class="logo" src="./assets/img/logo-01.svg" alt="img" />
        <div class="search-container mt-2">
          <form class="d-flex">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Пошук"
                aria-label=""
                aria-describedby="button-addon2"
                v-model="searchValue"
              />
              <button class="btn" type="button" id="button-addon2"
              @click="search(searchValue)"
              >
                Пошук
              </button>
            </div>
          </form>
        </div>
        <a class="main-wrapper-number mt-3" href="#">+38 (093) 000 00 00</a>
        <div href="" class="cart-widget mt-2" @click="openCart()">
          <img
            src="./assets/img/shopping-bag.svg"
            class="shopping-bag"
            alt=""
          />
          <span class="cart-counter text-center">{{ CART.length }}</span>
        </div>
      </div>
    </div>
    <div class="container d-flex justify-content-start categories">
      <router-link class="router-link" to="/catalog">Новинки</router-link>
      <router-link class="router-link" to="/catalog">Бренди</router-link>
      <router-link class="router-link" to="/catalog">Одяг</router-link>
      <router-link class="router-link" to="/catalog">Розпродаж</router-link>
    </div>
    <router-view class="pt-4" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Home from "./components/home.vue";
import wrapper from "./components/wrapper.vue";
import cart from "./components/cart.vue";

export default {
  name: "App",
  components: {
    wrapper,
    Home,
    cart,
  },
  computed: {
    ...mapGetters(["CART", "SEARCH_VALUE"]),
  },
  data() {
    return {
      cartOpened: false,
      searchValue: ''
    };
  },
  watch: {
    searchValue() {
      this.GET_SEARCH_VALUE(this.searchValue);
    }
  },
  methods: {
    ...mapActions ([
      "GET_SEARCH_VALUE"
    ]),
    openCart() {
      this.cartOpened = true;
    },
    cartClosed() {
      this.cartOpened = false;
    },
    search(value) {
      this.GET_SEARCH_VALUE(value);
      this.$router.push('/catalog')
    },
  },
};
</script>

<style lang="sass">
*
  font-family: 'Poppins', sans-serif

.app
  position: relative

.navbar
  background: #a1a1a1

.navbar-router-links
  .router-link
    font-size: 14px
    text-decoration: none
    color: #ffffff
    padding-left: 10px
    &:hover
      color: #000000
      transition-duration: 1s

.languages
  span
    font-size: 14px
    color: #ffffff
    padding-left: 5px
    cursor: pointer
    &:hover
      color: #b6cbcc
      transition-duration: 1s

.dropdown
  a
    font-size: 14px
    color: #ffffff
    text-decoration: none
    &:hover
      color: #b6cbcc
      transition-duration: 1s

.main-wrapper
  margin-top: 10px

.logo
  width: 150px
  height: 50px

.search-container
  input
    text-decoration: none
    opacity: 0.7
    border-radius: 4px
  button
    background: #a1a1a1
    color: #ffffff
    font-size: 14px

.main-wrapper-number
  text-decoration: none
  color: #B6CBCC

  &:hover
    color: #000000
    transition-duration: 1s

.cart-widget
  position: relative

.shopping-bag
  width: 30px
  height: 30px

.cart-counter
  position: absolute
  left: 70%
  right: 0%
  top: 0%
  bottom: 100%
  width: 20px
  height: 20px
  background: #DCDCDC
  opacity: 0.9
  border-radius: 12px
  color: #000000
  font-size: 14px

.categories
  .router-link
    font-size: 18px
    text-decoration: none
    color: #000000
    padding-left: 10px

.fade-enter-active, .fade-leave-active
  transition: all 0.5s

.fade-enter-from, .fade-leave-to
  transform: translateX(100%)
  opacity: 0

</style>
