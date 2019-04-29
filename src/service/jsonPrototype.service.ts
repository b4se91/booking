function encrypt (input: any): string {
  return Boolean(input)
    ? window.btoa(JSON.stringify(input))
    : ''
}

function decrypt (input: any): string {
  return Boolean(input)
    ? JSON.parse(window.atob(input))
    : ''
}

export default {
  encrypt,
  decrypt
}