# `hooks` Directory

Use this directory for your [React hooks](https://reactjs.org/docs/hooks-custom.html) that are used across different components.

## Usage

From `@ta-interaktiv/webpack-config` >= 2.9.0 on, you can use content in here like this:

```js
import { useMyHook } from 'hooks/myHook'
```

Otherwise, use the relative form:

```js
import { useMyHook } from '../../hooks/myHook'
```
