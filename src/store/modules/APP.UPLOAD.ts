import axios from 'axios'

// State
export const state: any = {
  data: require('../filetype.json')
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
  },

  PUSH_DATA (stata: any, payload: any): void {
    stata.data.push(
      payload as object
    )
  }
}

// Actions
export const actions: any = {
  /**
   * File Uploader.
   * 
   * @param {FormData} params 
   */
  async uploader ({ commit }: any, params: any) {
    let status: boolean = false

    try {
      const { data }: any = await axios.post('apiEndPoint', params, {
        headers: { 'Content-Type': 'multipart/form-date' }
      })
      // commit('PUSH_DATA', data)
      status = true
    } catch (error) {
      console.warn(error)
    }

    return Promise.resolve(status)
  }
}