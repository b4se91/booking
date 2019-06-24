<template>
  <div id="app-header">

    <div id="app-header-actions">
      <Button class="ui--color-info">save</Button>
      <Button class="ui--color-success">save &amp; close</Button>
      <Button class="ui--color-error">close</Button>
    </div>

    <div id="app-header-info">
      <strong>booking id:&nbsp;</strong>
      <span>000000</span>
    </div>

    <div id="app-header-menu">
      <router-link class="ui--h-menu" :to="{ name: 'main' }">customer info</router-link>
      <router-link class="ui--h-menu" :to="{ name: 'treatment' }">Treatment info</router-link>
      <router-link class="ui--h-menu" :to="{ name: 'sales' }">sales receipt</router-link>
    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  constructor () {
    super()
  }
}
</script>