import { isNumber } from '@/utils'
import { upperCase } from '@/units'

export default function Install () {

  /**
   * @param {String} prop
   * @param {Number|String} value
   */
  Array.prototype.get = function (prop: string, value: any): any {
    return this.find((a: any) => a[prop] === value)
  }

  /**
   * @param {String} prop
   * @param {Number|String} value
   */
  Array.prototype.keep = function (prop: string, value: any): any {
    return this.filter((a: any) => a[prop] === value)
  }

  /**
   * @param {String} prop
   * @param {Number|String} value
   */
  Array.prototype.remove = function (prop: string, value: any): any {
    return this.filter((a: any) => a[prop] !== value)
  }

  /**
   * @param {String} prop
   */
  Array.prototype.groupBy = function (prop: string): any {
    return this.reduce((g: any, i: any): any => {
      g[i[prop]] = g[i[prop]] || []
      g[i[prop]].push(i)
      return g
    }, {})
  }

  /**
   * @param {String} prop
   * @param {String} type
   */
  Array.prototype.orderBy = function (prop: string, type: string = 'asc'): any {
    return this.sort((a: any, b: any): any => {
      const propA: any = isNumber(a[prop]) ? a[prop] : upperCase(a[prop])
      const propB: any = isNumber(b[prop]) ? b[prop] : upperCase(b[prop])
      return (type === 'desc')
        ? propB > propA ? 1 : 0
        : propA < propB ? -1 : 0
    })
  }

}