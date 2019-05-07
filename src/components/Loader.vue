<template>
  <transition name="loader" appear>
    <div id="app-loader">
      
      <div class="container">
        <svg class="circle" viewBox="25 25 50 50">
          <circle
            class="path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke-width="5"
            stroke-miterlimit="10"
          />
        </svg>

        <div class="label">await...</div>
      </div>

    </div>
  </transition>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Loader extends Vue {
  // code.
}
</script>