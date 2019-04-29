<template>
  <div id="ui--main-transport" class="app-main-container">
    <div id="ui--h2-title">Transportation</div>

    <!-- PICK UP -->
    <div class="ui--block">
      <div class="ui--head">
        <span>Pick Up</span>
        <Switzh
          name="ui--model-transport-pickup"
          v-model="pick.use"
          :labels="sw.label"
          :color="sw.color"
        />
      </div>

      <div class="ui--body" v-if="pick.use">
        <div class="ui--container ui--col-x1">
          <Select
            name="ui--model-pick-driver"
            label="Driver"
            v-model="pick.driver"
            :options="db"
            :field="{ key: 'id', label: 'label' }"
            :toTop="!take.use && !pick.driver" search
          />
        </div>

        <div class="ui--container ui--col-x2">
          <Input
            type="text"
            name="ui--model-pick-place"
            label="Place (N/A: Customer Hotel)"
          />

          <Select
            name="ui--model-pick-time"
            label="Time (Auto)"
            :options="db"
            :field="{ key: 'id', label: 'label' }"
            :toTop="!take.use && !pick.driver" search
          />
        </div>

        <div class="ui--container ui--col-x2" v-if="pick.driver">
          <Input
            type="text"
            name="ui--model-pick-taxi-price"
            label="Taxi Price"
          />

          <Input
            type="text"
            name="ui--model-pick-taxi-license"
            label="Taxi License Plate"
          />
        </div>

        <div class="ui--container ui--col-x1" v-if="pick.driver">
          <Select
            name="ui--model-pick-taxi-reason"
            label="Taxi Reason"
            :options="db"
            :field="{ key: 'id', label: 'label' }"
            :toTop="!take.use" search
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
          v-model="take.use"
          :labels="sw.label"
          :color="sw.color"
        />
      </div>

      <div class="ui--body" v-if="take.use">
        <div class="ui--container ui--col-x1">
          <Select
            name="ui--model-take-driver"
            label="Driver"
            v-model="take.driver"
            :options="db"
            :field="{ key: 'id', label: 'label' }"
            search toTop
          />
        </div>

        <div class="ui--container ui--col-x2">
          <Input
            type="text"
            name="ui--model-take-place"
            label="Place (N/A: Customer Hotel)"
          />

          <Select
            name="ui--model-take-time"
            label="Time (Auto)"
            :options="db"
            :field="{ key: 'id', label: 'label' }"
            search toTop
          />
        </div>

        <div class="ui--container ui--col-x2" v-if="take.driver">
          <Input
            type="text"
            name="ui--model-take-taxi-price"
            label="Taxi Price"
          />

          <Input
            type="text"
            name="ui--model-take-taxi-license"
            label="Taxi License Plate"
          />
        </div>

        <div class="ui--container ui--col-x1" v-if="take.driver">
          <Select
            name="ui--model-take-taxi-reason"
            label="Taxi Reason"
            :options="db"
            :field="{ key: 'id', label: 'label' }"
            search toTop
          />
        </div>
      </div>
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
  private pick: any = {
    use: false,
    driver: 0
  }
  private take: any = {
    use: false,
    driver: 0
  }

  // COMPUTED
  private get db (): any {
    return this.$store.getters['APP.COMMENT/data']
  }

  private get sw (): any {
    return {
      label: { checked: 'On', unchecked: 'Off' },
      color: { checked: '#2D8CF0', unchecked: '#E2E6E9', disabled: '#EEF0F1' }
    }
  }
}
</script>