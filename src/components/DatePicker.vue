<template>
  <div class="ui--date-picker">

    <label :class="['ui--date-picker-label', { required }]">
      <span>{{ label }}</span>
    </label>

    <CtkPicker
      v-model="currentValue"
      :disabled="disabled"

      color="#2D8CF0"
      format="YYYY-MM-DD"
      formatted="LL"
      label=""

      onlyDate
      autoClose
      noLabel
      noButton
      noClearButton
    />

  </div>
</template>

<script lang="ts">
import { Vue, Prop, Watch, Component } from 'vue-property-decorator'
import CtkPicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'

@Component({
  components: {
    CtkPicker
  }
})

export default class DatePicker extends Vue {
  @Prop(String) value!: string
  @Prop(String) readonly label!: string
  @Prop(Boolean) readonly disabled!: boolean
  @Prop(Boolean) readonly required!: boolean
  @Prop({ type: String, required: true }) readonly name!: string

  // __DATA
  private currentValue: string = this.value || '2020-01-01'

  // __WATCH
  @Watch('value')
  private onValue (value: string): void {
    this.currentValue = value
  }

  @Watch('currentValue')
  private onEmit (value: string): void {
    this.$emit('input', value)
  }
}
</script>