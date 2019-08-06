<template>
  <div class="footer">
    <div class="p-0 m-0">
      <footer class="footer footer-default text-left">
        <div class="container">
          <div class="row mb-2">
            <div class="col-lg-3 col-md-6 col-sm-12 text-left">
              <div class="row pt-2">
                <div class="col-6">
                  <img class="footer-logo" src="/img/main_logo_text.png" alt />
                </div>
                <div class="col-6">
                  <img class="footer-logo" src="/img/logo dabook.png" alt />
                </div>
              </div>
              <div class="row">
               <DefaultContactFormComponent :isTitle="false" class="w-100"></DefaultContactFormComponent>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <h4>Contact</h4>
              <ul class="d-flex flex-column font-nomal">
                <li>
                  <span>
                    <i class="fas fa-map-marker-alt mr-2"></i>Lot 118, TT3, My Dinh 1, Nam Tu Liem,
                    Hanoi
                  </span>
                </li>
                <li class="text-danger">
                  <span>
                    <i class="fab fa-hotjar mr-2"></i> 19001542
                  </span>
                </li>

                <li>
                  <span>
                    <i class="fas fa-phone mr-2"></i>0243-562-3777/778
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-fax mr-2"></i>0243-562-3772
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-envelope mr-2"></i> contact@daiminhtravel.com
                  </span>
                </li>
                <li>
                  <ul class="footer-social">
                    <li>
                      <a href="#">
                        <img src="/img/social/kakao.png" alt />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/social/facebook.png" alt />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/social/skype.png" alt />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/social/twitter.png" alt />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/social/zalo.png" alt />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <hr />
              <h4>Addition Infomation</h4>
              <ul class="d-flex flex-column">
                <li>
                  <a href="#">
                    <span >Business Licience :0101472382</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>International Tour Opertor Licience: 01-035/2015/TCDL-GPLHQT</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <h4>Our partner</h4>
              <div class="d-flex justify-content-start align-items-center flex-wrap">
                <div class="card m-1 w-30 flex-grow-1 p-1">
                  <img
                    class="card-img-top img-retange"
                    src="/img/partner/Vinpearl.jpg"
                    alt="Card image cap"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Vinpearl"
                  />
                </div>
                <div class="card m-1 w-30 flex-grow-1 p-1">
                  <img
                    class="card-img-top img-retange"
                    src="/img/partner/flc.png"
                    alt="Card image cap"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="FLC"
                  />
                </div>
                <div class="card m-1 w-30 flex-grow-1 p-1">
                  <img
                    class="card-img-top img-retange"
                    src="/img/partner/hera.jpg"
                    alt="Card image cap"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Hera Cruise"
                  />
                </div>
                <div class="card m-1 w-30 flex-grow-1 p-1">
                  <img
                    class="card-img-top img-retange"
                    src="/img/partner/heritage.png"
                    alt="Card image cap"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Heritage Line"
                  />
                </div>
                <div class="card m-1 w-30 flex-grow-1 p-1">
                  <img
                    class="card-img-top img-retange"
                    src="/img/partner/lotte.png"
                    alt="Card image cap"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Lotte"
                  />
                </div>
                <div class="card m-1 w-30 flex-grow-1 p-1">
                  <img
                    class="card-img-top img-retange"
                    src="/img/partner/Paradise.jpg"
                    alt="Card image cap"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Paradise Cruise"
                  />
                </div>
                <div class="card m-1 w-30 flex-grow-1 p-1">
                  <img
                    class="card-img-top img-retange"
                    src="/img/partner/Sheraton.png"
                    alt="Card image cap"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Sheraton"
                  />
                </div>
                </div>
              <hr />
              <h4>Service</h4>
              <ul class="d-flex flex-column">
                <li>
                  <a href="service/travelservice.html">Travel</a>
                </li>
                <li>
                  <a href="service/visaservice.html">Visa</a>
                </li>
                <li>
                  <a href="service/lawandinvest.html">Legal & Investment Consultancy</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <h4>Certificate</h4>
              <div class="d-flex flex-sm-row align-items-start flex-wrap">
                <div class="card m-1 w-30 flex-grow-1 p-1">
                  <img class="card-img-top" src="/img/certificate/iata.jpg" alt="Card image cap" />
                </div>
                <div class="card m-1 w-30 flex-grow-1 p-1">
                  <img
                    class="card-img-top"
                    src="/img/certificate/thongbao_bocongthuong.png"
                    alt="Card image cap"
                  />
                </div>
                <div class="card m-1 w-30 flex-grow-1 p-1">
                  <img
                    class="card-img-top"
                    src="/img/certificate/dangki_bocongthuong.png"
                    alt="Card image cap"
                  />
                </div>
                <div class="card m-1 w-30 flex-grow-1 p-1">
                  <img class="card-img-top" src="/img/certificate/DMCA.png" alt="Card image cap" />
                </div>
                <div class="card m-1 w-30 flex-grow-1 p-1">
                  <img
                    class="card-img-top"
                    src="/img/certificate/Norton-Mobile-Security-Logo.jpg"
                    alt="Card image cap"
                  />
                </div>
                <div class="card m-1 w-30 flex-grow-1 p-1">
                  <img class="card-img-top" src="/img/certificate/tcdl.jpg" alt="Card image cap" />
                </div>
              </div>
              <hr />
              <h4>Payment</h4>
             <PaymentComponent></PaymentComponent>
            </div>
          </div>
          <div class="row border-top pt-2">
            <div class="col-12 col-md-6 text-center text-white">
              &copy;2019, made with
              <i class="far fa-heart"></i> by
              <a href="https://www.dabook.vn/" target="blank">DaiMinh</a> for a better travel.
            </div>
            <div class="col-12 col-md-6 text-center footer-policy">
              <ul>
                <li>
                  <a href="function/legal.html">Privacy Policy |</a>
                </li>
                <li>
                  <a href="function/legal.html">Terms of Use |</a>
                </li>
                <li>
                  <a href="function/contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <!-- <div class="widget-component">
        <ul class="d-flex flex-column">
          <li class="special-margin">
            <a class="btn btn-info btn-fab btn-round" href="tel:19001542">
             <font-awesome-icon
                        icon="phone"
                        class="text-center text-08"
                      />
            </a>
          </li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<script>
import PaymentComponent from '@/components/PaymentComponent.vue';
import DefaultContactFormComponent from '@/components/DefaultContactFormComponent.vue'

export default {
  components: {
    PaymentComponent,
    DefaultContactFormComponent,
  },
  name: 'FooterComponent',
  props: {
    msg: String,
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer{
  background-color:#102344;
}
.footer p,
    .footer a,
    .footer span {
    font-size: 12px;
    text-transform: none;
    color: #FFF;
    }
    .footer h4 {
    font-size: 18px;
    }
    footer ul li {
    padding: 2px;
    }
    footer ul li a {
    padding: 0px;
    }
    .footer{
        font-size: 14px;
    }
    .footer h4 {
    color: #3c4858;
    font-weight: bold;
    }
    .footer-logo {
    width: 95%;
    height: auto;
    }
    .small-logo{
        height: 20px;
        width: auto;
    }
    .footer .card {
    overflow: hidden;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .footer h4{
        color: #FFFFFF !important;
        font-size: 0.9rem !important;
    }

    .footer-social img{
        width: 30px !important;
        height: 30px!important;
        border-radius: 50%!important;
    }
    .footer-social img:hover{
        box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.14);
    }
    .font-nomal{
      font-weight: normal !important;
    }
</style>
