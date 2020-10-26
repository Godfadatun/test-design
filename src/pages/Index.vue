<template>
  <q-page class="column justify-center bg-warning" padding>

    <!-- <Main v-if="theroute == 'home'"/> -->
    <!-- <Home v-if="theroute == 'coming_soon'"/> -->
    <!-- <dashboardTop /> -->
    <div class="full-width row">
      <div class="q-pa-xs col-md-4 col-sm-12 col-xs-12">
        <left :content="profile"/>
      </div>
      <div class="q-pa-xs col-md-8 col-sm-12 col-xs-12">
        <right class="full-width" :content="subUsers" />
      </div>
    </div>

</q-page>

</template>

<style>
</style>

<script>
// import Home from '../components/index'
// import Main from '../components/Home'
// import dashboardTop from '../components/common/dashboardTop'
import right from '../components/cards/usersCard'
import left from '../components/cards/userProfile'
export default {
  name: 'HelloWorld',
  components: {
    // Home,
    // Main,
    right,
    left
    // dashboardTop
  },
  data() {
    return {
      profile:{
        src:this.$store.getters['Auth/profile'].image_url,
        name:this.$store.getters['Auth/profile'].first_name+" "+this.$store.getters['Auth/profile'].last_name,
        items:[
          {icon:'mail', content: this.$store.getters['Auth/profile'].email},
          {icon:'call', content: this.$store.getters['Auth/profile'].phone},
          {icon:'room', content: this.$store.getters['Auth/profile'].address},
        ]
      }
    }
  },
  computed: {
    theroute(){return this.$route.name },
    dprofile(){return this.$store.getters['Auth/profile']},
    subUsers(){return this.$store.getters['Auth/profile'].sub_users}
  },
}
</script>
