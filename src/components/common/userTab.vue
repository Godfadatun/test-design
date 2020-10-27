<template>
  <q-card flat square :class="'q-py-none row full-width flex-center'+(content.is_active ? 'text-grey' : '')" :style="itemStyle" >
    <q-card-section class="col-md-1 col-xs-12 flex flex-center q-py-xs">
      <q-avatar rounded size="50px" class="" >
          <img v-if="content.image_url" :src="content.image_url" alt="">
          <q-icon v-else color="info" name="ion-contact" size="lg"  />
        </q-avatar>

    </q-card-section>
    <q-card-section class="col-md-3 col-xs-12 flex flex-center q-pa-none">
      <div class="q-pa-xs text-caption">{{content.first_name}}</div>
    </q-card-section>
    <q-card-section class="col-md-4 col-xs-12 flex flex-center q-py-none q-pl-none" >

      <div class="text-caption q-pl-md text-left">{{content.email}}</div>
    </q-card-section>
    <q-card-section class="col-md-2 col-xs-12 flex flex-center q-pa-none" >
      <div class="row flex-center text-caption" >
        <div >{{content.role.name}}</div>
        <q-btn flat round dense  color="blue-9" icon="ion-arrow-dropdown" />
        <q-menu fit>
          <q-list style="min-width: 100px">

            <q-card v-for="(item, index) in role[0]" :key="index" clickable @click="status = item" v-close-popup>
            <q-card-section>{{item.name}}</q-card-section>
            </q-card>
          <q-separator />

          </q-list>
        </q-menu>

      </div>
    </q-card-section>
    <q-card-section  class="col-md-2 col-xs-12 flex flex-center q-pa-none">
      <div v-if="content.has_activated" class="row flex-center">
        <q-btn size="sm" class="" flat v-if="!content.is_active" round text-color="negative" icon="block" @click="content.is_active = !content.is_active" />
        <q-btn size="sm" class="" flat v-if="content.is_active" round text-color="green" icon="ion-ios-unlock" @click="content.is_active = !content.is_active" />
        <deleteBtn />
      </div>
       <q-btn v-if="!content.has_activated" color="blue-9" no-caps size="sm" label="Resend Invite" class="flex justify-end" />

    </q-card-section>
  </q-card>
</template>

<script>
import deleteBtn from './deleteBtn'
export default {
  // name: 'EssentialLink',
  props: ['title', 'caption', 'link', 'icon', 'role','content'],
  components:{
    deleteBtn
  },
  data() {
    return {
      unlocked:false,
      status:'Admin',
      email:'sam@example.com',
      name:'sam example',
      itemColor:'',
      form:{
        name:'',
        email:''
      },
      options:[
        'Admin',
        'others'
      ],
      itemStyle:{
        borderBottom:'1px grey solid'
      },
    }
  },

  methods: {
    // textLength(){
    //   if (this.$props.content.email.length > 10 ) {

    //   }
    // }
  },

  computed: {
    theroute(){return this.$route.name },
    // role(){return this.$store.getters['Auth/role']}
  },
}
</script>
