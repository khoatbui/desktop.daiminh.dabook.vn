//src/components/Navbar.vue
<template>
  <div>
    <div class="scroll-ngang">
      <label class="select-container" v-for="(item,i) in data" v-bind:key="i">
        <input
          class="checkbox-group-input"
          type="radio"
          :name="name"
          @click="$emit('select', item)"
        />
        <span class="border-radius-100 scroll-select-item text-sm checkmark">
          {{item.text}}
          <font-awesome-icon class="text-xs" :icon="icon" v-if="item.isIcon" />
        </span>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data", "name", "icon", "currentItem", "keypr"],
  name: "CheckBoxGroup",
  data() {
    return {
      selectedItem: ""
    };
  },
  created() {},
  methods: {},
  computed: {
    select() {
    },
    getNestedObject(nestedObj, pathArr) {
      return pathArr.reduce(
        (obj, key) => (obj && obj[key] !== "undefined" ? obj[key] : undefined),
        nestedObj
      );
    }
  }
};
</script>
<style lang="scss" scoped>
/* The container */
.select-container {
  display: inline;
  position: relative;
  cursor: pointer;
  margin: 1px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.select-container input {
  position: absolute !important;
  opacity: 0 !important;
  cursor: pointer !important;
}

/* Create a custom radio button */
.checkmark {
  position: relative;
  top: 0;
  left: 0;
  background-color: #eee;
  border-radius: 50%;
}

/* When the radio button is checked, add a blue background */
.select-container input:checked ~ .checkmark {
  background-color: #2196f3;
  color: #ffffff;
}
.checkbox-group-input {
  opacity: 0 !important;
}
</style>
