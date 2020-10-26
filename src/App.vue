<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'LayoutDefault',

  components: {
    // HelloWorld
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
</style>
