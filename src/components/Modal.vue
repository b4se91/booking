<template>
  <transition name="ui--modal" appear>
    <div id="app-modal">

      <div class="ui--modal-overlay" @click="overlayClose"></div>

      <div class="ui--modal-container" :style="{ width: modal.width }">

        <div class="ui--modal-header">
          <div
            class="ui--modal-close ion-ios-arrow-round-back"
            title="Close"
            @click="close">
          </div>

          <div class="ui--modal-header-title">
            {{ modal.title }}
          </div>
        </div>

        <component :is="modal.comp"></component>

      </div>

    </div>
  </transition>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Modal } from '@/units'

@Component
export default class VModal extends Vue {
  // __METHODS
  private close (): void {
    Modal(this, { close: true })
  }

  private overlayClose (): void {
    if (this.modal.clickable) this.close()
  }

  // __COMPUTED
  private get modal (): any {
    return this.$store.getters['APP.DEMO/modal']
  }
}
</script>