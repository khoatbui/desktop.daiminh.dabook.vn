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
  border-radius: 100px;
  overflow: hidden;
  margin:0;
  padding: 0;
  outline: none;
  height: 40px;
  box-sizing: border-box;
}
.main-search-component:hover{
  box-shadow: 0 0 7px -4px#f44336;
}
.main-input-search{
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
}
.main-button-search{
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
}
.main-input-search,.main-button-search{
  border:2px solid #f44336;
  display: inline-block;
  padding: 0 20px;
  height: 100%;
  margin:0;
  box-sizing: border-box;
}
.main-button-search{
  border:none;
  background-color:#f44336 !important;
  font-size: 0.8rem;
  color: #FFFFFF;
  padding: 0 40px;
}
</style>
