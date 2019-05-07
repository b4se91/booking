<template>
  <div class="ui--comment">
    <div id="app-above">Reservation Comment</div>
    
    <div class="ui--comment-msg" v-if="store.length">
      <div class="ui--comment-list" v-for="(elm, key) in store" :key="key">
        <div class="ui--comment-owner">
          <img
            class="ui--comment-owner-profile"
            :src="require('@/assets/image/default.jpg')"
          >
          
          <div class="ui--comment-owner-name">
            {{ 'Rahul Goradia' }}
          </div>
          
          <div class="ui--comment-owner-date">
            {{ $m('2019-05-02 08:08:00').fromNow() }}
          </div>
        </div>

        <p>TC by Pierce. Paid by Online Payment VISA MC. RQ TB to BTS Phromphong</p>
      </div>
    </div>

    <div class="ui--comment-input">
      <textarea
        v-model="comment"
        class="ui--comment-area"
        placeholder="Write a comment...">
      </textarea>
      
      <div class="ui--comment-actions">
        <select v-model="template" class="ui--comment-select">
          <option :value="0">Choose a template</option>

          <optgroup
            v-for="(arr, name) in temp"
            :key="name"
            :label="name">

            <option
              v-for="(obj, key) in arr"
              :key="key"
              :value="obj.id">

              {{ obj.label }}

            </option>

          </optgroup>
        </select>

        <Button class="ui--color-error" @click.native="clear">clear</Button>
        <Button class="ui--color-info">submit</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Watch, Component } from 'vue-property-decorator'

@Component
export default class Comment extends Vue {
  // DATA
  public comment: string = String()
  public template: number = 0

  // METHODS
  public clear (): void {
    this.comment = String()
    this.template = 0
  }

  // COMPUTED
  private get db (): any {
    return this.$store.getters['APP.COMMENT/data']
  }

  public get store (): any {
    return Array(2)
  }

  public get temp (): any {
    return this.db.groupBy('category')
  }

  // WATCH
  @Watch('template')
  private setTemplate (value: number): void {
    const res: any = this.db.get('id', value)
    this.comment = res ? res.value : String()
  }
}
</script>