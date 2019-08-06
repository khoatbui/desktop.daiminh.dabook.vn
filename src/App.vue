<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Quicksand', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.title, .card-title, .info-title, .footer-brand, .footer-big h5,.footer-big h4, .media .media-heading, h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4 {
    font-weight: 700;
    font-family: 'Quicksand', sans-serif !important;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
