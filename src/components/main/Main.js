import {$} from '@core/Dom';

export class Main {
  constructor(options) {
    this.components = options.components || []
  }
  getRoot() {
    const $root = $.create('div', 'main')
    const options = {}
    this.components = this.components.map(Component => {
      const tag = Component.tag || 'div'
      const className = Component.className || ''
      const $el = $.create(tag, className)
      const component = new Component($el, options)
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })
    return $root
  }
  initialize() {
    this.components.forEach(component => {
      component.init()
    })
  }
}
