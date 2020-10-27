<template>
  <div class="">
    <q-card class="">
      <div class="row">
        <q-space />
        <q-icon name="ion-ios-close" color="red" size="lg" class="cursor-pointer" />
      </div>
      <q-card-section class="text-blue text-bold row">
        <div class="col">
          <div class="text-h4 text-secondary" :style="{textDecoration: 'underline'}">{{content.name}}</div>
        </div>
        <q-avatar rounded size="100px" color="red" text-color="white" icon="directions" class="q-mr-lg" />
      </q-card-section>
      <q-card-section>
        <div>
          <label for="first">first</label>
          <q-input  name="first" square outlined v-model="text" >
            <template v-slot:prepend>
              <q-icon name="ion-person" color="secondary" />
            </template>
          </q-input>
        </div>
      </q-card-section>
      <q-card-section>
        <div>
          <label for="Address">Address</label>
          <q-input  name="first" outlined v-model="text" :style="itemStyle" >
            <template v-slot:prepend>
              <q-icon name="room" color="secondary" />
            </template>
          </q-input>
        </div>
      </q-card-section>
    </q-card>

  </div>
</template>

<style>
</style>

<script>
// import dashboardTop from '../common/dashboardTop'
// import userTab from '../common/userTab'
import personalBtn from '../common/personalBtn'
export default {
  name: 'userProfile',
  props:['content'],
  components:{
    // userTab,
    // dashboardTop,
    // inviteUser,
    personalBtn
  },
  data() {
    return {
      userInvitee:false,
      itemStyle:{
        border:'1px #44099F solid'
      }
    }
  },

}
</script>
