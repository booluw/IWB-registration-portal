<template>
  <section class="modal-container">
    <svg class="svg">
      <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
        <path d="M1,0.788 Q0.979,1,0.717,1 Q0.455,1,0.228,0.926 Q0,0.811,0.014,0.557 Q0.027,0.304,0.235,0.152 Q0.442,0,0.706,0.043 Q0.971,0.087,0.998,0.319 Q1,0.551,1,0.788"></path>
      </clipPath>
    </svg>
    <div class="modal">
      <header class="modal__header">
        <a href="#" @click.prevent="$emit('close')">
          <img src="@/assets/img/chevron-left.svg" class="modal__icon" />
        </a>
      </header>
      <div class="row m-0 justfy-content-between">
        <div class="col-md-4">
          <div class="modal__img"></div>
        </div>
        <div class="col-md-3"></div>
        <div class="col-md-5">
          <div v-if="alert.type">
            <div :class="`alert alert--${alert.type}`">
              <h3 class="alert__heading">{{ alert.heading }}</h3>
              <p class="alert__paragraph">
                {{ alert.message }}
              </p>
            </div>
            <div class="col-6" style="margin: 2rem auto;" id="ID">
              <img src="@/assets/img/qr-code.png" class="responsive-img"/>
              <img src="@/assets/img/event pass.png" class="responsive-img"/>
            </div>
            <div class="row m-0 justify-content-center">
              <div class="mb-5 col-10">
                <button class="btn form__btn" style="background: transparent;color:crimson;border: .2rem solid crimson;" @click="printCard">
                  Download Pass
                </button>
                <p class="paragraph" style="text-align: center;">
                  <b>One last thing</b>
                  Get access to resources and event updates. Click below to join our Telegram Channel.
                </p>
                <a href="https://t.me/IdeasWorthBillions" class="btn form__btn" style="text-align: center">
                  Telegram channel
                </a>
              </div>
            </div>
          </div>
          <form class="form" @submit.prevent="register()" v-if="alert.type !== 'success'">
            <label for="name" class="input-group">
              <span class="input-group__label">Full Name<b style="color: crimson;font-size: 2rem;">*</b></span>
              <input type="text" id="name" class="input-group__input" v-model="user.name" placeholder="John Doe" required/>
            </label>
            <label for="phone" class="input-group">
              <span class="input-group__label">Phone Number<b style="color: crimson;font-size: 2rem;">*</b></span>
              <input type="tel" id="phone" class="input-group__input" v-model="user.phone" placeholder="+234 700 332 9990 283" required />
            </label>
            <label for="email" class="input-group">
              <span class="input-group__label">Email<b style="color: crimson;font-size: 2rem;">*</b></span>
              <input type="email" id="email" class="input-group__input" v-model="user.mail" placeholder="johndoe@example.com" required />
            </label>
            <label class="input-group input-group--radio">
              <span class="input-group__label">Where would you be attending this event?<b style="color: crimson;font-size: 2rem;">*</b></span>
              <div class="d-flex mt-3">
                <label for="minna" class="input-group__radio">
                  <input type="radio" id="minna" v-model="user.location" value="Minna"/>
                  <span class="__radio"></span>
                  <span class="input-group__label">Minna</span>
                </label>
                <label for="online" class="input-group__radio">
                  <input type="radio" id="online" v-model="user.location" value="Online"/>
                  <span class="__radio"></span>
                  <span class="input-group__label">Online</span>
                </label>
              </div>
            </label>
            <label class="input-group input-group--radio">
              <span class="input-group__label">
                Select the options below for certificate of participation and conference souvenirs/materials. <br />
                <i>NB:</i> Acceleration Conference is FREE, paying for souvenirs/materials and certificate of participation is optional.
              </span>
              <div class="d-flex mt-3">
                <label for="swags" class="input-group__radio">
                  <input type="radio" id="swags" v-model="user.swag" value="all"/>
                  <span class="__radio"></span>
                  <span class="input-group__label">Souvenirs (T-Shirt, Jotter & Certificate)</span>
                </label>
                <label for="certificate" class="input-group__radio">
                  <input type="radio" id="certificate" v-model="user.swag" value="cert"/>
                  <span class="__radio"></span>
                  <span class="input-group__label">Certificate only</span>
                </label>
              </div>
            </label>

            <div v-if="!clicked" class="d-flex flex-column align-item-center">
              <a href="#" class="btn btn--no-shadow mb-4" v-if="user.swag" @click.prevent="user.swag = null">Clear Selection</a>
              <button type="submit" class="btn form__btn" v-if="price <= 0" :disabled="clicked">Register for free</button>
              <paystack
                type="button"
                class="btn form__btn"
                :disabled="clicked"
                v-else
                :paystackkey="paystack_key"
                :email="user.mail"
                :reference="reference"
                :callback="register"
                :close="onClosePayment"
                :embed="false"
                :channels="card"
                :amount="price*100"  
              >
                Pay NGN{{price}}
              </paystack>
            </div>
            <button class="btn form__btn" disabled v-else>Please wait ...</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import paystack from 'vue-paystack'

import FileSaver from 'file-saver';
import { saveAs } from 'file-saver';
import * as htmlToImage from 'html-to-image';
import { toBlob } from 'html-to-image';

export default {
  name: 'AppModal',
  components: {
    paystack
  },
  data() {
    return {
      user: {
        name: '',
        phone: '',
        mail: '',
        location: '',
        swags: null
      },
      clicked: false,
      card: ['card'],
      alert: {},
      paystack_key: 'pk_live_4ee636eb80b594d30f660e334871da0150043310'
    }
  },
  computed: {
    price() {
      let amount = 0
      if (this.user.swag === 'all') {
        amount = 4000
      }
      if (this.user.swag === 'cert') {
        amount = 1000
      }
      return amount
    },
    reference(){
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for( let i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }
  },
  methods: {
    ...mapActions(['registerUser']),
    register() {
      this.clicked = true
      this.registerUser(this.user).then(response => {
        this.clicked = false
        this.alert = {
          type: 'success',
          message: `You have successfully registered for the IWB Acceleration Conference 2021. Your reservation code is ${this.reference.substr(this.reference.length - 5)}`,
          heading: `Congratulations, ${this.user.name}.`
        }
      }).catch(error => {
        this.clicked = false
        this.alert = {
          type: 'error',
          message: error.message,
          heading: 'An Error occured'
        }
      })
    },
    onClosePayment() {
      this.alert = {
        type: 'error',
        message: 'Your payment has been cancelled. Please try again.',
        heading: 'Payment cancelled.'
      }
      this.clicked = false
    },
  printCard() {
    let node = document.getElementById('ID')

    htmlToImage.toBlob(node).then(function (blob) {
    FileSaver.saveAs(blob, `IWB-Ci2O-pass.png`)
    }).catch(function (error) {
      alert(`Something went wrong ${error}`)
    })
  }
  }
}
</script>
