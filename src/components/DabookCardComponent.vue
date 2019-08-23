//src/components/Navbar.vue
<template>
  <div>
    <div class="card w-100 shadow-none">
        <div class="row p-4 m-0">
            <div class="col-4 m-0 p-0">
                <img class="dabook-logo cursor-pointer" src="/img/logo_dabook.jpg" alt="" @click="redirectToDabook">
            </div>
            <div class="col-8 m-0 p-0">
                <h4 class="text-info m-0 cursor-pointer" @click="redirectToDabook">Dabook.vn</h4>
                <p class="text-muted text-08">{{$t('general_label_dabookintro')}}</p>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DabookCardComponent",
  data() {
    return {
    };
  },
  created() {},
  methods: {
      redirectToDabook(){
          window.open('http://www.dabook.vn', '_blank');
      }
  }
};
</script>
<style lang="scss" scoped>
.dabook-logo{
    height: 60px;
}
</style>
