<template>
  <div id="app-file">
    <div id="app-above">upload files</div>
    
    <div id="app-file-ul">
      <div id="app-file-li" v-for="i in 5" :key="i">
        <img class="ui--file-image" :src="require('@/assets/image/petals.jpg')">
        <h5 class="ui--file-name">file type</h5>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Files extends Vue {
}
</script>