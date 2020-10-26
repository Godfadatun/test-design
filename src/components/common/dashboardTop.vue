<template>
  <q-toolbar class="bg-transparent">
    <q-space />
    <q-btn color="blue-9" no-caps icon-right="ion-ios-mail" class="q-mr-md"  >
      <div class="text-caption q-pr-lg">Resend Invitations</div>
    </q-btn>
    <q-btn color="blue-9" no-caps icon-right="ion-add-circle" >
      <div class="text-caption q-pr-lg">Invite User</div>
    </q-btn>
  </q-toolbar>
</template>

<script>
export default {
  // name: 'EssentialLink'.
  
  props: ['title', 'caption', 'link', 'icon', 'ifCond',],
    data() {
    return {
      dBg:'bg-primary text-white',
      iconColor:'bg-info',
      itemStyle:{
        borderBottom:'1px grey solid'
      },
    }
  },

  computed: {
    theroute(){return this.$route.name },
  },
}
</script>
