/**
 * @fileOverview Use this file to wrap the App component with any additional
 * wrappers – like a Redux provider or a PersistGate.
 */

import { hot } from 'react-hot-loader/root'
import { AppComponent } from 'components/main/main.component'

export const App = hot(AppComponent)
