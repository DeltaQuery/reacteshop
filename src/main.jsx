import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux/es/exports'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer}  from './reducers/rootReducer'
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink, gql } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
      uri: "https://web-production-4f3e.up.railway.app/"
  })
})

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composedEnhancers = composeAlt(applyMiddleware(thunk))

const store = createStore(rootReducer, composedEnhancers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <ApolloProvider client={client}>
  <HashRouter>
    <App />
  </HashRouter>
  </ApolloProvider>
  </Provider>
)
