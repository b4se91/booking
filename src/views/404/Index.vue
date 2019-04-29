<template>
  <div id="app-err404">

    <div class="container">
      <div class="h1">Something's wrong here...</div>
      <div class="h5">
        <p>We can't find the page you're looking for. Check out our</p>
        <p>Help Center or head back to home</p>
      </div>

      <div class="button">
        <router-link :to="{ name: 'main' }">Home</router-link>
        <router-link :to="{ name: 'main' }">Help</router-link>
      </div>
    </div>

    <div class="container">
      <img :src="require('@/assets/image/error-404.svg')" alt="Error page not found">
    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import './style.scss'

@Component
export default class Error404 extends Vue {
  // code.
}
</script>