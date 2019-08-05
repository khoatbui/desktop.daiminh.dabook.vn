<template>
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="" class="rounded mr-2" alt="..." />
      <strong class="mr-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body text-06">Hello, world! This is a toast message.</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ToastComponent",
  props: {
    menuCode: String
  },
  components: {},
  data() {
    return {
      customInfo: {
        fullName: "",
        email: "",
        password: "",
        phone: "",
        message: ""
      }
    };
  },
  mounted() {},
  methods: {
    sendRequest() {}
  }
};
</script>
<style scoped lang="scss">
.custom-form-input {
  padding: 3px 5px;
  border-radius: 2px;
  border: 0.5px solid #d2d2d2;
  width: 100%;
  margin: 0;
  font-size: 0.8rem;
}
textarea.custom-form-input {
  height: auto;
}
</style>

