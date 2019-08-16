<template>
  <div class="hello" v-if="componentLoaded==true">
    <div class="d-flex flex-sm-row align-items-start flex-wrap">
      <div
        class="card m-1 w-30 flex-grow-1 p-1 cursor-pointer"
        data-toggle="modal"
        data-target="#bankModal"
        @click="selectPayment(payment)"
        v-for="(payment,ipayment) in payments"
        v-bind:key="ipayment"
      >
        <img
          class="card-img-top"
          v-bind:src="payment.bankImages.length>0?`/${payment.bankImages[0].filePath}`:'/img/defaultloading.gif'"
          v-bind:alt="payment.bankImages[0].fileName"
        />
      </div>
    </div>
    <div
      class="modal fade"
      id="bankModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="bankModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header border-bottom pb-3 text-left">
            <h6 class="modal-title" id="bankModalLabel">
              <span class="badge badge-success">{{selectedPayment.bankCode}}</span>{{$t('ppayment_title')}}
            </h6>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-left">
            <p>
              <b>{{$t('ppayment_bankowner')}} :</b>
              {{selectedPayment.bankOwner}}
            </p>
            <p>
              <b>{{$t('ppayment_bankaccount')}} :</b>
              {{selectedPayment.bankAccount}}
            </p>
            <p>
              <b>{{$t('ppayment_banklocation')}} :</b>
              {{selectedPayment.bankLocation}}
            </p>
          </div>
          <div class="modal-footer">
            <input
              type="text"
              class="invisible"
              aria-label="Username"
              id="ihidden-input"
              v-model="selectedPayment.bankAccount"
            />
            <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">{{$t('ppayment_btn_close')}}</button>
            <button
              type="button"
              class="btn btn-primary btn-sm btn-info"
              @click="bankCopy"
            >{{$t('ppayment_btn_bankcopy')}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from "@/lang/i18n";
import PaymentService from '@/api/PaymentService';

function randomArray(array) {
  const array2 = [];
  while (array.length !== 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    array2.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return array2;
}
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      payments: [],
      selectedPayment: {},
      componentLoaded: false,
    };
  },
  mounted() {
    this.initial();
  },
  methods: {
    async initial() {
      this.$store.commit('showHideLoading', true);
      const response = await PaymentService.getAllPayment();
      this.payments = randomArray(response.data);
      this.$store.commit('showHideLoading', false);
      this.componentLoaded = true
    },
    selectPayment(item) {
      this.selectedPayment = item;
    },
    bankCopy() {},
  },
  computed: {
    paymentByLang () {
      if (this.componentLoaded === false) {
        return;
      }
      this.payments.forEach(element => {
        element.bankIntros.forEach(area => {
          if (area.lang.toUpperCase() === i18n.locale.toUpperCase()) {
            element.bankName = area.bankName;
            element.bankOwner= area.bankOwner;
            element.bankLocation= area.bankLocation;
          }
        });
      });
      return this.mices;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
