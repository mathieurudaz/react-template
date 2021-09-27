# About this folder

Store localisation files in this folder. I.e. 

### `locales/de.yaml`
```yaml
message: Dies ist eine wichtige Nachricht! 
```

### `locales/fr.yaml`
```yaml
message: C'est un message important!
```

### `component/myComponent/index.js`
```javascript
import de from 'locales/de.yaml'
import fr from 'locales/fr.yaml'

const localisationStrings = {
  de,
  fr
}

export function Component ({locale}) {
  return (
    <div>{localisationStrings[locale].message}</div>
  )
}
```
