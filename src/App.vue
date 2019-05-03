<template>
  <div id="app">

    <Header />

    <router-view />

    <VModal v-if="modal.open" />

    <Loader v-if="loaded" />

  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import Loader from '@/components/Loader.vue'
import VModal from '@/components/Modal.vue'
import '@/assets/style/Index.scss'

@Component({
  components: {
    Header, Loader, VModal
  }
})

export default class Application extends Vue {
  // COMPUTED
  private get loaded (): boolean {
    return this.$store.getters['APP.DEMO/loaded']
  }

  private get modal (): boolean {
    return this.$store.getters['APP.DEMO/modal']
  }
}
</script>