<template>
  <q-layout view="lHh LpR fFf" class="dtop">
    <q-header  class="bg-white" bordered>
      <q-toolbar :class="'q-py-xs'">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          color="secondary"
          class="lt-md"
        />
        <q-btn dense round no-caps flat icon="ion-notifications" color="info" >
          <q-badge color="red"  transparent class="q-mb-lg q-py-xs q-px-none" :style="iconStyleBg" >99+</q-badge>
        </q-btn>
        <div class="text-caption text-info gt-sm">Updated 29 mins ago</div>


        <q-space class="" />

        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"

          class="lt-md"
        />
        <!-- help-circle-outline -->
         <q-btn to="/" no-caps flat color="secondary" icon="ion-contact" >
          <div class="">Hi, Moshood</div>
         </q-btn>
         <q-btn to="/" no-caps flat color="secondary" icon="ion-help-circle-outline" >
          <div class="gt-sm">Help</div>
         </q-btn>

      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-primary" :width="250" show-if-above >
      <q-list >
        <q-card class="bg-primary q-px-md q-py-sm" square style="min-height: 150px">
          <img src="../assets/bMLogo.png" class="" style="max-width: 100px" alt="pass_logo" >
        </q-card>
        <EssentialLink
          v-for="link in dashboardMenu"
          :key="link.title"
          v-bind="link"
        />
        <Logout />
      </q-list>

    </q-drawer>

    <q-page-container >
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
// import Footer from '../components/common/footer'
// import Avatar from '../components/common/avatar'
import EssentialLink from '../components/EssentialLink'
// import Logout from '../components/auth/logout'
export default {
  name: 'LayoutDefault',

  components: {
    // Footer,
    EssentialLink,
    // Avatar,
    // Logout
  },

  data () {
    return {
      iconStyleBg:{
        borderRadius: '50%',
        marginLeft:'-15px',
        marginBottom:'30px',
        fontSize:'10px',
        padding:'4px 3px'
      },
      leftDrawerOpen: false,
      dashboardMenu:[
        {
          title: 'Dashboard',
          icon: 'eva-grid',
          link: 'dashboard',
        },
        {
          title: 'Clients',
          icon: 'apartment',
          link: 'carreer',
        },
        {
          title: 'Campaign',
          icon: 'campaign',
          link: 'home',
        },
        {
          title: 'Audience',
          icon: 'ion-person',
          link: 'security',
        },
        {
          title: 'Games',
          icon: 'fas fa-dice',
          link: 'faq',
        },
        {
          title: 'Redemption',
          icon: 'confirmation_number',
          link: 'faq',
        }
      ]
    }
  },
  mounted() {
    this.$store.dispatch('Auth/role')
    this.$store.dispatch('Auth/profile')
  },

  methods: {
    reroute(data){
      window.location.href = data
      // window.open(data, '_blank')
    },
  },
  computed: {
    theroute(){return this.$route.name },
    // user: function() { return this.$store.getters["Auth/users"]; },
    theauth(){
      let myroute = this.$route.name;
      if(myroute == 'login' || myroute == 'register' || myroute == 'forgot' || myroute == 'confirm' ){
        return false
      }else{
        return true
      }
    },
    // is_agent: function() {return this.$store.getters["Auth/is_agent"];},
  },
}
</script>

<style>
</style>
