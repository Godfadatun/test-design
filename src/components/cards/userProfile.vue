<template>
  <div class="">
    <q-card class="bg-transparent full-width" flat>
      <q-card-section class="text-blue text-bold row">
        <q-avatar rounded size="100px" class="q-mr-lg" >
          <img :src="dprofile.image_url" alt="">
        </q-avatar>
        <div class="col">
          <q-toolbar class="bg-transparent full-width">
            <q-space />
            <personalBtn />
          </q-toolbar>
          <div :class="$q.screen.gt.sm?'text-h5 text-secondary':'text-h5 text-secondary'" :style="{textDecoration: 'underline'}">{{dprofile.first_name+" "+dprofile.last_name}}</div>
        </div>
      </q-card-section>
      <q-card-section>
        <q-item >
          <q-item-section top avatar>
            <q-avatar text-color="secondary" icon="mail" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{dprofile.email}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item >
          <q-item-section top avatar>
            <q-avatar text-color="secondary" icon="call" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{dprofile.phone}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item >
          <q-item-section top avatar>
            <q-avatar text-color="secondary" icon="room" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{dprofile.address}}</q-item-label>
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
  components:{
    personalBtn,
    password
  },
  data() {
    return {
      userInvitee:false,
    }
  },
  computed: {
    dprofile(){return this.$store.getters['Auth/profile']}
  },

}
</script>
