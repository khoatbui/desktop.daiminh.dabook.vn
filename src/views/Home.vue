<template>
  <div class="home">
    <NavigationComponent></NavigationComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import NavigationComponent from '@/components/NavigationComponent.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    NavigationComponent
  },
};
</script>
