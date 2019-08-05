<template>
  <div class="container">
  <div class="item pirate">
    <img src="/images/pirate.svg" width="100" alt="Item 1">
  </div>
  <div class="item police">
    <img src="/images/police.svg" width="100" alt="Item 2">
  </div>
  <div class="item cowboy">
    <img src="/images/cowboy.svg" width="100" alt="Item 3">
  </div>
  <div class="item doctor">
    <img src="/images/doctor.svg" width="100" alt="Item 4">
  </div>
</div>
</template>

<script>
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

export default {
  name: 'StickyComponent',
  components: {},
  data() {
    return {
    };
  },
  mounted() {},
  methods: {},
};

</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  border: 2px dashed rgba(114, 186, 94, 0.35);
  height: 400px;
  background: rgba(114, 186, 94, 0.05);
}

.pirate {
  position: -webkit-sticky;
  position: sticky;
  top: 4rem;
}

.police {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

.doctor {
  position: -webkit-sticky;
  position: sticky;
  bottom: 1rem;
  align-self: flex-end;
}
</style>

