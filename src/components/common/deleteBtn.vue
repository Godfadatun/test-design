<template>
  <div class="">
    <q-btn size="sm" class="col" flat round text-color="negative" icon="ion-ios-trash" @click="alert = true"/>
    <q-dialog v-model="alert">
      <q-card flat bordered :style="itemStyle">
        <div class="row">
          <q-space />
          <q-icon name="ion-ios-close" color="red" size="lg" />
        </div>
        <q-card-section class="text-center q-py-sm">
          <q-icon name="ion-ios-alert" color="red" size="xl" />
        </q-card-section>
        <q-card-section class="flex flex-center" >
          <div :style="{maxWidth:'60%'}" class="text-center">
            You’re about to delete this User. Are you sure ?
          </div>

        </q-card-section>
        <q-card-actions align="center">
          <q-btn :style="itemStyle" class="q-px-lg q-mx-sm"  no-caps label="Yes" color="white" text-color="primary" v-close-popup />
          <q-btn :style="itemStyle" class="q-px-lg q-mx-sm"  no-caps label="No" color="white" text-color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<style>
</style>

<script>
// import userTab from '../common/userTab'
export default {
  name: 'userCard',
  components:{
    // userTab
  },
  data() {
    return {
      alert:false,
      itemStyle:{
        border:'1px #44099F solid'
      }
    }
  },

}
</script>
