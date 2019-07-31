<template>
  <div class="home">
    <NavigationComponent></NavigationComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import NavigationComponent from '@/components/NavigationComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    NavigationComponent,
    FooterComponent
  },
};
</script>
