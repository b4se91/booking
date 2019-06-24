// import axios from 'axios'
import { hasOwnProp } from '@/utils'

// State
export const state: any = {
  /* BOOKING INFO */
  branch: 0,
  people: 0,
  referId: '',
  totalHours: 0,
  appointmentTime: 0,
  appointmentDate: String('2019-05-07'),

  /* CUSTOMER INFO */
  customerName: '',
  customerPhone: '',
  customerHotel: 0,
  memberCode: '',
  roomNumber: '',
  specialRequest: '',

  /* BOOKING MADE BY */
  madeName: '',
  madePhone: '',
  channel: 0,
  voucherNo: '',
  madeCompany: 0,
  marketingCode: 0,

  /* TRANSPORTATION */
  transportPick: {
    use: false,
    driver: 0,
    time: 0,
    place: '',
    taxiPrice: '',
    taxiLicense: '',
    taxiReason: ''
  },
  transportTake: {
    use: false,
    driver: 0,
    time: 0,
    place: '',
    taxiPrice: '',
    taxiLicense: '',
    taxiReason: ''
  },

  /* RESERVATION AGENT */
  reservationBy: 0,
  receivedBy: 0,
}

// Getters
export const getters: any = {
  data (state: any) {
    return state
  }
}

// Mutations
export const mutations: any = {
  SET (state: any, payload: any): void {
    for (const key in payload) {
      if (hasOwnProp(state, key)) {
        state[key] = payload[key]
      }
    }
  }
}

// Actions
export const actions: any = {
  /**
   * @param {Object} params
   */
  async push ({ commit }: any, params: any) {
    let status: boolean = false

    try {
      commit('SET', params)
    } catch (error) {
      console.warn(error)
    }

    return Promise.resolve(status)
  }
}