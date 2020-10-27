<template>
  <div class="">
    <q-btn size="sm" unelevated dense round icon="ion-create" color="grey-6" text-color="white" @click="alert = !alert" />
    <q-dialog v-model="alert">
      <q-card class="">
        <div class="row">
          <q-space />
          <q-icon name="ion-ios-close" color="red" size="lg" class="cursor-pointer" @click="alert = !alert" />
        </div>
        <q-card-section class="text-blue text-bold row">
          <div class="col">
            <div class="text-h5" >Edit Personal Information</div>
          </div>
          <q-space />
          <q-avatar rounded size="100px" color="red" text-color="white" icon="directions" class="q-mr-lg" />
        </q-card-section>
        <q-card-section class="q-py-xs">
          <div>
            <label for="first">Full Name</label>
            <q-input dense name="first" outlined color="secondary" v-model="form.name" :style="itemStyle" >
              <template v-slot:prepend>
                <q-icon name="ion-person" color="secondary" />
              </template>
            </q-input>
          </div>
        </q-card-section>
        <q-card-section class="row q-py-xs">
          <div class="col-md-6 col-xs-12 col-sm-12 q-pa-xs">
            <label for="address">Address</label>
            <q-input dense name="address" outlined color="secondary" v-model="form.address" :style="itemStyle" >
              <template v-slot:prepend>
                <q-icon name="room" color="secondary" />
              </template>
            </q-input>

          </div>
         <div class="col-md-3 col-xs-12 col-sm-12 q-pa-xs">
           <label for="address" class="text-white">Address</label>
            <q-input  dense name="address" outlined color="secondary" v-model="state" :style="itemStyle" >
              <template v-slot:append>
                <q-btn flat round dense  color="secondary" icon="ion-arrow-dropdown" />
              </template>
              <q-menu fit>
                <q-list style="min-width: 100px">
                  <q-item v-for="(item, index) in options1" :key="index" clickable @click="status = item" v-close-popup>
                  <q-item-section>{{item}}</q-item-section>
                  </q-item>
                <q-separator />

                </q-list>
              </q-menu>
            </q-input>
         </div>
          <div class="col-md-3 col-xs-12 col-sm-12 q-pa-xs">
            <label for="address" class="text-white">Address</label>
            <q-input dense name="address" outlined color="secondary" v-model="city" :style="itemStyle" >
              <template v-slot:append>
                <q-btn flat round dense  color="secondary" icon="ion-arrow-dropdown" />
              </template>
              <q-menu fit>
                <q-list style="min-width: 100px">
                  <q-item v-for="(item, index) in options" :key="index" clickable @click="status = item" v-close-popup>
                  <q-item-section>{{item}}</q-item-section>
                  </q-item>
                <q-separator />

                </q-list>
              </q-menu>
            </q-input>
          </div>

        </q-card-section>
        <q-card-section class="row q-py-xs">
          <div class="col-md-6 col-xs-12 col-sm-12 q-pa-xs">
            <label for="email">Email</label>
            <q-input dense name="email" outlined color="secondary" v-model="form.email" :style="itemStyle" >
              <template v-slot:prepend>
                <q-icon name="mail" color="secondary" />
              </template>
            </q-input>

          </div>
          <div class="col-md-6 col-xs-12 col-sm-12 q-pa-xs">
            <label for="phone" >Phone Number</label>
            <q-input dense name="phone" outlined color="secondary" v-model="form.phone" :style="itemStyle" >
               <template v-slot:prepend>
                <div><q-icon name="call" color="secondary" /> <span class="text-caption">+234</span> </div>
              </template>
            </q-input>
          </div>

        </q-card-section>
        <q-card-actions vertical align="center">
          <q-btn unelevated no-caps color="secondary" class="full-width" :style="{maxWidth:'50%'}" label="Update" @click="updatePersonal()" />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<style>
</style>

<script>
// import userTab from '../common/userTab'
export default {
  name: 'userCard',
  components:{
    // userTab
  },
  data() {
    return {
      alert:false,
      userInvitee:false,
      state:'State',
      city:'City',
      itemStyle:{
        border:'1px #44099F solid',
        borderRadius: '5px'
      },
      form:{
        name: '',
        address:'',
        email:'',
        phone:'',
      },
      options1:[
        'lagos', 'Abuja', 'portharcourt', 'Ibadan'
      ],
      options:[
        'lagos', 'FCT', 'rivers', 'Oyo'
      ]
    }
  },
  methods: {
    updatePersonal(){
      
    }
  },

}
</script>
