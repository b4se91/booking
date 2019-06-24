<template>
  <div class="ui--select">

    <label :class="['ui--select-label', { required }]">
      <span>{{ label }}</span>
    </label>

    <div :class="['ui--select-placeholder', { open }]">
      <span :id="name" @click="openDropdown">
        {{ placeholder }}
      </span>

      <i class="ion-ios-close" v-if="currentValue && btnClear" @click="clear"></i>
      <i class="ion-ios-arrow-down" v-else  @click="openDropdown"></i>
    </div>

    <div :class="['ui--select-dropdown-list', { 'to-top': toTop }]" v-if="open">

      <div class="ui--select-dropdown-search" v-if="search">
        <input type="text" placeholder="Search" v-model="query">
        <i class="ion-ios-search"></i>
      </div>

      <div :class="['ui--select-dropdown-li', { focus: focus(elm) }]"
        @click="selected(elm)"
        v-html="h(elm[field.label])"
        v-for="(elm, key) in dropdown" :key="key">
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Prop, Watch, Component } from 'vue-property-decorator'
import { hls, lowerCase } from '@/units'

@Component
export default class Select extends Vue {
  @Prop([Number, String]) value!: number | string
  @Prop(String) readonly label!: string
  @Prop(Boolean) readonly search!: boolean
  @Prop(Boolean) readonly disabled!: boolean
  @Prop(Boolean) readonly required!: boolean
  @Prop(Boolean) readonly toTop!: boolean
  @Prop(Boolean) readonly btnClear!: boolean
  @Prop({ type: String, required: true }) readonly name!: string
  @Prop({ type: Array, required: true }) readonly options!: any
  @Prop({ type: Object, required: true }) readonly field!: any

  // __DATA
  private currentValue: any = this.value || 0
  private query: string = String()
  private open: boolean = false

  // __METHODS
  private openDropdown (): void {
    if (!this.disabled) {
      this.open = !this.open
    }
  }

  private selected (param: any): void {
    if (!this.disabled && param) {
      this.currentValue = param[this.field.key]
      this.open = false
      this.$emit('input', this.currentValue)
    }
  }

  private clear (): void {
    if (!this.disabled) {
      this.currentValue = 0
      this.$emit('input', this.currentValue)
    }
  }

  private h (param: string): string {
    return hls(param, this.query)
  }

  private focus (param: any): boolean {
    return this.currentValue === param[this.field.key]
  }

  private outSideClose (e: any): void {
    if (!this.$el.contains(e.target)) {
      this.open = false
    }
  }

  // __COMPUTED
  private get dropdown (): any {
    const search: string = lowerCase(this.query)
    let x: any = this.options

    if (this.search && search) {
      x = x.filter((h: any) => lowerCase(h[this.field.label]).includes(search))
    }

    return x
  }

  private get placeholder (): string {
    const query: any = this.options.get(this.field.key, this.currentValue)
    return query
      ? query[this.field.label]
      : String()
  }

  // WATCH
  @Watch('value')
  private onValue (value: number): void {
    this.currentValue = value
  }

  @Watch('open')
  private closeDropdown (value: boolean): void {
    if (!value) {
      this.query = String()
    }
  }

  // @Mounted (Lifecycle Hooks)
  private mounted (): void {
    document.addEventListener('click', this.outSideClose, false)
  }

  // @Destroyed (Lifecycle Hooks)
  private destroyed (): void {
    document.removeEventListener('click', this.outSideClose, false)
  }
}
</script>