<template>
  <q-item
    clickable
    :to="{name : link}"
    :class="theroute == link ? 'bg-white text-secondary q-pa-md':'bg-primary text-white q-pa-md'"
    :style="itemStyle"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :color="theroute == link ? 'secondary':'accent'" :name="icon" size="lg"  />
    </q-item-section>
    <q-space />
    <q-item-section >
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  // name: 'EssentialLink',
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
