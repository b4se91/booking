<template>
  <div class="ui--container">
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

      <div class="ui--col ui--col-cog">
        <Select
          name="ui--model-people"
          label="People"
          v-model="people"
          :options="arr"
          :field="{ key: 'id', label: 'id' }"
          required
        />
        
        <div class="ui--cog ion-ios-construct" title="Treatment Information" @click="VPeople"></div>
      </div>

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
import { Modal } from '@/units'

@Component
export default class Booking extends Vue {
  // DATA
  private people: number = 1
  private branch: number = 0
  private totalHours: number = 0
  private appointmentTime: number = 0
  private appointmentDate: string = '2019-06-06'

  // METHODS
  private async VPeople () {
    const comp: any = await import('@/components/iMod/People.vue')
    Modal(this, {
      comp: comp.default,
      options: {
        width: '60vw',
        title: 'treatment information'
      }
    })
  }

  // COMPUTED
  private get db (): any {
    return this.$store.getters['APP.COMMENT/data']
  }

  private get arr (): any {
    let results: any = []
    for (let i = 1; i <= 30; i++) results.push({ id: i })
    return results
  }
}
</script>