<template>
  <q-page class="column justify-center bg-warning" padding>

    <div class="full-width row">
      <div class="q-pa-xs col-md-4 col-sm-12 col-xs-12">
        <left />
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
    right,
    left
  },
  data() {
    return {}
  },
  computed: {
    subUsers(){return this.$store.getters['Auth/profile'].sub_users}
  },
  mounted() {
    this.$store.dispatch('Auth/role')
    this.$store.dispatch('Auth/profile')

  },

}
</script>
