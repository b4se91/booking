<template>
  <div v-if="state" class="ui--container ui--comp-transport">
    <div id="ui--h2-title">Transportation</div>

    <!-- PICK UP -->
    <div class="ui--block">
      <div class="ui--head">
        <span>Pick Up</span>
        <Switzh
          name="ui--model-transport-pickup"
          v-model="transportPick.use"
          :labels="sw.label"
          :color="sw.color"
        />
      </div>

      <div class="ui--body" v-if="transportPick.use">
        <div class="ui--col ui--col-x1">
          <Select
            name="ui--model-pick-driver"
            label="Driver"
            v-model="transportPick.driver"
            :options="db"
            :field="{ key: 'id', label: 'label' }"
            :toTop="!transportTake.use && !transportPick.driver" search
          />
        </div>

        <div class="ui--col ui--col-x2">
          <Input
            type="text"
            name="ui--model-pick-place"
            label="Place (N/A: Customer Hotel)"
            v-model="transportPick.place"
          />

          <Select
            name="ui--model-pick-time"
            label="Time (Auto)"
            v-model="transportPick.time"
            :options="db"
            :field="{ key: 'id', label: 'label' }"
            :toTop="!transportTake.use && !transportPick.driver" search
          />
        </div>

        <div class="ui--col ui--col-x2" v-if="transportPick.driver">
          <Input
            type="text"
            name="ui--model-pick-taxi-price"
            label="Taxi Price"
            v-model="transportPick.taxiPrice"
          />

          <Input
            type="text"
            name="ui--model-pick-taxi-license"
            label="Taxi License Plate"
            v-model="transportPick.taxiLicense"
          />
        </div>

        <div class="ui--col ui--col-x1" v-if="transportPick.driver">
          <Select
            name="ui--model-pick-taxi-reason"
            label="Taxi Reason"
            v-model="transportPick.taxiReason"
            :options="db"
            :field="{ key: 'id', label: 'label' }"
            :toTop="!transportTake.use" search
          />
        </div>
      </div>
    </div>

    <!-- TAKE BACK -->
    <div class="ui--block">
      <div class="ui--head">
        <span>Take Back</span>
        <Switzh
          name="ui--model-transport-takeback"
          v-model="transportTake.use"
          :labels="sw.label"
          :color="sw.color"
        />
      </div>

      <div class="ui--body" v-if="transportTake.use">
        <div class="ui--col ui--col-x1">
          <Select
            name="ui--model-take-driver"
            label="Driver"
            v-model="transportTake.driver"
            :options="db"
            :field="{ key: 'id', label: 'label' }"
            search toTop
          />
        </div>

        <div class="ui--col ui--col-x2">
          <Input
            type="text"
            name="ui--model-take-place"
            label="Place (N/A: Customer Hotel)"
            v-model="transportTake.place"
          />

          <Select
            name="ui--model-take-time"
            label="Time (Auto)"
            v-model="transportTake.time"
            :options="db"
            :field="{ key: 'id', label: 'label' }"
            search toTop
          />
        </div>

        <div class="ui--col ui--col-x2" v-if="transportTake.driver">
          <Input
            type="text"
            name="ui--model-take-taxi-price"
            label="Taxi Price"
            v-model="transportTake.taxiPrice"
          />

          <Input
            type="text"
            name="ui--model-take-taxi-license"
            label="Taxi License Plate"
            v-model="transportTake.taxiLicense"
          />
        </div>

        <div class="ui--col ui--col-x1" v-if="transportTake.driver">
          <Select
            name="ui--model-take-taxi-reason"
            label="Taxi Reason"
            v-model="transportTake.taxiReason"
            :options="db"
            :field="{ key: 'id', label: 'label' }"
            search toTop
          />
        </div>
      </div>
    </div>

    <div class="ui--block" v-if="transportPick.use || transportTake.use">
      <Button class="ui--color-primary" @click.native="print">
        <i class="ion-ios-print"></i>
        <span>print</span>
      </Button>
    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { ToggleButton as Switzh } from 'vue-js-toggle-button'

@Component({
  components: {
    Switzh
  }
})

export default class Transport extends Vue {
  // DATA
  private transportPick: object = {
    use: false,
    driver: 0,
    time: 0,
    place: '',
    taxiPrice: '',
    taxiLicense: '',
    taxiReason: ''
  }
  private transportTake: object = {
    use: false,
    driver: 0,
    time: 0,
    place: '',
    taxiPrice: '',
    taxiLicense: '',
    taxiReason: ''
  }

  // METHODS
  public sync (): object {
    return this.$data as object
  }

  private print (): void {
    // code.
  }

  // COMPUTED
  private get db (): any {
    return this.$store.getters['APP.UPLOAD/data']
  }

  private get sw (): any {
    return {
      label: { checked: 'On', unchecked: 'Off' },
      color: { checked: '#2D8CF0', unchecked: '#E2E6E9', disabled: '#EEF0F1' }
    }
  }

  private get state (): boolean {
    const state: any = this.$store.getters['APP.MAIN/data']
    for (const key in this.$data) {
      this.$data[key] = state[key] as object
    }
    return true
  }
}
</script>