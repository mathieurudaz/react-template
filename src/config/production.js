import baseConfig from './base'

const config = {
  appEnv: 'production' // feel free to remove the appEnv property here
}

export default Object.freeze(Object.assign({}, baseConfig, config))
