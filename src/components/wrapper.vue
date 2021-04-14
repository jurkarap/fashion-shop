<template>
  <div class="wrapper">

  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "wrapper",
  components: {
    /*         catalog, */
    /*     cart, */
  },
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style lang="sass">

</style> */