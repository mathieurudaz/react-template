# About this folder
This folder will hold all of your **redux** stores.

Your `stores/index.js might look like this:

```javascript
import { someReducer } from 'component/someComponent'
import { combineReducers, createStore } from 'redux'

const rootReducer = 
  combineReducers({
    some: someReducer,
    // ...
  })
  
export const store = createStore(rootReducer)
```

Your `index.js`: 

```javascript
import React from 'react'
import { render } from 'react-dom'
import App from './components/main/'
import { Provider } from 'react-redux'
import { store } from 'stores'


// Render the main component into the dom
const rootElement = document.getElementById('app')

if (rootElement != null) {
  // For the time being we can't take advantage of ReactDOM.hydrate(),
  // as the share buttons use the window.location, which produces wrong
  // attributes in react-snap – which are then not corrected by hydrate()
  render(
    <Provider store={store}>
      <App />
    </Provider>, 
    rootElement)
}
```
