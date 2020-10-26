<template>
  <div class="">
    <!-- <dashboardTop/> -->

    <q-card class="bg-transparent full-width" flat>
      <q-card-section class="text-blue text-bold row">
        <q-avatar rounded size="100px" color="red" text-color="white" icon="directions" class="q-mr-lg" />
        <div class="col">
          <q-toolbar class="bg-transparent full-width">
            <q-space />
            <!-- <q-btn v-if="userInvitee" flat dense round icon="ion-create" color="info" text-color="white" @click="userInvitee = !userInvitee" /> -->
            <personalBtn />

          </q-toolbar>
          <div class="text-h4 text-secondary" :style="{textDecoration: 'underline'}">{{content.name}}</div>
        </div>
      </q-card-section>
      <q-card-section>
        <q-item v-for="(item, index) in content.items" :key="index">
          <q-item-section top avatar>
            <q-avatar text-color="secondary" :icon="item.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{item.content}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-if="!userInvitee">
          <q-item-section top avatar>
            <q-avatar text-color="secondary" icon="ion-lock" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-secondary text-italic" :style="{textDecoration: 'underline'}">Change Password</q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>
      <q-card class="full-width">
      <q-card-section>
      test card
      </q-card-section>
      </q-card>

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
      userInvitee:false
    }
  },

}
</script>
