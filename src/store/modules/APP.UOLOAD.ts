import axios from 'axios'

// State
export const state: any = {
  data: []
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
  // code.
}