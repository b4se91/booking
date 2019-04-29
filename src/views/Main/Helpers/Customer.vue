<template>
  <div id="ui--main-customer" class="app-main-container">
    <div id="ui--h2-title">Customer Info</div>

    <div class="ui--container ui--col-x2">
      <Input
        name="ui--model-customer-name"
        type="text"
        label="Customer Name"
        required
      />

      <Input
        name="ui--model-memner-code"
        type="text"
        label="Member Code"
        :maxlength="6"
      />
    </div>

    <div class="ui--container ui--col-x1">
      <Select
        name="ui--model-customer-hotel"
        label="Customer Hotel"
        v-model="customerHotel"
        :options="db"
        :field="{ key: 'id', label: 'label' }"
        search
      />
    </div>

    <div class="ui--container ui--col-x2">
      <Input
        name="ui--model-room-number"
        type="text"
        label="Room Number"
      />

      <Input
        name="ui--model-phone-number"
        type="text"
        label="Phone Number"
      />
    </div>

    <div class="ui--container ui--col-x1">
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

@Component
export default class CustomerInfo extends Vue {
  // DATA
  private customerHotel: number = 0
  private specialRequest: string = String()

  // COMPUTED
  private get db (): any {
    return this.$store.getters['APP.COMMENT/data']
  }
}
</script>