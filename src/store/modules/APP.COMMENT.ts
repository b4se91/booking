// import axios from 'axios'

// State
export const state: any = {
  data: require('../comment.json')
}

// Getters
export const getters: any = {
  data (state: any): boolean {
    return state.data
  }
}

// Mutations
export const mutations: any = {
  SET_DATA (state: any, payload: any): void {
    state.data = payload
  }
}

// Actions
export const actions: any = {
  async run ({ commit }: any) {
    try {
      const data = require('../comment.json')
      commit('SET_DATA', data)
    } catch (err) {
      console.warn(err.message)
    }
  }
}