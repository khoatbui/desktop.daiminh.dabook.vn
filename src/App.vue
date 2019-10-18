<template>
  <div id="app">
    <router-view/>
    <SpinnerComponent></SpinnerComponent>
  </div>
</template>
<script>
import SpinnerComponent from '@/components/SpinnerComponent.vue';
export default {
  components: {
    SpinnerComponent,
  },
  name: 'App',
  props: {
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>
<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #35405a;
}
.title, .card-title, .info-title, .footer-brand, .footer-big h5,.footer-big h4, .media .media-heading, h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4 {
    font-weight: 700;
    font-family: 'Roboto', sans-serif !important;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
