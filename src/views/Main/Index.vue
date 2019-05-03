<template>
  <div id="app-main">

    <div class="ui--main-left">
      <div class="ui--main-container-sticky">

        <div class="ui--main-menu">
          <a
            class="ui--main-menu-link"
            v-for="(elm, key) in menu"
            :key="key"
            :href="elm.href">
            
            <i :class="`ion-${elm.icon}`"></i>
            <span>{{ elm.label }}</span>
          </a>
        </div>

        <Files />

      </div>
    </div>

    <div class="ui--main-center">
      <Booking />
      <Customer />
      <MadeBy />
      <Transport />
      <Reservation />
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
import Booking from './Helpers/Booking.vue'
import Comment from './Helpers/Comment.vue'
import Customer from './Helpers/Customer.vue'
import Files from './Helpers/Files.vue'
import MadeBy from './Helpers/MadeBy.vue'
import Reservation from './Helpers/Reservation.vue'
import Transport from './Helpers/Transport.vue'
import Form from '@/form'
import './style.scss'

@Component({
  components: {
    Booking , Comment,
    Customer, Files,
    MadeBy,   Reservation,
    Transport
  }
})

export default class Main extends Vue {
  // DATA
  private form: any = new Form({
  })

  // COMPUTED
  private get menu (): any {
    return [
      { href: './', icon: 'ios-apps', label: 'Log' },
      { href: './', icon: 'ios-bulb', label: 'Quick Search' },
      { href: './', icon: 'ios-clipboard', label: 'Copy to New Booking' },
      { href: './', icon: 'ios-close-circle', label: 'Cancel Booking' }
    ]
  }
}
</script>