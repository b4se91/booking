// State
export const state: any = {
  loaded: false
}

// Getters
export const getters: any = {
  loaded (state: any): boolean {
    return state.loaded
  }
}

// Mutations
export const mutations: any = {
  LOADED (state: any, payload: boolean): void {
    state.load = payload
  }
}

// Actions
export const actions: any = {
  /**
   * Event Listener loading component
   */
  L04D ({ commit }: any, params: boolean): void {
    if (params) {
      commit('LOADED', params)
    } else {
      setTimeout(() => { commit('LOADED', params) }, 256)
    }
  }
}