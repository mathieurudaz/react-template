import React from 'react'
import { App } from '../index'
import { shallow, ShallowWrapper } from 'enzyme'
import { Masthead } from '@ta-interaktiv/react-masthead'
import { Footer } from '@ta-interaktiv/react-footer'
import { cosmiconfig } from 'cosmiconfig'
import { CosmiconfigResult } from 'cosmiconfig/dist/types'

/** taStandaloneConfig – used to see whether the main component should contain masthead and footer or not */
let config: CosmiconfigResult

beforeAll(async () => {
  const explorer = cosmiconfig('taStandalone')
  /*
   Do not presume that we know where this config resides, it could also be in package.json
  */
  config = await explorer.search()
})

const defaultValue = expect.not.stringMatching(/^0+$/)
const articleIdPattern = expect.stringMatching(/^\d{8,12}$/)

let MainComponent: ShallowWrapper

beforeEach(() => {
  MainComponent = shallow(<App />)
})

describe('Masthead', () => {
  it('should contain the correct amount of mastheads', () => {
    const amount = config && config.config.isEmbeddable ? 0 : 1
    expect(MainComponent.find(Masthead)).toHaveLength(amount)
  })

  it('should correctly set the article ID of the masthead', () => {
    // Return early when embeddable
    if (config && config.config.isEmbeddable) {
      console.log('Is Embeddable, skipping ArticleID requirement')
      return
    }

    expect(MainComponent.find(Masthead).prop('articleId')).toEqual(defaultValue)
    expect(MainComponent.find(Masthead).prop('articleId')).toEqual(
      articleIdPattern
    )
  })
})

describe('Footer', () => {
  it('should contain the correct amount of footers', () => {
    const amount = config && config.config.isEmbeddable ? 0 : 1
    expect(MainComponent.find(Footer)).toHaveLength(amount)
  })

  it('should correctly set the article ID of the footer', () => {
    // Return early when embeddable
    if (config && config.config.isEmbeddable) {
      console.log('Is Embeddable, skipping ArticleID requirement')
      return
    }

    expect(MainComponent.find(Footer).prop('articleId')).toEqual(defaultValue)
    expect(MainComponent.find(Footer).prop('articleId')).toEqual(
      articleIdPattern
    )
  })

  it('should not contain the default credits', () => {
    expect(MainComponent.find(Footer).prop('credits')).not.toEqual([
      ['Credits', 'go here']
    ])
  })
})
