import React from 'react'
import ReactDom from 'react-dom'
import routes from './config/routes'
import { createStore, applyMiddleware } from 'redux'
import users from './redux/module/users'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(users, applyMiddleware(thunk))

ReactDom.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app'))
