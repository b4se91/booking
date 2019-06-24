<template>
  <div v-if="state" class="ui--container ui--comp-reserva">
    <div id="ui--h2-title">Reservation Agent</div>
    
    <div class="ui--col ui--col-x2">
      <Select
        name="ui--model-reserva-by"
        label="Reservation by"
        v-model="reservationBy"
        :options="db"
        :field="{ key: 'id', label: 'label' }"
        search toTop
      />

      <Select
        name="ui--model-received-by"
        label="Received By"
        v-model="receivedBy"
        :options="db"
        :field="{ key: 'id', label: 'label' }"
        search toTop
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Reservation extends Vue {
  // DATA
  private reservationBy: number = 0
  private receivedBy: number = 0

  // METHODS
  public sync (): object {
    return this.$data as object
  }

  // COMPUTED
  private get db (): Array<object> {
    return this.$store.getters['APP.UPLOAD/data']
  }

  private get state (): boolean {
    const state: any = this.$store.getters['APP.MAIN/data']
    for (const key in this.$data) {
      this.$data[key] = state[key]
    }
    return true
  }
}
</script>