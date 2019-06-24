<template>
  <div id="app-main">

    <div class="ui--main-left">
      <div class="ui--main-container-sticky">

        <div class="ui--main-menu">
          <div
            class="ui--main-menu-link"
            v-for="(elm, key) in menu"
            :key="key"
            :href="elm.href">
            
            <i :class="`ion-${elm.icon}`"></i>
            <span>{{ elm.label }}</span>
          </div>
        </div>

        <Files />

      </div>
    </div>

    <div class="ui--main-center">
      <Booking ref="md-1" />
      <Customer ref="md-2" />
      <BookingMadeBy ref="md-3" />
      <Transport ref="md-4" />
      <Reservation ref="md-5" />
    </div>

    <div class="ui--main-right">
      <div class="ui--main-container-sticky">
        <Comment />

        <div class="ui--main-record">
          <div class="ui--main-record-list">
            <h4>
              <i class="ion-ios-person"></i>
              <span>Reservation by:&nbsp;</span>
              <strong>undefined</strong>
            </h4>
            <h5>{{ $m().format('LLL') }}</h5>
          </div>

          <div class="ui--main-record-list">
            <h4>
              <i class="ion-ios-alarm"></i>
              <span>Last Update by:&nbsp;</span>
              <strong>undefined</strong>
            </h4>
            <h5>{{ $m().format('LLL') }}</h5>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { hasOwnProp } from '@/utils'
import './style.scss'

// ImportAll **.vue
const components: any = {}
const port: any = require.context('./Helpers', true, /.*\.vue$/)
port.keys().map((file: string): any => {
  components[file.replace(/(^.\/)|(\.vue$)/g, '')] = port(file).default
})

@Component({
  components
})

export default class Main extends Vue {
  // DATA
  private timer: number | undefined = undefined

  // METHODS
  private sync (): void {
    const refs: any = this.$refs
    const data: any = {}

    for (const ref of Object.keys(refs)) {
      const md: any = refs[ref]
      if (hasOwnProp(md, 'sync')) {
        const state: any = md.sync()
        for (const key in state) {
          data[key] = state[key]
        }
      }
    }

    this.$store.commit('APP.MAIN/SET', data)
  }

  // COMPUTED
  private get menu (): any {
    return [
      { href: './', icon: 'ios-apps', label: 'Log' },
      { href: './', icon: 'ios-bulb', label: 'Quick Search' },
      { href: './', icon: 'ios-clipboard', label: 'Copy to New Booking' },
      { href: './', icon: 'ios-close-circle', label: 'Cancel Booking' }
    ]
  }

  // @Mounted (Lifecycle Hooks)
  private mounted (): void {
    // this.timer = setInterval(this.sync, 512)
  }

  // @Destroyed (Lifecycle Hooks)
  private destroyed (): void {
    clearInterval(this.timer)
  }
}
</script>