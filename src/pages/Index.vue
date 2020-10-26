<template>
  <q-page class="column justify-center bg-warning" padding>

    <!-- <Main v-if="theroute == 'home'"/> -->
    <!-- <Home v-if="theroute == 'coming_soon'"/> -->
    <!-- <dashboardTop /> -->
    <div class="full-width row">
      <div class="q-pa-xs col-md-5 col-sm-12 col-xs-12">
        <left :content="profile"/>
      </div>
      <div class="q-pa-xs col-md-7 col-sm-12 col-xs-12">
        <right class="full-width" />
      </div>
    </div>
    hello
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
        src:'',
        name:'Moshood Aremu',
        items:[
          {icon:'mail', content:'Moshood@brandmobileafrica.com'},
          {icon:'call', content:'+234 818 655 1442'},
          {icon:'room', content:'#25B, Adewole Kolawole Crescent, off Admiralty way, Lekki, Phase 1, Lagos, Nigeria.'},
        ]
      }
    }
  },
  computed: {
    theroute(){return this.$route.name },
  },
}
</script>
