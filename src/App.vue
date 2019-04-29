<template>
  <div id="app">

    <Header />

    <router-view />

    <Loader v-if="loaded" />

  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Loader from '@/components/Loader.vue'
import Header from '@/components/Header.vue'
import '@/assets/style/Index.scss'

@Component({
  components: {
    Loader,
    Header
  }
})

export default class Application extends Vue {
  // COMPUTED
  private get loaded (): boolean {
    return this.$store.getters['APP.DEMO/loaded']
  }
}
</script>