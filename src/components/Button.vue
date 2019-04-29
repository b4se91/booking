<template>
  <button id="ui--button">
    <slot>default</slot>
  </button>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class Button extends Vue {
  @Prop(Boolean) readonly disabled!: boolean
}
</script>