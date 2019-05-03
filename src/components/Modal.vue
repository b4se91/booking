<template>
  <transition name="ui--modal">
    <div id="app-modal">

      <div class="ui--modal-overlay"></div>

      <div class="ui--modal-container">

        <div
          class="ui--modal-close ion-ios-arrow-round-back"
          title="Close"
          @click="close">
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
  // METHODS
  private close (): void {
    Modal(this, null, false)
  }

  private closeOver (param: boolean): void {
    document.body.style.overflowY     = param ? 'hidden' : 'scroll'
    document.body.style.paddingRight  = param ? '17px' : '0px'
  }

  // COMPUTED
  private get modal (): boolean {
    return this.$store.getters['APP.DEMO/modal']
  }

  // MOUNTED
  public mounted (): void {
    this.closeOver(true)
  }

  // DESTROYED
  public destroyed (): void {
    this.closeOver(false)
  }
}
</script>