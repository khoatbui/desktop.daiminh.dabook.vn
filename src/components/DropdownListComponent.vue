<template>
  <div class="dropdown-list" v-if="data.length>0">
    <div class="dropdown">
      <button
        class="btn custom-btn-md w-100 text-08 hidden-outof-text custom-btn-outline-default dropdown-toggle text-nomal d-flex justify-content-between align-items-center"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      ><span>{{selectItem.text}}</span>
        <font-awesome-icon icon="chevron-down" class="text-center text-1" />
      </button>
      <div class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item cursor-pointer" v-for="(item,i) in data" v-bind:key="'saf'+i" @click="selectAItem(item);$emit('select', item)">{{item.text}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownListComponent",
  props: {
    label: String,
    data:Array,
  },
  data() {
    return {
        selectItem:{
            text:this.label,
            value:""
        },
    };
  },
  methods: {
      selectAItem(item) {
          this.selectItem =item;
      }
  }
};
</script>

<style scoped lang="scss">
.dropdown-toggle::after{
    display: none !important;
}
.btn:active, .btn.active, .open>.btn.dropdown-toggle, .show>.btn.dropdown-toggle, .btn.btn-default:active, .btn.btn-default.active, .open>.btn.btn-default.dropdown-toggle, .show>.btn.btn-default.dropdown-toggle {
    color: #333 !important;
    box-shadow: none !important;
}
.dropdown-menu{
    position: absolute;
    z-index: 100;
}
.dropdown-menu .dropdown-item:hover, .dropdown-menu .dropdown-item:focus, .dropdown-menu a:hover, .dropdown-menu a:focus, .dropdown-menu a:active {
    box-shadow:none;
    background-color: #FFF;
    color: #333;
}
.btn:hover {
    color: #333 !important;
}
.btn, .btn.btn-default {
    box-shadow:none;
}
</style>
