<template>
  <div class="ui--upload">

    <div class="ui--upload-file ui--upload-kind" v-if="render">
      <div class="ui--upload-kind-form">
        <img
          class="ui--upload-kind-image"
          aria-object-fit="cover"
          aria-object-position="center"
          :src="render.data"
        >

        <div class="ui--upload-kind-name">
          {{ render.name }}
        </div>

        <select class="ui--upload-kind-select" v-model="render.type">
          <option :value="0">** Choose File Type</option>
          <option v-for="(obj, key) in db" :key="key" :value="obj.id">
            {{ obj.label }}
          </option>
        </select>
      </div>

      <div class="ui--upload-action">
        <Button class="ui--color-light" @click.native="cancel">cancel</Button>
        <Button class="ui--color-info" @click.native="upload">
          <i class="ion-ios-cloud-upload"></i>
          <span>upload</span>
        </Button>
      </div>
    </div>

    <div class="ui--upload-file" v-else>
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
        v-for="(elm, key) in store" :key="key">

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
import { Load } from '@/units'

@Component
export default class VUploadFiles extends Vue {
  // __DATA
  private temporary: any = null
  private render: any = null

  // __METHODS
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
      this.fileRender(x)
      this.temporary = x
    }
  }

  private fileRender (param: any): void {
    const render: any = new FileReader()
    render.readAsDataURL(param)
    render.onload = (ev: any): void => {
      this.render = {
        name: param.name,
        type: 0,
        data: ev.target.result
      }
    }
  }

  private upload (): void {
    if (this.store.length > 4) {
      alert('There was an error uploading the file, maximum 5 files.')
    }
    else if (!this.render.type) {
      alert('Please select type of file.')
    }
    else {
      Load(this)
      const form: any = new FormData()
        form.append('type', 'add')
        form.append('file', this.temporary)
        form.append('fileType', this.render.type)

      setTimeout(() => {
        Load(this, false)
        console.log(form)
      }, 2560)
    }
  }

  private cancel (): void {
    this.temporary = null
    this.render = null
  }

  /* Remove File */
  private removeDrag (param: any, events: any): void {
    events.dataTransfer.setData('fileID', param)
  }

  /* Remove File */
  private removeDrop (events: any): void {
    const id: string = events.dataTransfer.getData('fileID')
    if (confirm('Do you want to [Remove] this file?')) {
      console.log('id:', Number(id))
    }
  }

  /* Remove File */
  private removeDropOver (events: any): void {
    events.preventDefault()
  }

  // __COMPUTED
  private get store (): any {
    return Array(4)
  }

  private get db (): any {
    return this.$store.getters['APP.UPLOAD/data']
  }

  // @Created (Lifecycle Hooks)
  private created (): void {
    window.addEventListener("paste", (event: any): void => {
      const x: any = (event.clipboardData || event.originalEvent.clipboardData).items[0]
      if (undefined !== x && x.kind === 'file') {
        const file: any = x.getAsFile()
        this.fileRender(file)
        this.temporary = file
      }
    }, false)
  }
}
</script>