<template>
  <div class="ui--membership">
    
    <div class="ui--membership-filter">
      <Input
        name="ui--model-search"
        type="text"
        label="Search"
        v-model="search"
      />

      <Select
        name="ui--model-category"
        label="Category"
        :options="db"
        :field="{ key: 'id', label: 'label' }"
      />

      <Select
        name="ui--model-activate"
        label="Activate"
        :options="db"
        :field="{ key: 'id', label: 'label' }"
      />
    </div>

    <div class="ui--membership-container ui--table">

      <div class="ui--table-row" v-for="(elm, key) in 10" :key="key">
        <div class="ui--table-col">
          <div class="ui--table-row-index"
            v-html="h('00000')">
          </div>

          <div class="ui--table-row-sub">#Princess</div>
        </div>

        <div class="ui--table-col">
          <div class="ui--table-row-index"
            v-html="h('Rahul Goradia')">
          </div>

          <div class="ui--table-row-sub">Female</div>
        </div>

        <div class="ui--table-col">
          <div class="ui--table-row-index"
            v-html="h('email@sample.com')">
          </div>

          <div class="ui--table-row-sub"
            v-html="h('000 000 0000')">
          </div>
        </div>

        <div class="ui--table-col">
          <div class="ui--table-row-index">{{ $m().format('ll') }}</div>
          <div class="ui--table-row-sub">Expired</div>
        </div>

        <div class="ui--table-actions">
          <Button class="ui--color-info" @click.native="apply(elm)">Apply</Button>
          <Button class="ui--color-primary" title="View Profile">
            <span class="ion-ios-search"></span>
          </Button>
        </div>
      </div>

    </div>

    <Pages v-model="currentPage" :maxlength="4" />

  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Load, hls } from '@/units'
import Pages from '@/components/Pages.vue'
import '@/assets/style/components/Membership.scss'

@Component({
  components: {
    Pages
  }
})

export default class VMembership extends Vue {
  // __DATA
  private currentPage: number = 1
  private search: string = this.memberCode

  // __METHODS
  private apply (param: any): void {
    // code.
  }

  private h (input: string): string {
    return hls(input, this.search)
  }

  // __COMPUTED
  private get db (): void {
    return this.$store.getters['APP.UPLOAD/data']
  }

  private get memberCode (): string {
    const { memberCode }: any = this.$store.getters['APP.MAIN/data']
    return memberCode
  }

  // @Created (Lifecycle Hooks)
  private created (): void {
    // Load(this)
  }

  // @Mounted (Lifecycle Hooks)
  private mounted (): void {
    // Load(this, false)
  }
}
</script>