<template>
  <div class="ui--upload">

    <div class="ui--upload-file" v-if="!render">
      .ui--upload-file
    </div>

    <div class="ui--upload-file" v-else>
      <!-- <input type="file"
        @dragenter="onDrag"
        @dragleave="onDrag"
        @change="fileChange"
      /> -->
      <input type="file" class="ui--upload-input" title @change="fileChange">

      <div class="ui--upload-label">
        Drop your File here to begin
        <br>or Click to browse
        <br>or press Ctrl+V to paste screenshot
      </div>
    </div>

    <div class="ui--upload-info">
      File should be in (PNG, JPG, PDF, Excel, Word)
      <br>Maximum 5 files and not over 2 MB/file.
    </div>

    <div class="ui--upload-container">

      <div
        class="ui--upload-file-list"
        draggable="true"
        @dragstart="removeDrag(elm, $event)"
        v-for="(elm, key) in 4" :key="key">

        <img
          class="ui--upload-file-image"
          aria-object-fit="cover"
          aria-object-position="center"
          :src="require('@/assets/image/69419214.jpg')"
        >

        <div class="ui--upload-file-text">
          <div class="ui--upload-file-name">file Name</div>
          <div class="ui--upload-file-type">file Type</div>
        </div>
      </div>

    </div>

    <div class="ui--upload-trash" @drop="removeDrop" @dragover="removeDropOver">
      <i class="ion-ios-trash"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class UploadFiles extends Vue {
  // DATA
  private temporary: any = null
  private render: any = null

  // METHODS
  private fileChange (events: any): void {
    const x: any = (events.dataTransfer || events.target).files[0]

    if (
      [
        'image/png',
        'image/jpeg',
        'application/pdf',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ].indexOf(x.type) < 0
    ) {
      alert('Unsupported file type!')
    }
    else if (x.size > 2e+6 /* 2 Megabyte */) {
      alert('Too big file! Please reduce the size of your file.')
    }
    else {
      const render: any = new FileReader()
      render.readAsDataURL(x)
      render.onload = (ev: any): void => {
        this.render = {
          name: x.name,
          data: ev.target.result
        }
      }

      this.temporary = x
    }
  }

  private cancel (): void {
    this.temporary = null
    this.render = null
  }

  /**
   * Remove File.
   */
  private removeDrag (param: any, events: any): void {
    events.dataTransfer.setData('fileID', param)
  }

  /**
   * Remove File.
   */
  private removeDrop (events: any): void {
    const id: string = events.dataTransfer.getData('fileID')
    if (confirm('Do you want to [Remove] this file?')) {
      console.log('id:', Number(id))
    }
  }

  /**
   * Remove File.
   */
  private removeDropOver (events: any): void {
    events.preventDefault()
  }
}
</script>