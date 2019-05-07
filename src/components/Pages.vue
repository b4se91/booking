<template>
  <div class="ui--pages">
    <div
      :class="[
        'ion-md-arrow-back',
        {
          disabled: (currentValue === 1)
        }
      ]"
      @click="prev">
    </div>

    <div
      v-for="(elm, key) in maxlength"
      :key="key"
      :class="{
        focus: (currentValue === elm)
      }"
      @click="page(elm)">

      {{ elm }}

    </div>

    <div
      :class="[
        'ion-md-arrow-forward',
        {
          disabled: (currentValue === maxlength)
        }
      ]"
      @click="next">
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Watch, Component } from 'vue-property-decorator'

@Component
export default class Pages extends Vue {
  @Prop(Number) value!: any
  @Prop({
    type: Number,
    required: true
  }) readonly maxlength!: number

  // DATA
  private currentValue: number = this.value || 1

  // METHODS
  private page (input: number): void {
    this.currentValue = input as number
  }

  private next (): void {
    if (this.currentValue < this.maxlength) {
      this.currentValue = this.currentValue + 1
    }
  }

  private prev (): void {
    if (this.currentValue > 1) {
      this.currentValue = this.currentValue - 1
    }
  }

  // WATCH
  @Watch ('currentValue')
  onEmit (value: number): void {
    this.$emit('input', value)
  }
}
</script>