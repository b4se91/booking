// State
export const state: any = {
  load: false,
  modal: {
    open: false,
    comp: null,
    title: 'modal title'
  }
}

// Getters
export const getters: any = {
  loaded (state: any): boolean {
    return state.load
  },

  modal (state: any): any {
    return state.modal
  }
}

// Mutations
export const mutations: any = {
  LOADED (state: any, payload: boolean): void {
    state.load = payload
  },

  VMODAL (state: any, payload: any): void {
    state.modal = payload
  }
}

// Actions
export const actions: any = {
  /**
   * Event Listener loading component
   */
  L04D ({ commit }: any, params: boolean): void {
    commit('LOADED', params)
  },

  /**
   * Event Listener modal component
   */
  M0D4L ({ commit }: any, params: any): void {
    commit('VMODAL', params)
  }
}