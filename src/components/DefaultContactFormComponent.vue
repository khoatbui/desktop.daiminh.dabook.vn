<template>
  <div class="defaultcontactform">
    <div class="row w-100 p-0 m-0 mb-2 d-flex justify-content-between align-items-center" v-if="isTitle">
      <span class="text-08 text-danger font-weight-bold">Any question, contact us</span>
    </div>
    <div class="row m-0 p-0 d-flex flex-column justify-content-around">
      <div class="col-12 py-1">
        <label class="text-06 mb-1" for="iname">Your name</label>
        <input class="custom-form-input" type="text" name="iname" v-model="customInfo.fullName"/>
      </div>
      <div class="col-12 py-1">
        <label class="text-06 mb-1" for="imail">Your email</label>
        <input class="custom-form-input" type="text" name="imail" v-model="customInfo.email" />
      </div>
      <div class="col-12 py-1">
        <label class="text-06 mb-1" for="iphone">Your phone</label>
        <input class="custom-form-input" type="text" name="iphone" v-model="customInfo.phone" />
      </div>
      <div class="col-12 py-1">
        <label class="text-06 mb-1" for="imessage">Your request</label>
        <textarea class="custom-form-input" type="text" name="imessage" v-model="customInfo.message"></textarea>
      </div>
      <div class="col-12 py-1 text-right">
        <button class="btn btn-sm btn-danger border-radius-100">Send request</button>
      </div>
      <div class="col-12 py-1 text-right">
        <small class="text-06">
          <font-awesome-icon icon="headset" class="text-08 text-center" />Hotline
          <span class="text-danger text-08 font-weight-bold">19001542</span> 24/7
        </small>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import lazyLoadComponent from '@/utils/lazy-load-component'
import SkeletonBox from '@/components/SkeletonBox.vue';
export default {
  name: "DefaultContactFormComponent",
  props: {
      menuCode: String,
      isTitle:true,
  },
  components: {
    ToastComponent:lazyLoadComponent({
      componentFactory: () => import('@/components/ToastComponent.vue'),
      loading: SkeletonBox,
    })
  },
  data() {
    return {
      customInfo: {
          fullName: '',
          email: '',
          password: '',
          phone : '',
          message: '',
      }
    };
  },
  mounted() {
  },
  methods: {
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

