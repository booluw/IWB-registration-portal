import Vue from 'vue'
import Vuex from 'vuex'

import firebase from 'firebase'
import '../firebase.config'
require('firebase/firestore')


Vue.use(Vuex)
var db = firebase.firestore()
window.db = db

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    registerUser({commit}, payload) {
      console.log('came this far')
      return new Promise((resolve, reject) => {
        db.collection('iwb').add({
          fullname: payload.name,
          email: payload.mail,
          location: payload.location,
          souvenirs: payload.swags,
          phone: payload.phone
        }).then(() => {
          resolve(`${payload.name} has been registered for #Ci2O successfully`)
        }).catch(error => {
          reject(error)
        })
      })
    },
    fetchAll() {
      return new Promise((resolve) => {
        let users = []
        db.collection('iwb').onSnapshot(querySnapshot => {
          querySnapshot.forEach((doc) => {
            users.push(doc.data())
          })
          resolve(users)
        })
      })
    }
  },
})
