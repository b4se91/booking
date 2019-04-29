<template>
  <div id="ui--main-booking" class="app-main-container">
    <div id="ui--h2-title">Booking Info</div>

    <div class="ui--container ui--col-x2">

      <Select
        name="ui--model-branch"
        label="Branch"
        v-model="branch"
        :options="db"
        :field="{ key: 'id', label: 'label' }"
        search required
      />

      <Number
        name="ui--model-people"
        label="People"
        v-model="people"
        :max="30"
        required
      />

      <DatePicker
        name="ui--model-appointment-date"
        label="Appointment Date"
        required
      />

      <Select
        name="ui--model-total-hours"
        label="Total Hours"
        v-model="totalHours"
        :options="db"
        :field="{ key: 'id', label: 'label' }"
        search
      />

      <Select
        name="ui--model-appointment-time"
        label="Appointment Time"
        v-model="appointmentTime"
        :options="db"
        :field="{ key: 'id', label: 'label' }"
        search required
      />

      <Input
        name="ui--model-refer-booking"
        type="text"
        label="Refer to Booking ID"
      />

    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class BookingInfo extends Vue {
  // DATA
  private people: number = 1
  private branch: number = 0
  private totalHours: number = 0
  private appointmentTime: number = 0

  // COMPUTED
  private get db (): any {
    return this.$store.getters['APP.COMMENT/data']
  }
}
</script>