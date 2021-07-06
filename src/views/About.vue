<template>
  <div class="m-5 py-5">
    <div style="margin: 20rem"></div>
    <div class="row flex-column m-0 m-5 justify-content-center align-items-center">
      <p style="text-align: center;">
        So far,&nbsp; <b>{{users.length}} attendees</b> &nbsp; have registered.
        <br />
        Click the button below to download the spreedsheet of all attendees.
      </p>
    </div>
    <div class="my-5"></div>
    <div class="row justify-content-center">
      <div class="col-md-3">
        <download-excel :data="users" name="#Ci2O-Data.xls" class="btn form__btn">
          Download Data
        </download-excel>
      </div>
    </div>
    <div style="margin: 20rem"></div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

  export default {
    name: 'AdminPage',
    data() {
      return {
        users: []
      }
    },
    methods: {
      ...mapActions(['fetchAll'])
    },
    mounted() {
      this.fetchAll().then(result => {
        this.users = result
      }).catch(error => {
        alert(error)
      })
    },
  }
</script>