<template>
  <q-item :class="'q-py-none row full-width'+(content.is_active ? 'text-grey' : '')" :style="itemStyle" >
    <q-item-section avatar class="col-md-1">
      <q-avatar rounded size="50px" class="q-mr-lg" >
          <img v-if="content.image_url" :src="content.image_url" alt="">
          <q-icon v-else color="info" name="ion-contact" size="lg"  />
        </q-avatar>

    </q-item-section>
    <q-item-section class="col-md-3">
      <!-- <q-input dense v-model="form.name" /> -->
      <q-item-label >{{content.first_name}}</q-item-label>
    </q-item-section>
    <q-item-section class="col-md-3 wrap" >

      <q-item-label class="text-caption wrap">{{content.email}}</q-item-label>
    </q-item-section>
    <q-item-section class="col-md-3 wrap" >
      <div class="row flex-center q-pl-md flex self-end" >
        <div >{{content.role.name}}</div>
        <!-- <q-space /> -->
        <q-btn flat round dense  color="blue-9" icon="ion-arrow-dropdown" />
        <q-menu fit>
          <q-list style="min-width: 100px">
            <q-item v-for="(item, index) in options" :key="index" clickable @click="status = item" v-close-popup>
            <q-item-section>{{item}}</q-item-section>
            </q-item>
          <q-separator />

          </q-list>
        </q-menu>

      </div>
    </q-item-section>
    <q-item-section side   :style="{minWidth:'110px'}">
      <div v-if="content.has_activated" class="row">
        <q-btn size="sm" class="col" flat v-if="!content.is_active" round text-color="negative" icon="block" @click="content.is_active = !content.is_active" />
        <q-btn size="sm" class="col" flat v-if="content.is_active" round text-color="green" icon="ion-ios-unlock" @click="content.is_active = !content.is_active" />
        <deleteBtn />
      </div>
       <q-btn v-if="!content.has_activated" color="blue-9" no-caps size="sm" label="Resend Invite" />

    </q-item-section>
  </q-item>
</template>

<script>
import deleteBtn from './deleteBtn'
export default {
  // name: 'EssentialLink',
  props: ['title', 'caption', 'link', 'icon', 'ifCond','content'],
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
  },
}
</script>
