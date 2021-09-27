# Text

Use this directory to store your [MDX files](https://mdxjs.com) in case they are independent from your components or when it is easier to just have the complete article text in one directory.

## Usage

From `@ta-interaktiv/webpack-config` >= 2.9.0 on, you can use content in here like this:

```js
import introText from 'text/intro.mdx'
```

Otherwise, use the relative form:

```js
import introText from '../../text/intro.mdx'
```
