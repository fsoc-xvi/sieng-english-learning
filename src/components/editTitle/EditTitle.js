import {DictionaryComponent} from '@core/DictionaryComponent';

export class EditTitle extends DictionaryComponent {
  static className = 'module-title'
  static tag = 'div'

  constructor($root, options) {
    super($root, {
      name: 'EditTitle', listeners: ['keyup'], ...options
    })
    this.store = options.store
    this.moduleName = options.moduleName
  }
  toHTML() {
    return `
      <input
        type="text"
        data-id="title_input"
        value=${this.$getState.modules[this.moduleName].name}
        class="module-title__input"
        placeholder="Введите название модуля"
      />
      <div class="module-title__describe">Название модуля</div>
    `
  }

  onKeyup(event) {
    if (event.key === 'Enter' && event.target.dataset.id === 'title_input') {
      event.target.blur()
    }
  }
}
