<template>
  <div class="person-plus-component">
    <div class="row m-0 p-0 d-flex justify-content-between align-items-center">
      <div class="col-4 text-left p-0 m-0">
        <button class="btn-plus" :disabled="person.qty==0" @click="minusPerson(personInput)">
          <font-awesome-icon icon="minus" class="text-center text-1" />
        </button>
      </div>
      <div class="col-4 p-1 m-0">
        <input class="custom-form-input text-center text-muted" v-model="personInput.qty" />
      </div>
      <div class="col-4 text-right p-0 m-0">
        <button class="btn-plus" @click="plusPerson(personInput)">
          <font-awesome-icon icon="plus" class="text-center text-1" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

export default {
  name: "PersonPlusMinusComponent",
  props: {
    person: {}
  },
  components: {},
  data() {
    return {
      personInput: this.person
    };
  },
  mounted() {
    console.log(this.personInput);
  },
  methods: {
    plusPerson(person) {
      person.qty++;
    },
    minusPerson(person) {
      person.qty--;
    }
  }
};
</script>
<style scoped>
.custom-form-input {
  padding: 1px 8px !important;
  border-radius: 3px;
}
</style>

