<template>
  <div class="ui--files">
    <div id="app-above">upload files</div>
    
    <div class="ui--files-ul">

      <div class="ui--files-li" v-for="(elm, key) in store" :key="key">
        <img
          class="ui--files-image"
          aria-object-fit="cover"
          aria-object-position="center"
          :src="require('@/assets/image/69419214.jpg')"
        >

        <div class="ui--files-name">
          file type
        </div>
      </div>

      <div class="ui--files-li ui--files-upload" v-if="4 <= store.length" @click="upload">
        <i class="ion-ios-cloud-upload"></i>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Modal } from '@/units'

@Component
export default class Files extends Vue {
  
  // METHODS
  private upload (): void {
    import(/* webpackChunkName: "upload-files" */ '@/components/Mod/Upload.vue')
      .then((component: any) => {
        Modal(this, component.default)
      })
  }

  // COMPUTED
  private get store (): any {
    return Array(4)
  }
}
</script>