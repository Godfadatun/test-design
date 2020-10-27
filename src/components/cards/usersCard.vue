<template>
  <div class="">
    <q-toolbar class="bg-transparent">
      <q-space />
      <q-btn v-if="userInvitee" flat dense round icon="ion-ios-close-circle" color="red" @click="userInvitee = !userInvitee" />
      <div v-else class="row ">
        <q-btn size="sm" color="blue-9 col" no-caps icon-right="ion-ios-mail" class="q-mr-md"  >
          <div class="text-caption q-pr-sm">Resend Invitations</div>
        </q-btn>
        <q-btn size="sm" color="blue-9" no-caps icon-right="ion-add-circle" @click="userInvitee = !userInvitee" >
          <div class="text-caption q-pr-sm">Invite User</div>
        </q-btn>
      </div>
    </q-toolbar>
    <q-card class="my-card">
      <q-card-section class="text-blue text-bold">
        Users
      </q-card-section>
      <q-card-section>
        <inviteUser v-if="userInvitee"  :role="role[0]" @invitee="userInvitee = !userInvitee" />
        <userTab class="full-width" v-for="(item, index) in content" :key="index" :content="item" :role="role" />
      </q-card-section>
    </q-card>
  </div>
</template>

<style>
</style>

<script>
// import dashboardTop from '../common/dashboardTop'
import userTab from '../common/userTab'
import inviteUser from '../common/inviteUser'
export default {
  name: 'userCard',
  props:['content'],
  components:{
    userTab,
    // dashboardTop,
    inviteUser
  },
  data() {
    return {
      userInvitee:false
    }
  },
  computed:{
    role(){return this.$store.getters['Auth/role']}
  }
}
</script>
