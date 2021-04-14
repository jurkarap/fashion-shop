<template>
  <div class="custom-select">
    <p class="title" @click="visible = !visible">{{ selected }}</p>
    <div class="options" v-if="visible">
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "custom-select",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      visible: false,
    };
  },
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.visible = false;
    },
    hideSelect() {
      this.visible = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>

<style lang="sass">
.custom-select
    position: relative
    width: 200px
    cursor: pointer
    p
        margin: 0
        &:hover
            background: #e7e7e7
.options
    border: solid 1px #aeaeaa
    position: absolute
    top: 30px
    right: 0
    width: 100%

.title
    border: solid 1px #aeaeaa
</style>