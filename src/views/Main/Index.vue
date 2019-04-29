<template>
  <div id="app-main">

    <div id="app-main-left">
      <div class="container">

        <div id="app-main-menu">
          <a href="./" class="ui--link-li">
            <i class="ion-ios-apps"></i>
            <span>Log</span>
          </a>

          <a href="./" class="ui--link-li">
            <i class="ion-ios-bulb"></i>
            <span>Quick Search</span>
          </a>

          <a href="./" class="ui--link-li">
            <i class="ion-ios-clipboard"></i>
            <span>Copy to New Booking</span>
          </a>

          <a href="./" class="ui--link-li">
            <i class="ion-ios-close-circle"></i>
            <span>Cancel Booking</span>
          </a>
        </div>

        <Files />

      </div>
    </div>

    <div id="app-main-center">
      <Booking />
      <Customer />
      <MadeBy />
      <Transport />
      <Reservation />
    </div>

    <div id="app-main-right">
      <div class="container">
        <Comment />

        <div id="app-main-latest">
          <div class="ui--test">
            <h4>
              <i class="ion-ios-person"></i>
              <span>Reservation by:&nbsp;</span>
              <strong>undefined</strong>
            </h4>
            <h5>{{ $m().format('LLL') }}</h5>
          </div>

          <div class="ui--test">
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
import Comment from './Helpers/Comment.vue'
import Files from './Helpers/Files.vue'
import Customer from './Helpers/Customer.vue'
import Booking from './Helpers/Booking.vue'
import MadeBy from './Helpers/MadeBy.vue'
import Transport from './Helpers/Transport.vue'
import Reservation from './Helpers/Reservation.vue'
import './style.scss'

@Component({
  components: {
    Comment,
    Files,
    Customer,
    Booking,
    MadeBy,
    Transport,
    Reservation
  }
})

export default class Main extends Vue {
  // code.
}
</script>