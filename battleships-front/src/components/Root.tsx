import { History } from 'history'
import * as React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { Store } from 'redux'
import { State } from '../types'

interface Props {
  store: Store<State>
  history: History
}

class Root extends React.PureComponent<Props> {
  render() {
    const { store, history } = this.props

    return (
      <Provider store={store}>
          {/* <Route path="/" component={AppRoutes} />            */}
      </Provider>
    )
  }
}

export default Root
