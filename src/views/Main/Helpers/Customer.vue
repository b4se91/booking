<template>
  <div v-if="state" class="ui--container">
    <div id="ui--h2-title">Customer Info</div>

    <div class="ui--col ui--col-x2">
      <Input
        name="ui--model-customer-name"
        type="text"
        label="Customer Name"
        v-model="customerName"
        required
      />

      <div class="ui--col ui--col-cog">
        <Input
          name="ui--model-member-code"
          type="text"
          label="Member Code"
          v-model="memberCode"
          :maxlength="6"
        />
        
        <div class="ui--cog ion-ios-book" title="Search" @click="VMember"></div>
      </div>
    </div>

    <div class="ui--col ui--col-x1">
      <Select
        name="ui--model-customer-hotel"
        label="Customer Hotel"
        v-model="customerHotel"
        :options="db"
        :field="{ key: 'id', label: 'label' }"
        search
      />
    </div>

    <div class="ui--col ui--col-x2">
      <Input
        name="ui--model-room-number"
        type="text"
        label="Room Number"
        v-model="roomNumber"
      />
      
      <div class="ui--col ui--col-cog">
        <Input
          name="ui--model-phone-number"
          type="text"
          label="Phone Number"
          v-model="customerPhone"
        />
        
        <div class="ui--cog ion-ios-book" title="Search" @click="test"></div>
      </div>
    </div>

    <div class="ui--col ui--col-x1">
      <Input
        type="textarea"
        name="ui--model-special-request"
        label="Special Request"
        v-model="specialRequest"
      />
    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Modal } from '@/units'

@Component
export default class Customer extends Vue {
  // DATA
  private customerName: string = ''
  private customerPhone: string = ''
  private customerHotel: number = 0
  private memberCode: string = ''
  private roomNumber: string = ''
  private specialRequest: string = ''

  // METHODS
  public sync (): object {
    return this.$data as object
  }

  private test (): void {
    alert('developing')
  }

  private async VMember () {
    const comp: any = await import('@/components/iMod/Membership.vue')
    Modal(this, {
      comp: comp.default,
      options: {
        title: 'membership',
        clickable: true
      }
    })
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