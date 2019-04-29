function isObjectEmpty (input: any): boolean {
  if (Object.getOwnPropertyNames) {
    return (Object.getOwnPropertyNames(input).length === 0)
  } else {
    for (let key in input) {
      if (hasOwnProp(input, key)) {
        return false
      }
    }
    return true
  }
}

function isObject (input: any): boolean {
  // IE8 will treat undefined and null as object if it wasn't for
  // input != null
  return input != null && Object.prototype.toString.call(input) === '[object Object]'
}

function isArray (input: any): boolean {
  return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]'
}

function isFunction (input: any): boolean {
  return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]'
}

function isNumber (input: any): boolean {
  return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]'
}

function isDate (input: any): boolean {
  return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]'
}

function isUndefined (input: any): boolean {
  return input === void 0
}

function hasOwnProp (object: object, prop: string): boolean {
  return object.hasOwnProperty(prop) || Object.prototype.hasOwnProperty.call(object, prop)
}

function hasArray (input: any): number {
  return isArray(input) ? input.length : 0
}

export {
  hasArray,
  hasOwnProp,
  isObjectEmpty,
  isObject,
  isArray,
  isDate,
  isNumber,
  isFunction,
  isUndefined
}