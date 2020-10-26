<template>
  <div class="">
    <q-item clickable v-if="!userInvitee" @click="userInvitee = !userInvitee">
      <q-item-section top avatar>
        <q-avatar text-color="secondary" icon="ion-lock" />
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-secondary text-italic" :style="{textDecoration: 'underline'}">Change Password</q-item-label>
      </q-item-section>
    </q-item>
    <q-card flat class="full-width bg-transparent" v-if="userInvitee">
      <q-card-section class="q-py-xs q-pl-lg">
        <q-input dense color="secondary" v-model="password.old" placeholder="Old Password" >
          <template v-slot:before>
            <q-icon name="ion-lock" color="secondary" size="sm" class="q-pr-lg" />
          </template>
        </q-input>
      </q-card-section>
      <q-card-section class="q-py-xs q-pl-lg">
        <q-input dense color="secondary" v-model="password.new" placeholder="New Password" >
          <template v-slot:before>
            <q-icon name="ion-lock" color="secondary" size="sm" class="q-pr-lg" />
          </template>
        </q-input>
      </q-card-section>
      <q-card-section class="q-py-xs q-pl-lg">
        <q-input dense color="secondary" v-model="password.confirm" placeholder="Confirm Password" >
          <template v-slot:before>
            <q-icon name="ion-lock" color="secondary" size="sm" class="q-pr-lg" />
          </template>
        </q-input>
      </q-card-section>
      <q-card-actions vertical align="right">
        <q-btn no-caps size="sm" color="blue-9" label="Update Password" />
      </q-card-actions>
    </q-card>

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
      userInvitee:false,
      password:{
        old:'',
        new:'',
        confirm:''
      }
    }
  },

}
</script>
