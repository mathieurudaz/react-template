# Library

Use this directory to keep utility functions and data that is being used by several other components.

In most cases, this directory is to be prefered over putting everything into the `config` directory.

## Usage

From `@ta-interaktiv/webpack-config` >= 2.9.0 on, you can use content in here like this:

```js
import { utilityFunction } from 'lib/utility'
```

Otherwise, use the relative form:

```js
import { utilityFunction } from '../../lib/utility'
```
