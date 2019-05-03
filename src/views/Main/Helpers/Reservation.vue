<template>
  <div class="ui--container ui--comp-reserva">
    <div id="ui--h2-title">Reservation Agent</div>
    
    <div class="ui--col ui--col-x2">
      <Select
        name="ui--model-reserva-by"
        label="Reservation by"
        v-model="resBy"
        :options="db"
        :field="{ key: 'id', label: 'label' }"
        search toTop
      />

      <Select
        name="ui--model-received-by"
        label="Received By"
        v-model="recBy"
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
  private resBy: number = 0
  private recBy: number = 0

  // COMPUTED
  private get db (): any {
    return this.$store.getters['APP.COMMENT/data']
  }
}
</script>