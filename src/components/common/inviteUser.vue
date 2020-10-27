<template>
  <q-item class="q-py-none"  >
    <q-item-section>
      <q-input dense color="blue-9" v-model="form.email" />
    </q-item-section>
    <q-item-section>
      <q-input dense color="blue-9" v-model="role[1].name" >
        <template v-slot:append>
           <q-btn flat round dense color="blue-9" icon="ion-arrow-dropdown" />
        </template>
        <q-menu fit>
          <q-list style="min-width: 100px">
            <q-item v-for="(item, index) in role" :key="index" clickable v-close-popup>
            <q-item-section>{{item.name}}</q-item-section>
            </q-item>
          <q-separator />

          </q-list>
        </q-menu>

      </q-input>
    </q-item-section>
    <q-item-section side>
      <div class="">
        <q-btn size="sm" no-caps text-color="white" color="blue-9" label="Invite User" @click="$emit('invitee')" />
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'InviteUser',
  props: ['role'],

  data() {
    return {
      form:{
        name:'',
        email:''
      },
      itemStyle:{
        borderBottom:'1px white solid'
      },
    }
  },
}
</script>
