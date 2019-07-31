<template>
  <div class="main-search-component w-100 d-flex justify-content-center">
    <input class="main-input-search w-100 flex-grow-1" type="text" />
    <button class="main-button-search">
      <font-awesome-icon icon="search" class="text-x1 text-center" />
    </button>
  </div>
</template>

<script>
import PaymentComponent from "@/components/PaymentComponent.vue";

export default {
  components: {
    PaymentComponent
  },
  name: "MainSearchComponent",
  props: {
    msg: String
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-search-component{
  box-sizing: border-box;
  border:1px solid #FFFFFF;
}
.main-search-component:hover{
  border:1px solid #00bcd4;
}
.main-input-search,.main-button-search{
  height: 40px;
  display: inline-block;
  border:none;
  padding: 0 20px;
}
.main-button-search{
  border:none;
  background-color:#00bcd4 !important;
  font-size: 0.8rem;
  color: #FFFFFF;
  padding: 0 40px;
}
</style>
