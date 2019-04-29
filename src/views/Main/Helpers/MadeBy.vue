<template>
  <div id="ui--main-madeby" class="app-main-container">
    <div id="ui--h2-title">Booking Made By</div>

    <div class="ui--container ui--col-x2">
      <Input
        type="text"
        name="ui--model-bp-name"
        label="B.P. Name"
      />

      <Input
        type="text"
        name="ui--model-bp-phone"
        label="B.P. Phone"
      />
    </div>

    <div class="ui--container ui--col-x2">
      <Select
        name="ui--model-channel"
        label="Channel"
        v-model="channel"
        :options="db"
        :field="{ key: 'id', label: 'label' }"
        search
      />

      <Input
        type="text"
        name="ui--model-voucher"
        label="Voucher No."
      />
    </div>

    <div class="ui--container ui--col-x1">
      <Select
        name="ui--model-booking-made-by"
        label="Booking Made By"
        v-model="madeBy"
        :options="db"
        :field="{ key: 'id', label: 'label' }"
        search required
      />
    </div>

    <div class="ui--container ui--col-x1">
      <Select
        name="ui--model-marketing-code"
        label="Marketing Code"
        v-model="marketingCode"
        :options="db"
        :field="{ key: 'id', label: 'label' }"
        search
      />
    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class MadeBy extends Vue {
  // DATA
  private channel: number = 0
  private madeBy: number = 0
  private marketingCode: number = 0

  // COMPUTED
  private get db (): any {
    return this.$store.getters['APP.COMMENT/data']
  }
}
</script>