<template>
  <q-item :class="'q-py-none '+(unlocked ? 'text-grey' : '')" :style="itemStyle" >
    <q-item-section avatar >
      <q-icon color="info" name="ion-contact" size="lg"  />
    </q-item-section>
    <q-item-section>
      <!-- <q-input dense v-model="form.name" /> -->
      <div>{{name}}</div>
    </q-item-section>
    <q-item-section>
      <!-- <q-input dense v-model="form.email" /> -->
      <div>{{email}}</div>
    </q-item-section>
    <q-item-section>
      <!-- <q-select dense v-model="options[0]" :options="options" /> -->
      <div class="row flex-center" >
        <div :style="{minWidth:'50px'}">{{status}}</div>
        <q-space />
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
    <q-item-section side>
      <div class="row">
        <q-btn size="sm" class="col" flat v-if="!unlocked" round text-color="negative" icon="block" @click="unlocked = !unlocked" />
        <q-btn size="sm" class="col" flat v-if="unlocked" round text-color="green" icon="ion-ios-unlock" @click="unlocked = !unlocked" />
        <deleteBtn />
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
import deleteBtn from './deleteBtn'
export default {
  // name: 'EssentialLink',
  props: ['title', 'caption', 'link', 'icon', 'ifCond',],
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

  computed: {
    theroute(){return this.$route.name },
  },
}
</script>
