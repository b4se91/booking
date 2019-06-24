<template>
  <div v-if="state" class="ui--container">
    <div id="ui--h2-title">Booking Made By</div>

    <div class="ui--col ui--col-x2">
      <Input
        type="text"
        name="ui--model-bp-name"
        label="B.P. Name"
        v-model="madeName"
      />

      <div class="ui--col ui--col-cog">
        <Input
          type="text"
          name="ui--model-bp-phone"
          label="B.P. Phone"
          v-model="madePhone"
        />
        
        <div class="ui--cog ion-ios-book" title="Search" @click="test"></div>
      </div>
    </div>

    <div class="ui--col ui--col-x2">
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
        v-model="voucherNo"
      />
    </div>

    <div class="ui--col ui--col-x1">
      <Select
        name="ui--model-booking-made-by"
        label="Booking Made By"
        v-model="madeCompany"
        :options="db"
        :field="{ key: 'id', label: 'label' }"
        search required
      />
    </div>

    <div class="ui--col ui--col-x1 ui--col-cog">
      <Select
        name="ui--model-marketing-code"
        label="Marketing Code"
        v-model="marketingCode"
        :options="db"
        :field="{ key: 'id', label: 'label' }"
        search
      />
      
      <div class="ui--cog ion-ios-book" title="Search" @click="test"></div>
    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class BookingMadeBy extends Vue {
  // DATA
  private madeName: string = ''
  private madePhone: string = ''
  private channel: number = 0
  private voucherNo: string = ''
  private madeCompany: number = 0
  private marketingCode: number = 0

  // METHODS
  public sync (): object {
    return this.$data as object
  }
  
  private test (): void {
    alert('developing')
  }

  // COMPUTED
  private get db (): any {
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