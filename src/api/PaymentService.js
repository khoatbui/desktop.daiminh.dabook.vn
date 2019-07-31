import Api from '@/api/Api'

var paymenService = {
  getAllPayment () {
    return Api().get('payment')
  },
  getTravelStyleById (parram) {
    return Api().get('travelstyle/m/gettravelstylebyid/'+parram)
  }
}

export default paymenService
