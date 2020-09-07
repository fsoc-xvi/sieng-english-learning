import {StateProcessor} from '@core/StateProcessor';
import {FirebaseClient} from '@/shared/FirebaseClient';
import createStore from '@/redux/createStore';
import {rootReducer} from '@/redux/rootReducer';
import {toInitialState} from '@/redux/initialState';
import {$} from '@core/Dom';
import {ActiveRoute} from '@core/ActiveRoute';
import {definePage} from '@core/utils';

export class Router {
  constructor(selector, routes) {
    this.$placeholder = $(selector)
    this.routes = routes
    this.store = {}
    this.page = null
    this.init()
  }
  init() {
    this.processor = new StateProcessor(new FirebaseClient())
    this.processor.get().then(state => {
      this.store = createStore(rootReducer, toInitialState(state))
      window.addEventListener('hashchange', this.changePageHandler.bind(this))
      this.changePageHandler()
    })
  }

  changePageHandler() {
    if (this.page && typeof this.page.getRoot() === 'object') {
      this.page.destroy()
    }
    const Page = definePage(ActiveRoute, this.routes)
    this.page = new Page(this.store, this.processor)
    if (typeof this.page.getRoot() === 'string') {
      ActiveRoute.navigate(this.page.getRoot())
    } else {
      this.$placeholder.clear().append(this.page.getRoot())
      this.page.afterInit()
    }
  }
}
