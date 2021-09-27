# About the `contexts` Directory

Use this directory for [React contexts](https://reactjs.org/docs/context.html) – which, by design, are used across different components.

## Usage

From `@ta-interaktiv/webpack-config` >= 2.9.0 on, you can use content in here like this:

```js
import { ThemeContext } from 'contexts/theme'
```

Otherwise, use the relative form:

```js
import { ThemeContext } from '../../contexts/theme'
```
