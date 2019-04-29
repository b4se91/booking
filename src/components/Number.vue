<template>
  <div id="ui--number">

    <label id="ui--select-label" :class="{ required }">
      <span>{{ label }}</span>
    </label>

    <div id="ui--number-container">
      <span id="ui--number-button" class="ion-ios-remove" @click="minus"></span>

      <input
        readonly
        :id="name"
        type="text"
        autocomplete="off"
        v-model="currentValue"
      />

      <span id="ui--number-button" class="ion-ios-add" @click="plus"></span>
    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class Number extends Vue {
  @Prop(String) readonly label!: string
  @Prop(Boolean) readonly required!: boolean
  @Prop({ type: Number, default: 1 }) value!: number
  @Prop({ type: Number, default: 1 }) readonly min!: number
  @Prop({ type: Number, default: 10 }) readonly max!: number
  @Prop({ type: String, required: true }) readonly name!: string

  // DATA
  private currentValue: number = this.value

  // METHODS
  private plus (): void {
    if (this.currentValue < this.max) this.currentValue += 1;
    this.$emit('input', this.currentValue)
  }

  private minus (): void {
    if (this.currentValue > this.min) this.currentValue -= 1;
    this.$emit('input', this.currentValue)
  }
}
</script>