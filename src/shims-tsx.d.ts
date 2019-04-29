import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }

  interface Array<T> {
    groupBy (p: string): Array<T>
    orderBy (p: string, t: string): Array<T>
    remove  (p: string, v: any): Array<T>
    keep    (p: string, v: any): Array<T>
    get     (p: string, v: any): Array<T>
  }

  interface Window {
    [elem: string]: any,
  }
}
