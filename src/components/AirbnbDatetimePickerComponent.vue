<template>
    <div class="datepicker-trigger w-100">
      <div class="d-flex justify-content-start align-items-center p-0 m-0 ">
      <font-awesome-icon icon="calendar" class="text-center mr-2 text-x1 text-muted"/>
      <input
        type="text"
        id="datepicker-trigger"
        class="air-dateinput w-100"
        :class="customclass"
        placeholder="Select dates"
        :value="formatDates(date.dateOne, date.dateTwo)"
      >
      </div>
      <AirbnbStyleDatepicker
        :trigger-element-id="'datepicker-trigger'"
        :mode="'range'"
        :fullscreen-mobile="true"
        :date-one="date.dateOne"
        :date-two="date.dateTwo"
        @date-one-selected="val => { date.dateOne = val;}"
        @date-two-selected="val => { date.dateTwo = val;}"
        @apply="sendToParent"
      />
    </div>
</template>

<script>
import format from 'date-fns/format'
export default {
  name: 'AirbnbDateTimePickerComponent',
  props:{customclass:''},
  data() {
    return {
      dateFormat: 'D MMM',
      date:{
        dateOne: '',
      dateTwo: ''
      }
    }
  },
  methods: {
    formatDates(dateOne, dateTwo) {
      let formattedDates = ''
      if (dateOne) {
        formattedDates = format(dateOne, this.dateFormat)
      }
      if (dateTwo) {
        formattedDates += ' - ' + format(dateTwo, this.dateFormat)
      }
      return formattedDates
    },
    sendToParent() {
      this.$emit('returnData',this.date);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.parent-absolute{
    position: relative;
}
.center-absolute{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
}
.video-btn{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #FFFFFF;
    color: #205072 !important;
    border: none;
}
.video-btn:nth-child(1){
    font-size: 2rem;
}
.video-btn:hover{
    opacity: 0.5;
}
#videoModal{
    background-color: rgba(32, 80, 114,0.5);
}
#videoModal #video{
    height: 70vh;
}
</style>
