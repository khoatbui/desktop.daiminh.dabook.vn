<template>
  <div class="defaultcontactform">
    <div
      class="row w-100 p-0 m-0 mb-2 d-flex justify-content-between align-items-center"
      v-if="isTitle"
    >
      <span class="text-08 text-danger font-weight-bold">{{$t('default_contact_form_title')}}</span>
    </div>
    <div class="row m-0 p-0 d-flex flex-column justify-content-around">
      <div class="col-12 py-1">
        <label class="text-06 mb-1" for="iname">{{$t('default_contact_form_yourname')}}</label>
        <input class="custom-form-input" type="text" name="iname" v-model="customer.fullName" />
      </div>
      <div class="col-12 py-1">
        <label class="text-06 mb-1" for="imail">{{$t('default_contact_form_youremail')}}</label>
        <input class="custom-form-input" type="text" name="imail" v-model="customer.email" />
      </div>
      <div class="col-12 py-1">
        <label class="text-06 mb-1" for="iphone">{{$t('default_contact_form_yourphone')}}</label>
        <input class="custom-form-input" type="text" name="iphone" v-model="customer.phone" />
      </div>
      <div class="col-12 py-1">
        <label class="text-06 mb-1" for="imessage">{{$t('default_contact_form_yourrequest')}}</label>
        <textarea class="custom-form-input" type="text" name="imessage" v-model="customer.message"></textarea>
      </div>
      <div class="col-12 py-1 text-right">
        <button
          class="btn btn-sm btn-info border-radius-100"
          @click="sendMessage"
        >{{$t('default_contact_form_btnsendrequest')}}</button>
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
import lazyLoadComponent from "@/utils/lazy-load-component";
import SkeletonBox from "@/components/SkeletonBox.vue";
import MailService from "@/api/MailService";
export default {
  name: "DefaultContactFormComponent",
  props: {
    menuCode: String,
    isTitle: true
  },
  components: {
    ToastComponent: lazyLoadComponent({
      componentFactory: () => import("@/components/ToastComponent.vue"),
      loading: SkeletonBox
    })
  },
  data() {
    return {
      customer: {
        fullName: "",
        email: "",
        phone: "",
        message: "",
        requestType:"GENERAL"
      }
    };
  },
  mounted() {},
  methods: {
    sendMessage() {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          this.customer.email
        )
      ) {
        if (this.validateInput()) {
          const response = MailService.sendMailWithGeneralQuestion(
            this.customer
          );
          this.$vs.notify({
            title: "Thank you",
            text: "We will call you back",
            color: "primary",
            position:'top-right'
          });
        } else {
          this.$vs.notify({
            title: "Opp!",
            text: "Please input you name, phone, email and message",
            color: "warning",
            position:'top-right'
          });
        }
      } else {
        this.$vs.notify({
          title: "Opp!",
          text: "Please input correct email",
          color: "warning",
          position:'top-right'
        });
      }
    },
    validateInput() {
      if (
        this.customer.fullName.length > 0 &&
        (this.customer.email.length > 0 || this.customer.phone.length > 0) &&
        this.customer.message.length > 0
      ) {
        return true;
      } else {
        return false;
      }
    }
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

