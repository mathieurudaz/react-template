import React from 'react'
import { render } from 'react-dom'
import { App } from 'components/main'

// Render the main component into the dom
const rootElement = document.getElementById('app')

if (rootElement != null) {
  // For the time being we can't take advantage of ReactDOM.hydrate(),
  // as the share buttons use the window.location, which produces wrong
  // attributes in react-snap – which are then not corrected by hydrate()
  render(<App />, rootElement)
}
