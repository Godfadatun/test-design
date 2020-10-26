<template>
  <div class="">
    <q-card class="bg-transparent full-width" flat>
      <q-card-section class="text-blue text-bold row">
        <q-avatar rounded size="100px" class="q-mr-lg" >
          <img :src="content.src" alt="">
        </q-avatar>
        <div class="col">
          <q-toolbar class="bg-transparent full-width">
            <q-space />
            <!-- <q-btn v-if="userInvitee" flat dense round icon="ion-create" color="info" text-color="white" @click="userInvitee = !userInvitee" /> -->
            <personalBtn />

          </q-toolbar>
          <div :class="$q.screen.gt.sm?'text-h5 text-secondary':'text-h5 text-secondary'" :style="{textDecoration: 'underline'}">{{content.name}}</div>
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
        <password />
      </q-card-section>
    </q-card>
  </div>
</template>

<style>
</style>

<script>
import personalBtn from '../common/personalBtn'
import password from './passwordCard'
export default {
  name: 'userProfile',
  props:['content'],
  components:{
    personalBtn,
    password
  },
  data() {
    return {
      userInvitee:false
    }
  },
  computed: {
    dprofile(){return this.$store.getters['Auth/profile']}
  },

}
</script>
