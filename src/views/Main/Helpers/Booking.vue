<template>
  <div v-if="state" class="ui--container">
    <div id="ui--h2-title">Booking Info</div>

    <div class="ui--col ui--col-x2">

      <Select
        name="ui--model-branch"
        label="Branch"
        v-model="branch"
        :options="db"
        :field="{ key: 'id', label: 'label' }"
        search required
      />

      <Select
        name="ui--model-people"
        label="People"
        v-model="people"
        :options="arr"
        :field="{ key: 'id', label: 'id' }"
        required
      />

      <DatePicker
        name="ui--model-appointment-date"
        label="Appointment Date"
        v-model="appointmentDate"
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

      <div class="ui--col ui--col-cog">
        <Input
          name="ui--model-refer-booking"
          type="text"
          label="Refer to Booking ID"
          v-model="referId"
        />
        
        <div class="ui--cog ion-ios-book" title="search" @click="test"></div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Modal } from '@/units'

@Component
export default class Booking extends Vue {
  // DATA
  private branch: number = 0
  private people: number = 1
  private referId: string = ''
  private totalHours: number = 0
  private appointmentTime: number = 0
  private appointmentDate: string = String('2019-05-06')

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

  private get arr (): any {
    let results: any = []
    for (let i = 1; i <= 30; i++) results.push({ id: i })
    return results
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