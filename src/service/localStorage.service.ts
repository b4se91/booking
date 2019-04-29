const getStorage = (key: string): any => {
  if (localStorage.getItem(key)) {
    try {
      return localStorage.getItem(key)
    } catch (error) {
      localStorage.removeItem(key)
      throw error
    }
  }
}

const setStorage = (key: string, value: any): void => {
  localStorage.setItem(key, value)
}

const removeStorage = (key: string): void => {
  localStorage.removeItem(key)
}

export {
  getStorage,
  setStorage,
  removeStorage
}