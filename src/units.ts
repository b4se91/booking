import { isFunction } from './utils'

/**
 * Truncate limitor text.
 * 
 * @param {String} input
 * @param {Number} limit
 */
function truncate (input: string, limit: number): string {
  if (input.length <= limit) return input

  const bake: string  = '...'
  let x: string = input.substr(0, limit)
  let n: number = input.lastIndexOf(' ')

  if (n > -1) x = input.substr(0, n)

  return String(`${x}${bake}`)
}

/**
 * AddEventListener onTouch in TargetElNode.
 * 
 * @param {Element} element
 * @param {Function} callback
 */
function touch (element: any, callback: any): void {
  let use: boolean = false
  let X: number = 0
  let Y: number = 0
  let data: any = null
  let startNode: any = null

  if (element) {
    element.addEventListener('touchstart', touchStart, false)
    element.addEventListener('touchmove', touchMove, false)
    element.addEventListener('touchend', touchEnd, false)
  } else {
    element.removeEventListener('touchstart', touchStart, false)
    element.removeEventListener('touchmove', touchMove, false)
    element.removeEventListener('touchend', touchEnd, false)
  }

  function touchStart (event: any): void {
    const { pageX, pageY, clientX, clientY }: any = event.changedTouches[0]
      X = pageX || clientX
      Y = pageY || clientY
      use = false
      startNode = event.target
  }

  function touchMove (event: any): void {
    const { pageX, pageY, clientX, clientY }: any = event.changedTouches[0]
    const $x: number = pageX || clientX
    const $y: number = pageY || clientY
    const r: number = 20

    let touchX, touchY
    if ($y + r <= Y) touchY = 'up';
    if ($y - r >= Y) touchY = 'down';
    if ($x + r <= X) touchX = 'left';
    if ($x - r >= X) touchX = 'right';

    if (touchX || touchY) {
      use = true
      data = { x: touchX, y: touchY }
    }
  }

  function touchEnd (event: any): void {
    if (!data) use = false;
    if (use && isFunction(callback)) {
      callback({
        data,
        startNode,
        endNode: event.target
      })
    }
  }
}

/**
 * Convert to Price.
 * 
 * @param {Number|String} input
 * @param {Number} fix delimiters
 */
function price (input: number | string, fix: number): string {
  const n: string = Number(input).toFixed(fix || 0).toString()
  return n.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

/**
 * Cloner.
 * 
 * @param {Object|Array} input
 */
function cloner (input: any): any {
  return JSON.parse( JSON.stringify( input ) )
}

/**
 * Convert to Upper Case.
 * 
 * @param {String} input
 */
function upperCase (input: string): string {
  return input.toLocaleUpperCase()
}

/**
 * Convert to Lower Case.
 * 
 * @param {String} input
 */
function lowerCase (input: string): string {
  return input.toLocaleLowerCase()
}

/**
 * Convert to Capitalize.
 * 
 * @param {String} input
 */
function capitalize (input: string): string {
  return String(`${upperCase(input.charAt(0))}${input.slice(1)}`)
}

/**
 * Convert elm Hightlight.
 * 
 * @param {String} input
 * @param {String} search
 */
function hls (input: string, search: string): string {
  const regExp: any = new RegExp(search, 'gi')
  const hls: string = String(input).replace(regExp,
    (match: string): string => `<span id=hls>${match}</span>`)

    return search ? hls : input
}

/**
 * Events loading component.
 * 
 * @param {VueInstance} Vue
 * @param {Boolean} input
 */
function load (Vue: any, input: boolean = true): void {
  const vuex: any = Vue.$store
  vuex.dispatch('APP.DEMO/L04D', input)
}

/**
 * Manage VModal constructor.
 * 
 * @param {VueInstance} Vue
 * @param {Function} comp
 * @param {Boolean} open
 */
function modal (Vue: any, comp: any = null, open: boolean = true): void {
  const vuex: any = Vue.$store
  vuex.dispatch('APP.DEMO/M0D4L', { comp, open })
}

export {
  hls,
  price,
  touch,
  cloner,
  truncate,
  upperCase,
  lowerCase,
  capitalize,
  load as Load,
  modal as Modal
}