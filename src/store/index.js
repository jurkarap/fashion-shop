import { createStore } from "vuex";
import axios from "axios"

export default createStore({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    SET_PRODUCT_TO_STATE: (state, products) => {
      state.products = products;
    },
    ADD_CART: (state, product) => {
      if (state.cart.length) {
        let isProductInCart = false;
        state.cart.map(function(item) {
          if(item.article === product.article) {
            isProductInCart = true;
            item.quantity++
          }
        })
        if (!isProductInCart) {
          state.cart.push(product)
        }
      } else {
        state.cart.push(product)
      }

    },
    DELETE_CART_ITEM: (state, index) => {
      state.cart[index].quantity = 1
      state.cart.splice(index, 1)
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++
    },
    DECREMENT: (state, index) => {
      if(state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      }

    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({commit}) {
      return axios('http://localhost:3000/products', {
        method: 'GET'
      })
      .then ((products) => {
        commit ('SET_PRODUCT_TO_STATE', products.data);
        return products;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
    },
    ADD_TO_CART({commit}, product) {
      commit ('ADD_CART', product);
    },
    DELETE_FROM_CART({commit}, index) {
      commit('DELETE_CART_ITEM', index)
    },
    INCREMENT_ITEM_QUANTITY({commit}, index) {
      commit('INCREMENT', index)
    },
    DECREMENT_ITEM_QUANTITY({commit}, index) {
      commit('DECREMENT', index)
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    }
  },
});
