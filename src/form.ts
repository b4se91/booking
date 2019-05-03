export default class Form {
  /**
   * Create Local State.
   */
  [propName: string]: any

  /**
   * Create a new Form instance.
   *
   * @param {object} data
   */
  constructor (data: any) {
    this._bak = JSON.parse( JSON.stringify( data ) )
    
    for (let field in data) {
      this[field] = data[field]
    }
  }

  /**
   * Fetch all relevant data for the form.
   */
  data (): any {
    let data = Object.assign({}, this)
    delete data.backup

    return data
  }

  /**
   * Set main state value.
   */
  set (fields: any): void {
    for (let field in fields) {
      this[field] = fields[field]
    }
  }

  /**
   * Reset the form fields.
   */
  reset (): void {
    for (let field in this._bak) {
      this[field] = this._bak[field]
    }
  }
}